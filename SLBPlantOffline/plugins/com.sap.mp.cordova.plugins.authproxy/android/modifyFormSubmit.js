if (window.RequestInfoSetter && window.RequestInfoSetter.isHttpsConversionHost ) {
	document.addEventListener('click',function(e){
		var target = e.target;
		var href = target.href;
		if (href) {
			// If a link of some sort has been clicked, check to make sure it uses HTTP if it is an HTTPSConverionHost
			if (href.toLowerCase().indexOf("https://") == 0 && window.RequestInfoSetter.isHttpsConversionHost(href)) {
				// Switch the href to http (native side will switch back to https)
				target.href = "http" + href.substring(5);
				// Stop this event, but click the element again so the event will trigger with the proper href value.
				e.stopPropagation();
				target.click();
			}
		}
	});
}