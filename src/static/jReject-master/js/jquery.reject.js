
(function(b){b.reject=function(a){a=b.extend(true,{reject:{all:false,   // Apple Safari Google Chrome, // Mozilla Firefox
            msie6: true,
			msie7: true, // Microsoft Internet Explorer
            msie8: true,
            msie9: true},display:[],browserInfo:{firefox:{text:"Firefox",url:"http://www.firefox.com"},safari:{text:"Safari",url:"http://www.apple.com/ru/safari/download/"},opera:{text:"Opera",url:"http://www.opera.com/download/"},chrome:{text:"Chrome",url:"http://www.google.com/chrome/"},msie:{text:"Internet Explorer",url:"http://www.microsoft.com/rus/windows/internet-explorer/"},gcf:{text:"Google Chrome Frame",
url:"http://code.google.com/chrome/chromeframe/",allow:{all:false,msie:true}}},header:"Ваш браузер устарел и не может поддерживать многие функции. Рекомендуем обновиться!",paragraph1:"Используя старый браузер, Вы можете лишить себя некоторых возможностей этого сайта. Также его использование может быть небезопасно для Вашего компьютера. Список наиболее популярных браузеров представле ниже. <a href='http://www.whatbrowser.org/ru/' target='_blank'>Что такое браузер?</a> и <a href='http://www.updateyourbrowser.ru/' target='_blank'>Зачем его обновлять?</a>. ",paragraph2:"Просто щёлкните по любой иконке, чтобы перейти на страницу загрузки браузера.",close:false,closeMessage:"Закрывая это окно, Вы осознаёте, что Вы можете потерять некоторые возможности этого сайта, и что его использование небезопасно для Вашего компьютера.",closeESC:false,closeCookie:false,cookieSettings:{path:"/",expires:0},imagePath:"http://127.0.0.1:8000/media/main/images/",overlayBgColor:"#000",overlayOpacity:0.90,fadeInTime:"fast",fadeOutTime:"fast"},a);if(a.display.length<1)a.display=["firefox","chrome", "msie", "safari","opera"];b.isFunction(a.beforeReject)&&a.beforeReject(a);if(!a.close)a.closeESC=false;var d=function(c){return(c.all?true:false)||(c[b.os.name]?true:false)||(c[b.layout.name]?true:false)||(c[b.browser.name]?true:false)||(c[b.browser.className]?
true:false)};if(!d(a.reject)){b.isFunction(a.onFail)&&a.onFail(a);return false}if(a.close&&a.closeCookie){var f="jreject-close",h=function(c,g){if(typeof g!="undefined"){var e="";if(a.cookieSettings.expires!=0){e=new Date;e.setTime(e.getTime()+a.cookieSettings.expires);e="; expires="+e.toGMTString()}var k=a.cookieSettings.path||"/";document.cookie=c+"="+encodeURIComponent(g==null?"":g)+e+"; path="+k}else{k=null;if(document.cookie&&document.cookie!="")for(var o=document.cookie.split(";"),n=0;n<o.length;++n){e=
b.trim(o[n]);if(e.substring(0,c.length+1)==c+"="){k=decodeURIComponent(e.substring(c.length+1));break}}return k}};if(h(f)!=null)return false}var i='<div id="jr_overlay"></div><div id="jr_wrap"><div id="jr_inner"><h1 id="jr_header">'+a.header+"</h1>"+(a.paragraph1===""?"":"<p>"+a.paragraph1+"</p>")+(a.paragraph2===""?"":"<p>"+a.paragraph2+"</p>")+"<ul>",l=0;for(var s in a.display){var p=a.display[s],j=a.browserInfo[p]||false;if(!(!j||j.allow!=undefined&&!d(j.allow))){i+='<li id="jr_'+p+'"><div class="jr_icon"></div><div><a href="'+
(j.url||"#")+'">'+(j.text||"Unknown")+"</a></div></li>";++l}}i+='</ul><div id="jr_close">'+(a.close?'<a href="'+a.closeURL+'">'+a.closeLink+"</a><p>"+a.closeMessage+"</p>":"")+"</div></div></div>";var m=b("<div>"+i+"</div>");d=q();i=r();m.bind("closejr",function(){if(!a.close)return false;b.isFunction(a.beforeClose)&&a.beforeClose(a);b(this).unbind("closejr");b("#jr_overlay,#jr_wrap").fadeOut(a.fadeOutTime,function(){b(this).remove();b.isFunction(a.afterClose)&&a.afterClose(a)});b("embed, object, select, applet").show();
a.closeCookie&&h(f,"true");return true});m.find("#jr_overlay").css({width:d[0],height:d[1],position:"absolute",top:0,left:0,background:a.overlayBgColor,zIndex:200,opacity:a.overlayOpacity,padding:0,margin:0}).next("#jr_wrap").css({position:"absolute",width:"100%",top:i[1]+d[3]/4,left:i[0],zIndex:300,textAlign:"center",padding:0,margin:0}).children("#jr_inner").css({background:"#FFF",border:"1px solid #CCC",fontFamily:'"Lucida Grande","Lucida Sans Unicode",Arial,Verdana,sans-serif',color:"#4F4F4F",
margin:"0 auto",position:"relative",height:"auto",minWidth:l*100,maxWidth:l*140,width:b.layout.name=="trident"?l*155:"auto",padding:20,fontSize:12}).children("#jr_header").css({display:"block",fontSize:"1.3em",marginBottom:"0.5em",color:"#333",fontFamily:"Helvetica,Arial,sans-serif",fontWeight:"bold",textAlign:"left",padding:5,margin:0}).nextAll("p").css({textAlign:"left",padding:5,margin:0}).siblings("ul").css({listStyleImage:"none",listStylePosition:"outside",listStyleType:"none",margin:0,padding:0}).children("li").css({background:'transparent url("https://pp.vk.me/c630223/v630223861/2cf4a/L6DyywWgiJM.jpg") no-repeat scroll left top',cusor:"pointer","float":"left",width:120,height:122,margin:"0 10px 10px 10px",padding:0,textAlign:"center"}).children(".jr_icon").css({width:100,height:100,margin:"1px auto",padding:0,background:"transparent no-repeat scroll left top",cursor:"pointer"}).each(function(){var c=b(this);c.css("background","transparent url("+a.imagePath+"browser_"+c.parent("li").attr("id").replace(/jr_/,"")+".gif) no-repeat scroll left top");c.click(function(){window.open(b(this).next("div").children("a").attr("href"),
"jr_"+Math.round(Math.random()*11));return false})}).siblings("div").css({color:"#808080",fontSize:"0.80em",height:18,lineHeight:"17px",margin:"1px auto",padding:0,width:118,textAlign:"center"}).children("a").css({color:"#333",textDecoration:"none",padding:0,margin:0}).hover(function(){b(this).css("textDecoration","underline")},function(){b(this).css("textDecoration","none")}).click(function(){window.open(b(this).attr("href"),"jr_"+Math.round(Math.random()*11));return false}).parents("#jr_inner").children("#jr_close").css({margin:"0 0 0 50px",
clear:"both",textAlign:"left",padding:0,margin:0}).children("a").css({color:"#000",display:"block",width:"auto",margin:0,padding:0,textDecoration:"underline"}).click(function(){b(this).trigger("closejr");if(a.closeURL==="#")return false}).nextAll("p").css({padding:"10px 0 0 0",margin:0});b("#jr_overlay").focus();b("embed, object, select, applet").hide();b("body").append(m.hide().fadeIn(a.fadeInTime));b(window).bind("resize scroll",function(){var c=q();b("#jr_overlay").css({width:c[0],height:c[1]});
var g=r();b("#jr_wrap").css({top:g[1]+c[3]/4,left:g[0]})});a.closeESC&&b(document).bind("keydown",function(c){c.keyCode==27&&m.trigger("closejr")});b.isFunction(a.afterReject)&&a.afterReject(a);return true};var q=function(){var a=window.innerWidth&&window.scrollMaxX?window.innerWidth+window.scrollMaxX:document.body.scrollWidth>document.body.offsetWidth?document.body.scrollWidth:document.body.offsetWidth,d=window.innerHeight&&window.scrollMaxY?window.innerHeight+window.scrollMaxY:document.body.scrollHeight>
document.body.offsetHeight?document.body.scrollHeight:document.body.offsetHeight,f=window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth,h=window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight;return[a<f?a:f,d<h?h:d,f,h]},r=function(){return[window.pageXOffset?window.pageXOffset:
document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollLeft:document.body.scrollLeft,window.pageYOffset?window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop]}})(jQuery);

/*
    * jQuery Browser Plugin
    * Version 2.3
    * 2008-09-17 19:27:05
    * URL: http://jquery.thewikies.com/browser
    * Description: jQuery Browser Plugin extends browser detection capabilities and can assign browser selectors to CSS classes.
    * Author: Nate Cavanaugh, Minhchau Dang, & Jonathan Neal
    * Copyright: Copyright (c) 2008 Jonathan Neal under dual MIT/GPL license.
*/
(function($){$.browserTest=function(a,z){var u='unknown',x='X',m=function(r,h){for(var i=0;i<h.length;i=i+1){r=r.replace(h[i][0],h[i][1]);}return r;},c=function(i,a,b,c){var r={name:m((a.exec(i)||[u,u])[1],b)};r[r.name]=true;r.version=(c.exec(i)||[x,x,x,x])[3];if(r.name.match(/safari/)&&r.version>400){r.version='2.0';}if(r.name==='presto'){r.version=($.browser.version>9.27)?'futhark':'linear_b';}r.versionNumber=parseFloat(r.version,10)||0;r.versionX=(r.version!==x)?(r.version+'').substr(0,1):x;r.className=r.name+r.versionX;return r;};a=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape']]):a).toLowerCase();$.browser=$.extend((!z)?$.browser:{},c(a,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));$.layout=c(a,/(gecko|konqueror|msie|opera|webkit)/,[['konqueror','khtml'],['msie','trident'],['opera','presto']],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);$.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[u])[0].replace('sunos','solaris')};if(!z){$('html').addClass([$.os.name,$.browser.name,$.browser.className,$.layout.name,$.layout.className].join(' '));}};$.browserTest(navigator.userAgent);})(jQuery);