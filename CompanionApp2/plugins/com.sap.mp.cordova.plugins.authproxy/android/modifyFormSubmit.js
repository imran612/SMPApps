if (window.RequestInfoSetter && window.RequestInfoSetter.setAuthProxyRequestInfo && !window.getNextAuthProxyRequestInfoID ) {
	var smpAuthProxyRequestInfoID = 1000;
	window.getNextAuthProxyRequestInfoID = function(){
		smpAuthProxyRequestInfoID += 1;
		if (smpAuthProxyRequestInfoID > 9999) {
			smpAuthProxyRequestInfoID = 1000;
		}
		return smpAuthProxyRequestInfoID;
	};
	var originalOpen = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function(){
		if (arguments.length >= 2){
			this.smpExtraInfoMethod = arguments[0];
			var url = arguments[1];
			this.smpExtraInfoRequestID = 'smpKapselHasExtraRequestInfo' + window.getNextAuthProxyRequestInfoID();
			this.smpExtraInfoUrl = url + this.smpExtraInfoRequestID;
			arguments[1] = this.smpExtraInfoUrl;
		}
		originalOpen.apply(this,arguments);
	};
	var originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
	XMLHttpRequest.prototype.setRequestHeader = function(){
		this.smpExtraInfoHeaders = this.smpExtraInfoHeaders ? this.smpExtraInfoHeaders : {};
		this.smpExtraInfoHeaders[arguments[0]] = arguments[1];
		originalSetRequestHeader.apply(this,arguments);
	};
	var originalSend = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.send = function(){
		this.smpExtraInfoHeaders = this.smpExtraInfoHeaders ? this.smpExtraInfoHeaders : {};
		var body = arguments[0] ? arguments[0] : '';
		window.RequestInfoSetter.setAuthProxyRequestInfo(this.smpExtraInfoMethod, this.smpExtraInfoUrl, JSON.stringify(this.smpExtraInfoHeaders), body);
		var originalOnReadyStateChange = this.onreadystatechange;
		this.onreadystatechange = function(){
			if(this.readyState === 4){
				var responseHeaders = window.RequestInfoSetter.getAuthProxyResponseHeader(this.smpExtraInfoRequestID);
				if (responseHeaders) {
					this.getAllResponseHeaders = function(){
						var headerObject = JSON.parse(responseHeaders);
						var headerString = '';
						for (var headerName in headerObject) {
							if (headerObject.hasOwnProperty(headerName)) {
								if (headerString.length > 0){
									headerString += '\r\n';
								}
								headerString += headerName + ': ' + headerObject[headerName];
							}
						}
						return headerString;
					};
				}
			}
			if(originalOnReadyStateChange){
				originalOnReadyStateChange.apply(this,arguments);
			}
		};
		originalSend.apply(this,arguments);
	};
}

if (window.RequestInfoSetter && window.RequestInfoSetter.setAuthProxyRequestInfo ) {
	var forms = document.forms;
	for(var i = 0; i<forms.length; i++){
		var originalSubmit = forms[i].submit;
		var modifiedSubmit = function() {
			var elements = this.elements;
			var formData = '';
			for(var i=0; i<elements.length; i++) {
				if (formData.length > 0) {
					formData += '&';
				}
				formData += encodeURIComponent(elements[i].name) + '=' + encodeURIComponent(elements[i].value);
			}
			this.originalAction = this.action;
			this.action = this.action + 'smpKapselFormHasExtraRequestInfo' + getNextAuthProxyRequestInfoID();
			var headers = {};
			var body = '';
			var url = this.action;
			if (this.method.toUpperCase() === 'POST') {
				headers['Content-Type'] = 'application/x-www-form-urlencoded';
				body = formData;
			} else {
				if (url.indexOf('?') > 0) {
					formData = '&' + formData;
				} else {
					formData = '?' + formData;
				}
				url += formData;
			}
			window.RequestInfoSetter.setAuthProxyRequestInfo(this.method, url, JSON.stringify(headers), body);
			originalSubmit.apply(this,arguments);
		};
		forms[i].submit = modifiedSubmit;
	}
}