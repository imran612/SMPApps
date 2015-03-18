/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.sap.ide.companion;

import android.os.Bundle;
import android.content.Intent;
import org.apache.cordova.*;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

public class WebIdeCompanion extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        
		String urlStr = Config.getStartUrl();
		Intent intent = getIntent();
		Bundle bundle = intent.getExtras();
		if (bundle != null) {
			String str = bundle.getString("previewurl", "");
			String str1 = bundle.getString("preview", "");
			if (str.length()>0) {
				urlStr = str.trim();
				urlStr = urlStr.replaceAll("_\\*\\*\\*_", "\\$");
				if (str1.trim().equals("direct")) {
					loadUrl(urlStr);
					return;
				}
				SharedPreferences mSharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);
				SharedPreferences.Editor mEditor = mSharedPreferences.edit();
				mEditor.putString("previewURL", urlStr);
				mEditor.commit();
			}
		} else {
			SharedPreferences mSharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);
			SharedPreferences.Editor mEditor = mSharedPreferences.edit();
			mEditor.remove("previewURL");
			mEditor.commit();
		}
		
		loadUrl(launchUrl);
    }
}
