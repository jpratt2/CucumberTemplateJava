var Nanobar=function(){var c,d,e,f,g,h,k={width:"100%",height:"4px",zIndex:9999,top:"0"},l={width:0,height:"100%",clear:"both",transition:"height .3s"};c=function(a,b){for(var c in b)a.style[c]=b[c];a.style["float"]="left"};f=function(){var a=this,b=this.width-this.here;0.1>b&&-0.1<b?(g.call(this,this.here),this.moving=!1,100==this.width&&(this.el.style.height=0,setTimeout(function(){a.cont.el.removeChild(a.el)},300))):(g.call(this,this.width-b/4),setTimeout(function(){a.go()},16))};g=function(a){this.width=
a;this.el.style.width=this.width+"%"};h=function(){var a=new d(this);this.bars.unshift(a)};d=function(a){this.el=document.createElement("div");this.el.style.backgroundColor=a.opts.bg;this.here=this.width=0;this.moving=!1;this.cont=a;c(this.el,l);a.el.appendChild(this.el)};d.prototype.go=function(a){a?(this.here=a,this.moving||(this.moving=!0,f.call(this))):this.moving&&f.call(this)};e=function(a){a=this.opts=a||{};var b;a.bg=a.bg||"#000";this.bars=[];b=this.el=document.createElement("div");c(this.el,
k);a.id&&(b.id=a.id);b.style.position=a.target?"relative":"fixed";a.target?a.target.insertBefore(b,a.target.firstChild):document.getElementsByTagName("body")[0].appendChild(b);h.call(this)};e.prototype.go=function(a){this.bars[0].go(a);100==a&&h.call(this)};return e}();
"use strict";!function(){var a,b,c,d,e=window.logModule.getLogger("JiraAddonShareDialogContentScript"),f=function(){e.info("_attachMessageListener","entering"),chrome.runtime.onMessage.addListener(h)},g=function(){e.info("_removeMessageListener","entering"),chrome.runtime.onMessage.removeListener(h)},h=function(a,b,c){switch(a.message){case window.constantsModule.JS_MESSAGES.DISABLE_CONTENT_SCRIPT:e.info("_messageListener","processing",a),m();break;case window.constantsModule.JS_MESSAGES.UPDATE_RECORDING_STATUS:i(a.statusUpdate)}},i=function(a){var b=a.recordingStatus;switch(a.type){case window.constantsModule.RECORDING_EVENTS.STATE_CHANGE:switch(b.state){case window.constantsModule.RECORDING_STATES.PROCESSING:case window.constantsModule.RECORDING_STATES.UPLOADING:b.duration&&(e.info("_handleRecordingStatusUpdate","updating duration",b.duration),k(b.duration)),j(0);break;case window.constantsModule.RECORDING_STATES.COMPLETED:case window.constantsModule.RECORDING_STATES.RECORDING_FAILED:j(100,!0)}break;case window.constantsModule.RECORDING_EVENTS.PROGRESS:switch(b.state){case window.constantsModule.RECORDING_STATES.UPLOADING:b.uploadProgress&&(e.info("_handleRecordingStatusUpdate","upload progress",b.uploadProgress),j(b.uploadProgress))}}},j=function(a,b){if(d&&-1!==d.indexOf(window.constantsModule.FEATURES.SHOW_UPLOAD_PROGRESS)){e.debug("_updateUploadProgress","updating progress",a);var f=$(".js-nanobar-background");if(b)c&&(c.go(100),f.hide());else{if(void 0==c){var g={id:"ajaxLoader",bg:"#E91E63",target:document.getElementById("ajaxLoaderContainer")};c=new window.Nanobar(g)}f.is(":hidden")&&f.show(),c&&c.go(95>a?a:95)}}},k=function(a){e.debug("_updateDuration","updating duration",a);var b=Math.floor(a/60),c=a%60;10>c&&(c="0"+c),$(".js-duration").html("("+b+":"+c+")")},l=function(){e.info("_init","initializing"),BackgndAPI.getCurrentTabId({},function(c){a=c.tabId,BackgndAPI.fetchRecordingStatus({tabId:a},function(c){c?(e.info("_init","got recording status",c.recordingId),b=c.recordingId,window.clientUtilsModule.getUserFeatures(function(a){d=a,e.info("_init","got user features",d)}),void 0!=c.duration&&(e.info("_init","updating duration",c.duration),k(c.duration)),$(".js-video-url").attr("href",c.publicUrl+"?p=1"),BackgndAPI.fetchThumbnailUrl({tabId:a},function(a){e.info("_init","updating thumbnail"),$(".js-thumbnail").attr("src",a.thumbnailData.screenThumbnail)})):e.debug("_init","recording status not found for this tab")}),f()})},m=function(){e.info("_destroy","entering"),g()};$(document).ready(function(){l()})}();