(function(w,d){zaraz.debug=(bR="")=>{document.cookie=`zarazDebug=${bR}; path=/`;location.reload()};window.zaraz._al=function(eU,eV,eW){w.zaraz.listeners.push({item:eU,type:eV,callback:eW});eU.addEventListener(eV,eW)};zaraz.preview=(fA="")=>{document.cookie=`zarazPreview=${fA}; path=/`;location.reload()};zaraz.i=function(eO){const eP=d.createElement("div");eP.innerHTML=unescape(eO);const eQ=eP.querySelectorAll("script");for(let eR=0;eR<eQ.length;eR++){const eS=d.createElement("script");eQ[eR].innerHTML&&(eS.innerHTML=eQ[eR].innerHTML);for(const eT of eQ[eR].attributes)eS.setAttribute(eT.name,eT.value);d.head.appendChild(eS);eQ[eR].remove()}d.body.appendChild(eP)};zaraz.f=async function(eX,eY){const eZ={credentials:"include",keepalive:!0,mode:"no-cors"};if(eY){eZ.method="POST";eZ.body=new URLSearchParams(eY);eZ.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(eX,eZ)};window.zaraz._p=async a=>new Promise((b=>{if(a){a.e&&a.e.forEach((c=>{try{new Function(c)()}catch(d){console.error(`Error executing script: ${c}\n`,d)}}));Promise.allSettled((a.f||[]).map((e=>fetch(e[0],e[1]))))}b()}));zaraz.pageVariables={};zaraz.__zcl={};zaraz.track=async function(en,eo,ep){return new Promise(((eq,er)=>{const es={name:en,data:{}};for(const et of[localStorage,sessionStorage])Object.keys(et||{}).filter((ev=>ev.startsWith("_zaraz_"))).forEach((eu=>{try{es.data[eu.slice(7)]=JSON.parse(et.getItem(eu))}catch{es.data[eu.slice(7)]=et.getItem(eu)}}));Object.keys(zaraz.pageVariables).forEach((ew=>es.data[ew]=JSON.parse(zaraz.pageVariables[ew])));Object.keys(zaraz.__zcl).forEach((ex=>es.data[`__zcl_${ex}`]=zaraz.__zcl[ex]));es.data.mcListeners=zaraz.mcListeners;
//
es.data={...es.data,...eo};es.zarazData=zarazData;fetch("/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(es)}).catch((()=>fetch("/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(es)}).catch((()=>{console.warn("2nd fetch to Cloudflare Zaraz failed")})))).then((function(ez){zarazData._let=(new Date).getTime();ez.ok||er();return 204!==ez.status&&ez.json()})).then((async ey=>{await zaraz._p(ey);"function"==typeof ep&&ep()})).finally((()=>eq()))}))};zaraz.set=function(eA,eB,eC){try{eB=JSON.stringify(eB)}catch(eD){return}prefixedKey="_zaraz_"+eA;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[eA];if(void 0!==eB){eC&&"session"==eC.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,eB):eC&&"page"==eC.scope?zaraz.pageVariables[eA]=eB:localStorage&&localStorage.setItem(prefixedKey,eB);zaraz.__watchVar={key:eA,value:eB}}};for(const{m:eE,a:eF}of zarazData.q.filter((({m:eG})=>["debug","set"].includes(eG))))zaraz[eE](...eF);for(const{m:eH,a:eI}of zaraz.q)zaraz[eH](...eI);delete zaraz.q;delete zarazData.q;zaraz.fulfilTrigger=function(du,dv,dw,dx){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[du]||(zaraz.__zarazTriggerMap[du]="");zaraz.__zarazTriggerMap[du]+="*"+dv+"*";zaraz.track("__zarazEmpty",{...dw,__zarazClientTriggers:zaraz.__zarazTriggerMap[du]},dx)};window.dataLayer=w.dataLayer||[];zaraz._processDataLayer=co=>{for(const cp of Object.entries(co))zaraz.set(cp[0],cp[1],{scope:"page"});if(co.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(co.event))return;let cq={};for(let cr of dataLayer.slice(0,dataLayer.indexOf(co)+1))cq={...cq,...cr};delete cq.event;co.event.startsWith("gtm.")||zaraz.track(co.event,cq)}};const cn=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...cs){let ct=cn.apply(this,cs);zaraz._processDataLayer(cs[0]);return ct}});dataLayer.forEach((cu=>zaraz._processDataLayer(cu)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((bS=>clearTimeout(bS)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((bT=>bT.item.removeEventListener(bT.type,bT.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.mcListeners={};zaraz.track("__zarazSPA")}),100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.track("__zarazSPA")}),100)}};zaraz._p({"e":["(function(w,d){(function(){zaraz.i(`%3Cscript%20type%3D%22text/javascript%22%20async%3D1%3E%0D%0A%20%20%20%20%3B%28function%28p%2Cl%2Co%2Cw%2Ci%2Cn%2Cg%29%7Bif%28%21p%5Bi%5D%29%7Bp.GlobalSnowplowNamespace%3Dp.GlobalSnowplowNamespace%7C%7C%5B%5D%3B%20p.GlobalSnowplowNamespace.push%28i%29%3Bp%5Bi%5D%3Dfunction%28%29%7B%28p%5Bi%5D.q%3Dp%5Bi%5D.q%7C%7C%5B%5D%29.push%28arguments%29%20%7D%3Bp%5Bi%5D.q%3Dp%5Bi%5D.q%7C%7C%5B%5D%3Bn%3Dl.createElement%28o%29%3Bg%3Dl.getElementsByTagName%28o%29%5B0%5D%3Bn.async%3D1%3B%20n.src%3Dw%3Bg.parentNode.insertBefore%28n%2Cg%29%7D%7D%28window%2Cdocument%2C%22script%22%2C%22https%3A//cdn.jsdelivr.net/npm/@snowplow/javascript-tracker@3.6.0/dist/sp.min.js%22%2C%22snowplow%22%29%29%3B%0D%0A%3C/script%3E%0D%0A%0D%0A%0D%0A%0D%0A%3Cscript%3E%0D%0A%0D%0Awindow.snowplow%28%27newTracker%27%2C%20%27sp%27%2C%20%27https%3A//5liberdades.com.br%27%2C%20%7B%0D%0A%20%20appId%3A%20%275liberdades%27%2C%0D%0A%20%20platform%3A%20%27web%27%2C%0D%0A%20%20cookieDomain%3A%20null%2C%0D%0A%20%20discoverRootDomain%3A%20true%2C%0D%0A%20%20cookieName%3A%20%27_wc_%27%2C%0D%0A%20%20cookieSameSite%3A%20%27Lax%27%2C%20//%20Recommended%0D%0A%20%20cookieSecure%3A%20true%2C%0D%0A%20%20encodeBase64%3A%20false%2C%0D%0A%20%20respectDoNotTrack%3A%20false%2C%0D%0A%20%20eventMethod%3A%20%27post%27%2C%0D%0A%20%20bufferSize%3A%201%2C%0D%0A%20%20maxPostBytes%3A%2040000%2C%0D%0A%20%20maxGetBytes%3A%201000%2C%20//%20available%20in%20v3.4+%0D%0A%20%20postPath%3A%20%27/pixel%27%2C%20//%20Collector%20must%20be%20configured%0D%0A%20%20cookieLifetime%3A%2063072000%2C%0D%0A%20%20stateStorageStrategy%3A%20%27cookieAndLocalStorage%27%2C%0D%0A%20%20maxLocalStorageQueueSize%3A%201000%2C%0D%0A%20%20resetActivityTrackingOnPageView%3A%20true%2C%0D%0A%20%20connectionTimeout%3A%205000%2C%0D%0A%20%20anonymousTracking%3A%20false%2C%0D%0A%20%20withCredentials%3A%20true%2C%20//%20Available%20from%20v3.2.0+%0D%0A%20%20contexts%3A%20%7B%0D%0A%20%20%20%20webPage%3A%20true%2C%20//%20Default%0D%0A%20%20%20%20session%3A%20false%2C%20//%20Adds%20client%20session%20context%20entity%20to%20events%2C%20off%20by%20default.%20Available%20in%20v3.5+.%0D%0A%20%20%20%20performanceTiming%3A%20true%2C%0D%0A%20%20%20%20gaCookies%3A%20true%2C%0D%0A%20%20%20%20geolocation%3A%20false%2C%0D%0A%20%20%20%20clientHints%3A%20true%2C%0D%0A%20%20%20%20//%20clientHints%3A%20%7B%20includeHighEntropy%3A%20true%20%7D%2C%20//%20Optional%0D%0A%20%20%7D%2C%0D%0A%20%20retryStatusCodes%3A%20%5B%5D%2C%0D%0A%20%20dontRetryStatusCodes%3A%20%5B%5D%0D%0A%7D%29%3B%0D%0A%0D%0A%0D%0A%0D%0Awindow.snowplow%28%27trackPageView%27%29%3B%0D%0A%0D%0A%0D%0A%3C/script%3E`);})();w.zarazData.executed.push(\"Pageview\");})(window,document)"]})})(window,document);