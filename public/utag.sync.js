//tealium universal tag - utag.sync ut4.0.202101111809, Copyright 2021 Tealium.com Inc. All Rights Reserved.
(function(){'use strict';window.__TEALIUM=window.__TEALIUM||{};window.__TEALIUM.adobe=window.__TEALIUM.adobe||{};var target=window.__TEALIUM.adobe.target=window.__TEALIUM.adobe.target||{'loaded':false,'mboxCount':0,'css':{'id':'tealium-adobe-target-hide','mbid':'tealium-adobe-target-mbox-hide','divIds':{'Main':1,'carousel':1,'content-products-mini-dmp':1,'copyContent':1,'hp_bottoniera':1,'lp_casino_desc':1,'lpc_altrisport_heroimg':1,'nome-squadra':1,'p_p_id_56_INSTANCE_VFMfHvq4M4FA_':1,'schermo':1,'title-products-mini-dmp':1},'status':'visible','add':function(){this.status='hidden';var css=document.createElement('style'),style='body { opacity : 0 !important} .mboxDefault {visibility:hidden !important;}';css.type='text/css';css.id=this.id;if(css.styleSheet){css.styleSheet.cssText=style;}else{css.appendChild(document.createTextNode(style));}document.getElementsByTagName('head')[0].appendChild(css);try{this.render();}catch(e){}this.setTimeoutRemove();return true;},'render':function(div2reveal){if(div2reveal){delete this.divIds[div2reveal];}if(Object.keys(this.divIds).length!==0){var dvLst=[];Object.keys(this.divIds).forEach(function(key){dvLst.push('#'+key);});var css=document.getElementById(this.mbid),isPresent=true;if(!css){css=document.createElement('style');css.type='text/css';css.id=this.mbid;isPresent=false;}var style=dvLst.join()+' {visibility:hidden !important;}';if(css.styleSheet){css.styleSheet.cssText=style;}else{if(css.firstChild){css.removeChild(css.firstChild);}css.appendChild(document.createTextNode(style));}if(!isPresent){document.getElementsByTagName('head')[0].appendChild(css);}this.status='hidden';}else{this.removeRender();}this.setTimeoutRemoveRender();return true;},'remove':function(){this.status='visible';var css;while(css=document.getElementById(this.id)){if(css){css.parentNode.removeChild(css);}}return true;},'setTimeoutRemove':function(){if(this.setTimeout){return;}this.setTimeout=true;setTimeout(function(){var ns=window.__TEALIUM.adobe.target.css;ns.remove.call(ns);},5000);},'removeRender':function(){var css=document.getElementById(this.mbid);if(css){css.parentNode.removeChild(css);}return true;},'setTimeoutRemoveRender':function(){if(this.setTimeoutRender){return;}this.setTimeoutRender=true;setTimeout(function(){var ns=window.__TEALIUM.adobe.target.css;ns.removeRender.call(ns);},5000);}}};window.mboxCreate=window.mboxCreate||function(){__TEALIUM.adobe.target.mboxCount++;var args=Array.prototype.slice.call(arguments),cssName='mbox-name-'+args[0],mbox_el=document.querySelectorAll('.'+cssName);mbox_el=mbox_el&&mbox_el[mbox_el.length-1];if(!mbox_el){mbox_el=document.querySelectorAll('.mboxDefault');mbox_el=mbox_el&&mbox_el[mbox_el.length-1];}if(mbox_el){if(mbox_el.classList){mbox_el.classList.add(cssName);}else{mbox_el.className+=' '+cssName;}}__TEALIUM.adobe.target.mboxes=__TEALIUM.adobe.target.mboxes||[];__TEALIUM.adobe.target.mboxes.push({args:args,type:'create',selector:'.'+cssName});return true;};var func='var args = Array.prototype.slice.call(arguments), target = __TEALIUM.adobe.target; target.mboxCount++;target.mboxes = target.mboxes || [];target.mboxes.push({args : args, type : \'__replace__\'});return true;';window.mboxDefine=window.mboxDefine||new Function(func.replace('__replace__','define'));window.mboxUpdate=window.mboxUpdate||new Function(func.replace('__replace__','update'));window.adobe=window.adobe||{};window.adobe.target=window.adobe.target||{};window.adobe.target.getOffer=window.adobe.target.getOffer||new Function(func.replace('__replace__','getOffer'));var match=document.cookie.match(/(^|;s)mbox=(.*)/);if(!match||(match&&match[2]&&match[2].indexOf('disable')===-1)){target.css.add();}}());window.utag=new Object();window.utag.manage_queue=true;window.utag.view=function(data){if(typeof window.utag_queue_view=="undefined")window.utag_queue_view=new Array();utag_queue_view.push(data)}
window.utag.link=function(data){if(typeof window.utag_queue_link=="undefined")window.utag_queue_link=new Array();utag_queue_link.push(data)}