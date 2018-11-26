var langconf = {"de":{"btn":"Akzeptieren","text":"Wir verwenden Cookies um sicherzustellen dass Sie das beste Erlebnis auf unserer Website haben."},"es":{"btn":"Aceptar","text":"Este sitio web utiliza cookies para ofrecer la mejor experiencia de usuario posible. Si utilizas el sitio web das tu consentimiento."},"fr":{"btn":"Accepter","text":"Nous utilisons des cookies afin d&#039;être sûr que vous pouvez avoir la meilleure expérience sur notre site. Si vous continuez à utiliser ce site, nous supposons que vous acceptez."},"it":{"btn":"Accetta","text":"Utilizziamo i cookie per essere sicuri che tu possa avere la migliore esperienza sul nostro sito. Se continui ad utilizzare questo sito assumiamo che tu ne sia felice."},"en":{"btn":"Accept","text":"We use cookies to ensure that you have the best experience on our website. If you continue to use this site we assume that you accept this."}}
var langdata = function(){
	var r = new Object();
	var s = document.documentElement.lang.substring(0,2);
	if(!(s in langconf)){
		s = 'en';
	}
	r = langconf[s];
	return r;
}();
var getdomain = function(){
	var r = '';
	var s = window.location.hostname;
	if(s.substring(0,4)=='www.'){
		r = s.substring(4);
	}
	else{
		r = s;
	}
	return r;
}
var getcookie = function(key){
	var s = document.cookie.match('(^|;)?'+key+'=([^;]*)(;|$)');
	return s?true:false;
}
var setcookie = function(key,val){
	var d = new Date;
	d.setTime(d.getTime()+24*60*60*1000*365);
	document.cookie = key+'='+val+';domain='+getdomain()+';path=/;expires='+d.toGMTString();
}
var acceptgpdr = function(key){
	setcookie(key,'ok');
	var e = document.getElementsByClassName('cookiebanner');
	e[0].parentNode.removeChild(e[0]);
	return false;
};
var cookieconsent = function(){
	var key = 'gpdrcookie';
	if(!getcookie(key)){
		var p = document.getElementsByTagName('body')[0];
  	p.insertAdjacentHTML('beforeend','<div style="position:fixed;background:#808080;padding:10px 0;bottom:0;width:100%;" class="cookiebanner"><span style="display:inline-block;text-align:center;color:#f8f8f8;">'+langdata['text']+'<span style="display:inline-block;padding:3px 7px;font-weight:normal;margin-left:10px;text-align:center;white-space:nowrap;vertical-align:middle;color:#666666;cursor:pointer;background:#f2f2f2;border:1px solid #d2d2d2;border-radius:3px;" onclick="acceptgpdr(\''+key+'\');">'+langdata['btn']+'</span></span></div>');
	}
}();
