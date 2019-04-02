/* aa.js */
//var domain =  "<script src=\"/js/index/domain.js\"></script>";
//椤堕儴妯箙灞曠ず
var indextop =  "";
	indextop=indextop+"<li><a href=\'https://www.seyuniu.com\' target=\'_blank\'><img src=\'https://hc.7788521.xyz/1.jpg\'></a></li>"; 
	indextop=indextop+"<li><a href=\'http://www.379941.com/?p=24961986\' target=\'_blank\'><img src=\'http://fans.91p20.space/fans/6612491.gif\'></a></li>"; 
	
//鏍忕洰鍒楄〃灞曠ず
var list =  "";
	list=list+"<li><a href=\'/js/app.htm?url=https://www.168hgvip.com/main.html\' target=\'_blank\'><img src=\'https://ading.222im.com/imgg/201903/hg960608.gif\'></a></li>";
	list=list+"<li><a href=\'/js/app.htm?url=https://www.168hgvip.com/main.html\' target=\'_blank\'><img src=\'https://ading.222im.com/imgg/201903/hg960608.gif\'></a></li>";
//鎾斁椤甸潰灞曠ず
var play =  "";
	play=play+"<li><a href=\'/js/app.htm?url=https://www.100yyhh.com\' target=\'_blank\'><img src=\'https://ading.222im.com/imgg/201903/yh960608.gif\'></a></li>";
	play=play+"<li><a href=\'/js/app.htm?url=https://www.100yyhh.com\' target=\'_blank\'><img src=\'https://ading.222im.com/imgg/201903/yh960608.gif\'></a></li>";
//涓嬭浇椤甸潰灞曠ず
//var down =  "<script src=\"/js/index/down.js\"></script>";
//缃戠珯搴曢儴灞曠ず
var foot =  "";
	foot=foot+"<li><a href=\'https://www.8811apk.com\' target=\'_blank\'><img border=\"0\" src=\'https://pppp.642p.com/app/qw960.gif\'></a></li>";
//灏忚鍥剧墖灞曠ず
var news =  "";
	news=news+"<li><a href=\'https://www.8811apk.com\' target=\'_blank\'><img border=\"0\" src=\'https://pppp.642p.com/app/qw960.gif\'></a></li>";
	news=news+"<li><a href=\'https://www.8811apk.com\' target=\'_blank\'><img border=\"0\" src=\'https://pppp.642p.com/app/qw960.gif\'></a></li>";

var h4hu = {
	'getCookies': function(name){
		var cookie_start = document.cookie.indexOf(name);
		var cookie_end = document.cookie.indexOf(";", cookie_start);
		return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
	},
	'setCookies': function(name, value, hours){
		var expire = "";
		if (hours != null) {
			expire = new Date((new Date()).getTime() + hours * 3600000);
			//expire = new Date((new Date()).getTime() + hours * 30);
			expire = "; expires=" + expire.toGMTString();
		}
		//document.cookie = name + "=" + encodeURIComponent(value) + "; domain=" + hostnamess + ";path=/" + expire;
		document.cookie = name + "=" + encodeURIComponent(value) + "; domain=" + document.domain + ";path=/" + expire;
		console.log(document.domain);
	},

	'closeFloat': function(){
	    leftCouple.style.visibility = 'hidden';
		rightCouple.style.visibility = 'hidden';
		//setcookiess("csfloat", "1", 24);
		h4hu.setCookies("csfloat", "1", 24);
	},
	'scrollx': function (p) {
		var d = document,
			dd = d.documentElement,
			db = d.body,
			w = window,
			o = d.getElementById(p.id),
			ie6 = /msie 6/i.test(navigator.userAgent),
			style, timer;

		if (o) {
			o.style.cssText += ";z-index:999;position:" + (p.ofloat && !ie6 ? 'fixed' : 'absolute') + ";" + (p.oleft == undefined ? '' : 'left:' + p.oleft + 'px;') + (p.otop == undefined ? '' : 'top:' + p.otop + 'px') + (p.oright == undefined ? '' : 'right:' + p.oright + 'px;') + (p.obottom == undefined ? '' : 'bottom:' + p.obottom + 'px');
			if (p.ofloat && ie6) {
				if (p.otop != undefined) {
					o.style.cssText += ';top:expression(documentElement.scrollTop + ' + p.otop + ' + "px" );';
				}
				if (p.oleft != undefined) {
					o.style.cssText += ';left:expression(documentElement.scrollLeft + ' + p.oleft + ' + "px");';
				}
				if (p.obottom != undefined) {
					o.style.cssText += ';top:expression(documentElement.clientHeight - ' + o.offsetHeight + ' + documentElement.scrollTop - ' + p.obottom + ' + "px" );';
				}
				if (p.oright != undefined) {
					o.style.cssText += ';left:expression(documentElement.clientWidth - ' + o.offsetWidth + ' + documentElement.scrollLeft - ' + p.oright + ' + "px" );';
				}
				dd.style.cssText += ';background-image: url(about:blank);background-attachment:fixed;';
			} else {
				if (!p.ofloat) {
					w.onresize = w.onscroll = function() {
						clearInterval(timer);
						timer = setInterval(function() {
							var st = (dd.scrollTop || db.scrollTop),
								c;
							c = st - o.offsetTop + (p.otop != undefined ? p.otop : (w.innerHeight || dd.clientHeight) - o.offsetHeight);
							if (c != 0) {
								o.style.top = o.offsetTop + Math.ceil(Math.abs(c) / 10) * (c < 0 ? -1 : 1) + 'px';
							} else {
								clearInterval(timer);
							}
						}, 10)
					}
				}
			}
		}
	},
	'errimg': function(obj, image){
		obj.src = image;
		obj.onerror = null;
	},
	'sbc2dbc': function(str){
		var ret = [], i = 0, len = str.length, code, chr; 
		for (; i < len; ++i) { 
			code = str.charCodeAt(i); 
			chr = hash[code]; 
			if (!chr && code > 31 && code < 127) { 
				chr = hash[code] = String.fromCharCode(code + 65248); 
			} 
			ret[i] = chr ? chr : str.charAt(i); 
		} 
		return ret.join('');
	},
	'init': function( ){
		
/*		ad1 = {
			'domain': "<script src=\"/js/index/domain.js\"></script>",
			'indextop' : "<script src=\"/js/index/index.js\"></script>",
			'list' : "<script src=\"/js/index/list.js\"></script>",
			'play' : "<script src=\"/js/index/play.js\"></script>",
			'footer' : "<script src=\"/js/index/footer.js\"></script>",
		};
		$.each(ad1,function (key,val){
			window[key] = val;
			$(key).html(val);
		})
*/	
		if (!navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/iphone|mac/i)) {
			pfwidth = "150";
			pfheight = "350";
		} else {
			pfwidth = "60";
			pfheight = "140";
		}

	adLeftCoupleTxt='<a href="/js/app.htm?url=https://h5.sd5632.com" target="_blank"><img src="https://img.ny5159.com/tom/gy2/gy2yinhe-150x350-2.gif" width="'+pfwidth+'" height="'+pfheight+'"></a>';
	adRightCoupleTxt='<a href="/js/app.htm?url=https://wzqp01.com" target="_blank"><img src="https://img.ny5159.com/dongfang/wzqp-150-350.gif" width="'+pfwidth+'" height="'+pfheight+'"></a>';


		var csfloat = h4hu.getCookies("csfloat");
		console.log(csfloat);
		if (typeof(csfloat) == "undefined" || csfloat == "") {
			if (adLeftCoupleTxt != "") {
				adLeftCoupleTop = "100";
				if (!navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/iphone|mac/i)) {
					adLeftCoupleLeft = "20";
				}
				adLeftCouple += '<div id="leftCouple" style="position:absolute;top:' + adLeftCoupleTop + 'px;left:' + adLeftCoupleLeft + 'px;">' + adLeftCoupleTxt + '<div style="position:absolute;top:0px;right:0px;margin:1px;width:20px;height:20px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:h4hu.closeFloat();" style="color:white;font-size:20px;text-decoration:none;">脳</a></div></div>';
				//document.writeln(adLeftCouple);
				$('body').append(adLeftCouple);
				h4hu.scrollx({
					id: 'leftCouple',
					otop: adLeftCoupleTop,
					oleft: adLeftCoupleLeft,
					ofloat: 1
				})
			}
		
			if (adRightCoupleTxt != "") {

				adRightCoupleTop = "100";
				if (!navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/iphone|mac/i)) {
					adRightCoupleRight = "20";
				}
				//adRightCouple += '<div id="rightCouple" style="position:absolute;top:' + adRightCoupleTop + 'px;right:' + adRightCoupleRight + 'px;">' + adRightCoupleTxt + '<div style="position:absolute;top:0px;right:0px;margin:1px;width:20px;height:20px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:closeFloat();" style="color:white;font-size:20px;text-decoration:none;">脳</a></div></div>';
				adRightCouple += '<div id="rightCouple" style="position:absolute;top:' + adRightCoupleTop + 'px;right:' + adRightCoupleRight + 'px;">' + adRightCoupleTxt + '<div style="position:absolute;top:0px;right:0px;margin:1px;width:20px;height:20px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:h4hu.closeFloat();" style="color:white;font-size:20px;text-decoration:none;">脳</a></div></div>';

				//document.writeln(adRightCouple);
				$('body').append(adRightCouple);
				h4hu.scrollx({
					id: 'rightCouple',
					otop: adRightCoupleTop,
					oright: adRightCoupleRight,
					ofloat: 1
				})
			}
			if (adLeftFloatTxt != "") {
				adLeftFloat += '<div id="leftFloat" style="position:absolute;bottom:' + adLeftFloatBottom + 'px;left:' + adLeftFloatLeft + 'px;">' + adLeftFloatTxt + '</div>';
				//document.writeln(adLeftFloat);
				$('body').append(adLeftFloat);
				h4hu.scrollx({
					id: 'leftFloat',
					oleft: adLeftFloatLeft,
					obottom: adLeftFloatBottom,
					ofloat: 1
				})
			}
			if (adRightFloatTxt != "") {
				adRightFloat += '<div id="rightFloat" style="position:absolute;bottom:' + adRightFloatBottom + 'px;right:' + adRightFloatRight + 'px;">' + adRightFloatTxt + '</div>';
				//document.writeln(adRightFloat);
				$('body').append(adRightFloat);
				h4hu.scrollx({
					id: 'rightFloat',
					oright: adRightFloatRight,
					obottom: adRightFloatBottom,
					ofloat: 1
				})
			}
		}
		
		//sihu = sihu + '<div class="vticker"><li><b>[鍥涜檸鍏憡] : </b> 鍥涜檸 [4hu.com.super222] 杩庢潵閲嶅ぇ鏇存柊锛屽皢缁欐偍甯︽潵鏈€鏂版渶濂界殑浣撻獙锛佹劅璋㈡偍鐨勬敮鎸侊紒</li></div>';
		//txtgg = txtgg + '<a href="/help/vod.html"><font color="#FF0000">璇ヨ棰戜镜鏉冨垹闄わ紝鎾斁鎶ラ敊鐐瑰嚮杩欓噷锛�</font></a>';
		//txtcommend = txtcommend + '<strong><a href="/help/gg.html"><font color="#FF0000">鏈珯鏈€鏂板叕鍛婏紒鐢ㄦ埛蹇呯湅</font></a></strong>';
		//vodhelp = vodhelp + '<a href="/help/m-play.html" target="_blank"><span style="color:#ff0000;line-height:1.5;font-size:16px;">銆愭墜鏈烘挱鏀炬暀绋嬨€�</span></a><a href="/help/pc-play.html" target="_blank"><span style="color:#ff0000;line-height:1.5;font-size:16px;">銆愮數鑴戞挱鏀炬暀绋嬨€�</span></a> </span>';
		//vodhelp1 = vodhelp1 + '<span style="color:#0086cf;line-height:1.5;font-size:16px;">銆愭彁绀猴細鍦ㄧ嚎鎾斁涓烘爣娓呯増锛岃嫢瀵圭敾璐ㄦ湁瑕佹眰鐨勬湅鍙嬶紝璇烽€夋嫨涓嬭浇楂樻竻鐗堝埌鏈湴鎾斁銆�</span>';
		//palyhelp = palyhelp + '<span class="playerTip"><a href="/help/index.htm" target="_blank" class="white">鎻愮ず锛氳嫢閬囨棤娉曟挱鏀撅紝瑙嗛鍔犺浇澶辫触闂锛佽鐐瑰嚮鏌ョ湅甯姪鏁欑▼锛�</a></span>';
		
		ad2 = {
			'#sihu': '<div class=\"vticker\"><li><b>[鍥涜檸鍏憡] : </b>  [4hu.tv] 鏈珯姘镐箙鍏嶈垂,璇锋敹钘忔湰绔欏煙鍚嶅埌娴忚鍣ㄦ敹钘忓す,鎺ㄨ崘鐢ㄦ埛浣跨敤璋锋瓕娴忚鍣ㄨ繘琛岃鐪�,鑻ユ挱鏀惧け璐ヨ灏濊瘯鍒锋柊缃戦〉锛侊紒</li></div>',
			'#txtgg' : '<a href=\"/help/vod.html\"><font color=\"#FF0000\">鏂囧瓧鍐呭锛�</font></a>',
			'#mail' : '<strong><a href="mailto:4hu@mail.com"><font color=\"#FF0000\">4hu@mail.com 鍙戦€佷换鎰忓唴瀹硅幏鍙栨渶鏂板湴鍧€!</font></a></strong>',
			'#txtcommend' : '<strong><a href=\"/help/gg.html\"><font color=\"#FF0000\">鏈珯鏈€鏂板叕鍛婏紒鐢ㄦ埛蹇呯湅</font></a></strong>',
			'#vodhelp' : '<a href=\"/help/m-play.html\" target=\"_blank\"><span style=\"color:#ff0000;line-height:1.5;font-size:16px;\">銆愭墜鏈烘挱鏀炬暀绋嬨€�</span></a><a href=\"/help/pc-play.html\" target=\"_blank\"><span style=\"color:#ff0000;line-height:1.5;font-size:16px;\">銆愮數鑴戞挱鏀炬暀绋嬨€�</span></a> </span>',
			'#vodhelp1' : '<span style=\"color:#0086cf;line-height:1.5;font-size:16px;\">銆愭彁绀猴細鍦ㄧ嚎鎾斁涓烘爣娓呯増锛岃嫢瀵圭敾璐ㄦ湁瑕佹眰鐨勬湅鍙嬶紝璇烽€夋嫨涓嬭浇楂樻竻鐗堝埌鏈湴鎾斁銆�</span>',
			'#palyhelp' : '<span class=\"playerTip\"><a href=\"/help/index.htm\" target=\"_blank\" class=\"white\">鎻愮ず锛氳嫢閬囨棤娉曟挱鏀撅紝瑙嗛鍔犺浇澶辫触闂锛佽鐐瑰嚮鏌ョ湅甯姪鏁欑▼锛�</a></span>',
		};
		$.each(ad2,function (key,val){
			$(key).html(val);
		})
		
		if (navigator.userAgent.match(/Android/i)) {
			txtcommend = txtcommend + '<font color="#FF0000"><strong>.</strong></font>';
		}
		if (navigator.userAgent.match(/Android/i)) {}
		
		var hostname;
		var hostname2;
		var hostnametxt;
		var hostnamelogo;
		var lf = window.location.host.toLowerCase().split(".");
		hostname2 = h4hu.sbc2dbc(window.location.host.toUpperCase());		
		if (lf.length > 1) {
			hostname = lf[lf.length - 2] + "." + lf[lf.length - 1]
			hostnametxt = lf[lf.length - 2];
			hostnamelogo = hostnametxt + "<span style='font-size:24px;color:#881313'>." + lf[lf.length - 1] + "</font>";
			document.title = document.title + hostname2;
			if (document.getElementById("WebUrl")) {
				document.getElementById("WebUrl").innerHTML = hostname2;
			}
		}
		window.status = hostname2;
		
	},
	
	'StayPosition': function(speed){
	//function StayPosition(speed) {
		this.objs = [];
		this.speed = speed || 0.1;
		this.timer = this.round = this.obj = this.end = null;
		if (StayPosition.initialize !== true) {
			function correct(func, obj) {
				return function() {
					func.call(obj);
				}
			}
			StayPosition.prototype.start = function() {
				this.timer = setInterval(correct(this.run, this), 33);
			}
			StayPosition.prototype.stop = function() {
				clearInterval(this.timer);
			}
			StayPosition.prototype.capitalize = function(prop) {
				return prop.replace(/^[a-z]/, function(a) {
					return a.toUpperCase();
				})
			}
			StayPosition.prototype.add = function(dom, prop) {
				var offset = prop ? "offset" + this.capitalize(prop) : "offsetTop";
				var scroll = prop ? "scroll" + this.capitalize(prop) : "scrollTop";
				prop = prop ? prop : this.offset.slice(6).toLowerCase();
				this.objs.push({
					"dom": dom,
					"prop": {
						"size": dom[offset],
						"name": prop,
						"offset": offset,
						"scroll": scroll
					}
				});
			}
			StayPosition.prototype.run = function() {
				for (var i = 0, l = this.objs.length; i < l; i++) {
					this.obj = this.objs[i];
					this.end = (document.documentElement[this.obj.prop.scroll] || document.body[this.obj.prop.scroll]) + this.obj.prop.size;
					if (this.end != this.obj.dom[this.obj.prop.offset]) {
						this.round = this.end - this.obj.dom[this.obj.prop.offset] > 0 ? Math.ceil : Math.floor;
						this.obj.dom.style[this.obj.prop.name] = this.obj.dom[this.obj.prop.offset] + this.round((this.end - this.obj.dom[this.obj.prop.offset]) * this.speed) + "px";
					}
				}
			}
		}
		StayPosition.initialize = true;
	},
		
};	/* aa.js */


var zanpian = {
	//娴忚鍣ㄤ俊鎭�
	'browser':{
		'url': document.URL,
		'domain': document.domain,
		'title': document.title,
		'language': (navigator.browserLanguage || navigator.language).toLowerCase(),//zh-tw|zh-hk|zh-cn
		'canvas' : function(){
			return !!document.createElement('canvas').getContext;
		}(),
		'useragent' : function(){
			var ua = navigator.userAgent;//navigator.appVersion
			return {
				'mobile': !!ua.match(/AppleWebKit.*Mobile.*/), //鏄惁涓虹Щ鍔ㄧ粓绔� 
				'ios': !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios缁堢
				'android': ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, //android缁堢鎴栬€卽c娴忚鍣� 
				'iPhone': ua.indexOf('iPhone') > -1 || ua.indexOf('Mac') > -1, //鏄惁涓篿Phone鎴栬€匭QHD娴忚鍣� 
				'iPad': ua.indexOf('iPad') > -1, //鏄惁iPad
				'trident': ua.indexOf('Trident') > -1, //IE鍐呮牳
				'presto': ua.indexOf('Presto') > -1, //opera鍐呮牳
				'webKit': ua.indexOf('AppleWebKit') > -1, //鑻规灉銆佽胺姝屽唴鏍�
				'gecko': ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //鐏嫄鍐呮牳 
				'weixin': ua.indexOf('MicroMessenger') > -1 //鏄惁寰俊 ua.match(/MicroMessenger/i) == "micromessenger",			
			};
		}()
	},
	//绯荤粺鍏叡
	'cms': {
		//鎻愮ず绐楀彛
		'floatdiv': function() {
			$("<link>").attr({
				rel: "stylesheet",
				type: "text/css",
				href: "/css/showfloatdiv/css/showfloatdiv.css"
			}).appendTo("head");
			$.getScript("/css/showfloatdiv/js/showfloatdiv.js", function() {});
		},
		//閫夐」鍗″垏鎹�
		'tab': function() {
			$("#myTab li a").click(function(e) {
				$(this).tab('show');
				//$($(this).attr('href')).find('a').lazyload({effect: "fadeIn"});
			});
		},
		//鍐呭璇︽儏鎶樺彔
		'collapse': function() {
			var w = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
			if (w > 640) {
				$(".list_type").addClass("in");
			}

		},
		'scrolltop': function() {
				var a = $(window);
				$scrollTopLink = $("a.backtop");
				a.scroll(function() {
					500 < $(this).scrollTop() ? $scrollTopLink.css("display", "block") : $scrollTopLink.css("display", "none")
				});
				$scrollTopLink.on("click", function() {
					$("html, body").animate({
						scrollTop: 0
					}, 400);
					return !1
				})
		},
		//AJAX妯℃€佸脊绐楀姞杞�
		'modal': function(url){
			$('.zanpian-modal').modal('hide');
			$(".modal-dialog .close").trigger('click');//鍏堝叧闂獥鍙�
			$('.zanpian-modal').remove();
			$('.modal-backdrop').remove();
			$.ajax({
				type: 'get',
				cache: false,
				url: url,
				timeout: 3000,
				success: function($html) {
					$('body').append($html);
					$('.zanpian-modal').modal('show');
					$("body").css("padding","0px");
				}
			})
		},
		//鍏叡
		'all': function(url){
			$('body').on("click", "#login,#user_login,#navbar_user_login", function(event){
				$('.zanpian-modal').modal('hide');																	
				if(!zanpian.user.islogin()){
				   event.preventDefault();
				   zanpian.user.loginform();
				   return false;
				}
			});
			$('.navbar-search').click(function(){
				$('.user-search').toggle();
				$('#nav-signed,#example-navbar-collapse').hide();														  
			})
			$('.navbar-navmore').click(function(){
				$('.user-search').toggle();
				$('#nav-signed,.user-search').hide();														  
			})
			//鐐瑰嚮寮瑰嚭娉ㄥ唽绐楀彛
			$('body').on("click", "#register", function() {
				zanpian.cms.modal(cms.root + 'index.php?s=user-reg-ajax');
				zanpian.user.reg();
			});
			//鏄剧ず鏇村
			$('body').on("click", ".more-click", function() {
				var self = $(this);
				var box = $(this).attr('data-box');
				var allNum = $(this).attr('data-count');
				var buNum = allNum - $(this).attr('data-limit');
				var sta = $(this).attr('data-sta');
				var hideItem = $('.' + box).find('li[rel="h"]');
				if (sta == undefined || sta == 0) {
					hideItem.show(200);
					$(this).find('span').text('鏀惰捣閮ㄥ垎' + buNum);
					self.attr('data-sta', 1);
				} else {
					hideItem.hide(200);
					$(this).find('span').text('鏌ョ湅鍏ㄩ儴' + allNum);
					self.attr('data-sta', 0);
				}

			});
			//閿洏涓婁竴椤典笅涓€椤�
			var prevpage = $("#pre").attr("href");
			var nextpage = $("#next").attr("href");
			$("body").keydown(function(event) {
				if (event.keyCode == 37 && prevpage != undefined) location = prevpage;
				if (event.keyCode == 39 && nextpage != undefined) location = nextpage;
			});
			//鎾斁绐楀彛闅愯棌鍙充晶鏉垮潡
			$('body').on("click", "#player-shrink", function() {
				$(".player_right").toggle();
				$(".player_left").toggleClass("max");
				$(".player-shrink").toggleClass("icon-left");
			});
			if ($('.player_playlist').length > 0){
			   zanpian.player.playerlist() ;   	
			}
			$(window).resize(function() {
			   zanpian.player.playerlist() ; 					  
			});
			$(".player-tool em").click(function() {
				$html = $(this).html();
				try {
					if ($html == '鍏崇伅') {
						$(this).html('寮€鐏�')
					} else {
						$(this).html('鍏崇伅')
					}
				} catch (e) {}
				$(".player-open").toggle(300);
				$(".player_left").toggleClass("player-top")
				$(".player_right").toggleClass("player-top")
			});
		}
	},
	'list': {
		//鍒楄〃AJAX鍝嶅簲
		'ajax': function() {
			$('body').on("click", ".list_type ul li a", function(e) {
				if (type_parms != undefined && type_parms != null) {
					var curdata = $(this).attr('data').split('-');
					if (curdata[0] == 'id' || curdata[0] == 'sid') {
						type_parms = {
							"id": curdata[1],
							"mcid": "0",
							"area": "0",
							"year": "0",
							"letter": "0",
							"sid": "0",
							"wd": "0",
							"sex": "0",
							"zy": "0",
							"order": "0",
							"picm": 1,
							"p": 1
						};
						deltype();
					}
					type_parms[curdata[0]] = curdata[1];
					type_parms['p'] = 1;
					url = parseurl(type_parms);
					$(this).parent().siblings().children("a").removeClass('active');
					$(this).addClass('active');
					zanpian.list.url(url);
					deltitle()
				}
				return false;
			});
			$('body').on("click", ".ajax-page ul li a,.tv_detail_week a", function(e) {
				e.preventDefault();
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				var curdata = $(this).attr('data').split('-');
				type_parms[curdata[0]] = curdata[1];
				var url = parseurl(type_parms);
				zanpian.list.url(url);
			});
			$('body').on("click", ".ajax-nav-tabs li a", function(e) {
				e.preventDefault();
				var curdata = $(this).attr('data').split('-');
				type_parms[curdata[0]] = curdata[1];
				type_parms['p'] = 1;
				var url = parseurl(type_parms);
				$(this).parent().siblings().removeClass('active');
				$(this).parent().addClass('active');
				zanpian.list.url(url);
			});
			$('body').on("click", ".seach-nav-tabs li a", function(e) {
				e.preventDefault();
				var curdata = $(this).attr('data').split('-');
				type_parms[curdata[0]] = curdata[1];
				type_parms['p'] = 1;
				var url = parseurl(type_parms);
				$('.seach-nav-tabs li a').each(function(e) {
					$(this).removeClass('active');
				});
				$(this).addClass('active');
				zanpian.list.url(url);
			});		
			$('body').on("click", "#conreset a", function(e) {
				var curdata = $(this).attr('data').split('-');
				type_parms = {
					"id": curdata[1],
					"mcid": "0",
					"area": "0",
					"year": "0",
					"letter": "0",
					"sid": "0",
					"wd": "0",
					"sex": "0",
					"zy": "0",
					"order": "0",
					"picm": 1,
					"p": 1
				};
				url = parseurl(type_parms);
				zanpian.list.url(url);
				deltype();
				deltitle();
			});
			function deltitle() {
				var constr = '';
				$('.list_type ul li a').each(function(e) {
					if ($(this).attr('class') == 'active') {
						if ($(this).html() == '鍏ㄩ儴') constr += ' ';
						else constr += '<span>' + $(this).html() + '</span>';
					}
				});
				if (constr != '') $('.conbread').html(constr);
			}
			function deltype() {
				$('.list_type ul li a').each(function(e) {
					$(this).removeClass('active');
					if ($(this).html() == '鍏ㄩ儴') {
						$(this).attr('class', 'active');
					}
				});
				return false;
			}
			function emptyconbread() {
				$('.list_type ul li a').each(function(e) {
					$(this).removeClass('active');
					if ($(this).html() == '鍏ㄩ儴') {
						$(this).attr('class', 'active');
					}
				});
				return false;
			}
			function parseurl(rr) {
				var url = cms.root + type_ajax_url;
				for (var c in rr) {
					if (rr[c] != '0') {
						url = url + "-" + c + "-" + rr[c];
					}
				}
				return url;
			}
		},
		'url': function(url) {
			   if (($('#content li').length > 3)) $("html,body").animate({
					scrollTop: $("#content").offset().top - 93
				}, 500);
				$("#content").html('<div class="loading">鍔姏鍔犺浇涓€︹€�</div>');
				$.get(url,function(data, status) {
					var value = jQuery('#content', data).html();
					if (value == null || value == '') {
						value = '<div class="kong">鎶辨瓑锛屾病鏈夋壘鍒扮浉鍏冲唴瀹癸紒</div>';
					}
					$("#content").html(value);
					$("#short-page").html(jQuery('#short-page', data).html())
					$("#long-page").html(jQuery('#long-page', data).html())
					$("#total-page").html(jQuery('#total-page', data).html())
					$("#current-page").html(jQuery('#current-page', data).html())
					$("#count").html(jQuery('#count', data).html())
					$(".loading").lazyload({
						effect: 'fadeIn'
					});
					if(zanpian.browser.language=='zh-hk' || zanpian.browser.language=='zh-tw'){
					$(document.body).s2t();
					}
				});		
			
		},	
	},
	'detail': {
		'collapse': function() { //鍐呭璇︽儏鎶樺彔
			$('body').on("click", "[data-toggle=collapse]", function() {
				$this = $(this);
				$($this.attr('data-target')).toggle();
				$($this.attr('data-default')).toggle();
				if ($this.attr('data-html')) {
					$data_html = $this.html();
					$this.html($this.attr('data-html'));
					$this.attr('data-html', $data_html);
				}
				if ($this.attr('data-val')) {
					$data_val = $this.val();
					$this.val($this.attr('data-val'));
					$this.attr('data-val', $data_val);
				}
			});
		},
		//鎾斁鍒楄〃鎶樺彔
		'playlist': function() {
			//鏇村鎾斁鍦板潃鍒囨崲
			$(".player-more .dropdown-menu li").click(function() {
				$("#playTab").find('li').removeClass('active');
				var activeTab = $(this).html();
				var prevTab = $('.player-more').prev('li').html();
				$('.player-more').prev('li').addClass('active').html(activeTab);
				//var prevTab = $('#playTab li:nth-child(2)').html(); 
				//$('#playTab li:nth-child(2)').addClass('active').html(activeTab);		   
				$(this).html(prevTab);
			});
			if ($('.player-more').length > 0) {
				$(".dropdown-menu li.active").each(function() {
					var activeTab = $(this).html();
					var prevTab = $('.player-more').prev('li').html();
					$('.player-more').prev('li').addClass('active').html(activeTab);
					$(this).html(prevTab).removeClass('active');
				});
			}
			//鎵嬫満绔挱鏀炬簮鍒囨崲
			$(".mplayer .dropdown-menu li").click(function() {
				var sclass = $(this).find('a').attr('class');
				var stext = $(this).text();
				$("#myTabDrop2 .name").text(stext);
				$("#myTabDrop2").removeClass($("#myTabDrop2").attr('class'));
				$("#myTabDrop2").addClass(sclass);
			});		
			var WidthScreen = true;
			for (var i = 0; i < $(".playlist ul").length; i++) {
				series($(".playlist ul").eq(i), 20, 1);
			}
			function series(div, n1, n2) { //鏇村鍓ч泦鏂规硶
				var len = div.find("li").length;
				var n = WidthScreen ? n1 : n2;
				if (len > 24) {
					for (var i = n2 + 18; i < len - ((n1 / 2) - 2) / 2; i++) {
						div.find("li").eq(i).addClass("hided");
					}
					var t_m = "<li class='more open'><a target='_self' href='javascript:void(0)'>鏇村鍓ч泦</a></li>";
					div.find("li").eq(n2 + 17).after(t_m);
					var more = div.find(".more");
					var _open = false;
					div.css("height", "auto");
					more.click(function() {
						if (_open) {
							div.find(".hided").hide();
							$(this).html("<a target='_self' href='javascript:void(0)'>鏇村鍓ч泦</a>");
							$(this).removeClass("closed");
							$(this).addClass("open");
							$(this).insertAfter(div.find("li").eq(n2 + 17));
							_open = false;
						} else {
							div.find(".hided").show();
							$(this).html("<a target='_self' href='javascript:void(0)'>鏀惰捣鍓ч泦</a>");
							$(this).removeClass("open");
							$(this).addClass("closed");
							$(this).insertAfter(div.find("li:last"));
							_open = true;
						}
					})
				}
			}
		},
		//涓嬭浇鍦板潃澶勭悊
		'download': function() {
			$.ajaxSetup({
				cache: true
			});
			if ($("#downlist").length) {
				$.getScript("/css/js/down.js");
			}
		},
	},
	'player': {
		//鎾斁椤甸潰鎾斁鍒楄〃
		'playerlist': function() {
				var height = $(".player_left").height();
				if ($('.player_prompt').length > 0){
						var height = height-50;	
				}
				$(".player_playlist").height(height - 55);
				var mheight = $(".mobile_player_left").height();
				if ($(".player_playlist").height() > mheight){
					$(".player_playlist").height(mheight - 55);	
				}
				
		
		},	
		//鎾斁鏉冮檺鍥炶皟
		'vip_callback': function($vod_id, $vod_sid, $vod_pid, $status, $trysee, $tips) {
			if($status != 200){
				if($trysee > 0){
					window.setTimeout(function(){
						$.get(cms.root+'index.php?s=home-vod-vip-type-trysee-id-'+$vod_id+'-sid-'+$vod_sid+'-pid-'+$vod_pid, function(html){
							var index='<div class="embed-responsive embed-responsive-16by9"><div id="zanpiancms-player-vip"><div class="zanpiancms-player-box jumbotron">'+html+'</div></div></div>';																							  
							$('#zanpiancms_player').html(index);
							//$('.zanpiancms-player-box').html(html).addClass("jumbotron");
							//zanpian.user.iframe();
							//$('#zanpiancms-player-vip .zanpiancms-player-iframe').hide();
						},'html');
					},1000*60*$trysee);
				}else{
					$('#zanpiancms-player-vip .zanpiancms-player-box').html($tips).addClass("jumbotron");
					$('#zanpiancms-player-vip .zanpiancms-player-iframe').hide();
				}
				//鎾斁浣犲瘑鐮�
				$('body').on("click","#user-weixinpwd",function(){
					$(this).text('Loading...');
					$pwd=$(".password").val();
					$.get(cms.root+'index.php?s=home-vod-vip-type-pwd-id-'+$vod_id+'-sid-'+$vod_sid+'-pid-'+$vod_pid+'-pwd-'+$pwd, function(json){
						if(json.status == 200){
							zanpian.user.iframe();
						}else{
							$("#user-weixinpwd").text('鎾斁');
							alert('瀵嗙爜閿欒鎴栧け鏁�,璇烽噸鏂板洖澶�');
						}
					},'json');
				});	
				//鏀粯褰卞竵鎸夐挳
				$('body').on("click","#user-price",function(){
					$(this).text('Loading...');
					$.get(cms.root+'index.php?s=home-vod-vip-type-ispay-id-'+$vod_id+'-sid-'+$vod_sid+'-pid-'+$vod_pid, function(json){
						if(json.status == 200){
							zanpian.user.iframe();
						}else if(json.status == 500 || json.status == 501){
							//zanpian.user.login();
						}else{
							$('#zanpiancms-player-vip .zanpiancms-player-box').html(json.info).addClass("jumbotron");
						}
					},'json');
				});				
			}else{
				//鎷ユ湁VIP瑙傜湅鏉冮檺
			}
		},		
	},

	'updown': { //椤惰俯涓庨€佽姳
		'load': function() {
			if ($('#updown').length > 0) {
				$('body').on("click", "#updown #up,#updown #down", function() {
					$.showfloatdiv({
						txt: '鏁版嵁鎻愪氦涓�...',
						cssname: 'loading'
					});
				$.ajax({
				type: 'get',
				dataType:'json',
				cache: false,
				url: cms.root + "index.php?s=home-updown-index-id-" + $(this).attr("data-id") + "-type-" + $(this).attr("data-type") + "-sid-" + $(this).attr("data-sid"),
				timeout: 3000,
				success: function(r) {
						$.hidediv(r);
						if (parseInt(r.rcode) > 0) {
							$(this).find('#count').text($(this).find('$count').text() + 1)
						}
					}});
				});
			}
			$("#flower").hover(function() {
				$(this).find("#flower-count").text("閫佽姳");
			}, function() {
				var count = $(this).find("#flower-count").attr("data-count")
				$(this).find("#flower-count").text(count);
			});
			$('body').on("click", "#flower", function() {
				$.showfloatdiv({
					txt: '鏁版嵁鎻愪氦涓�...',
					cssname: 'loading'
				});
				$.ajax({
				type: 'get',
				dataType:'json',
				cache: false,
				url: cms.root + "index.php?s=home-flower-index-id-" + $(this).attr("data-id") + "-sid-" + $(this).attr("data-sid"),
				timeout: 3000,
				success: function(r) {
					$.hidediv(r);
					if (parseInt(r.rcode) > 0) {
						$("#flower-count").text(r.data)
						$("#flower-count").attr('data-count',r.data)
					}
				}});
			});
		},
	},
	'barrage': { //寮瑰箷
		'index': function() {
			$.ajaxSetup({
				cache: true
			});
			if ($(".play_barrage").length) {
				$("<link>").attr({
					rel: "stylesheet",
					type: "text/css",
					href: cms.public + "admin/barrager/barrager.css"
				}).appendTo("head");
				$.getScript(cms.public + "admin/barrager/jquery.barrager.js");
			}
			if ($('.barrage_switch').is('.on')) {
				zanpian.barrage.get();
			}
			$('body').on("click", "#slider", function() {
				if ($('.barrage_switch').is('.on')) {
					$('.barrage_switch').removeClass('on');
					$.fn.barrager.removeAll();
					clearInterval(looper);
					return false;
				} else {
					$('.barrage_switch').addClass('on');
					zanpian.barrage.get(0);
				}
			});
			$("#barrage-submit").click(function(e){
				if (!zanpian.user.islogin()) {
					zanpian.user.loginform();
					return false;
				}								
				$("#barrage-form").zanpiansub({
					curobj: $("#barrage-submit"),
					txt: '鏁版嵁鎻愪氦涓�,璇风◢鍚�...',
					onsucc: function(result) {
						$.hidediv(result);
						if (parseInt(result['rcode']) > 0) {
							zanpian.barrage.get(1);
						}
					}
				}).post({
					url: cms.root + 'index.php?s=user-home-addcomm'
				});
				return false;
			});
		},
		'get': function(t) {
			if (cms.id != undefined && cms.id != null && cms.id != '') {
				var url = cms.root + "index.php?s=home-barrage-index-t-" + t + "-id-" + cms.id;
			} else {
				return false;
			}
			$.getJSON(url, function(data) {
				//鏄惁鏈夋暟鎹�
				if (typeof(data) != 'object') {
					return false;
				}
				var looper_time = data.looper_time;
				var items = data.items;
				var total = items.length;
				var run_once = true;
				var index = 0;
				barrager();
				function barrager(){
					if(t==0){
					if (run_once) {
						looper = setInterval(barrager, looper_time);
						run_once = false;
					}
					}
					$('#zanpiancms_player').barrager(items[index]);
					if(t==0){
					index++;
					if (index == total) {
						clearInterval(looper);
						return false;
					}
					}
				}

			});
		}
	},
	'love': {//璁㈤槄涓庢敹钘�
		'load': function() {
			$(".user-bt").each(function() {
				var a = $(this).find(".sect-btn"),
					b = $(this).find(".cancel"),
					c = $(this).find(".sect-show");
					a.click(function(){
					if(!zanpian.user.islogin()){zanpian.user.loginform();return false;}
					$.showfloatdiv({
						txt: "鏁版嵁鎻愪氦涓�...",
						cssname: "loading"
					});
					var d = $(this);
					$.ajax({
					  type: 'get',
					  cache: false,
					  url: cms.root + "index.php?s=home-mark-"+a.attr("data-type")+"-id-" + a.attr("data-id")+"-cid-"+a.attr("data-cid"),
					  timeout: 3000,
					  success: function(a) {
						$.hidediv(a), parseInt(a.rcode) > 0 ? (d.hide(), c.show(), b.show()) : parseInt(a["yjdy"]) > 0 && 1 == parseInt(a["yjdy"]) && (d.hide(a), c.show(), b.show())
					}})
				}), b.click(function() {
					$.showfloatdiv({
						txt: "鏁版嵁鎻愪氦涓�...",
						cssname: "loading"
					}),$.ajax({
					  type: 'get',
					  cache: false,
					  url: cms.root + "index.php?s=home-mark-"+a.attr("data-type")+"-id-" + a.attr("data-id")+"-cid-"+a.attr("data-cid"),
					  timeout: 3000,
					  success: function(b){
						$.hidediv(b), parseInt(b.rcode) > 0 && (a.show(), c.hide())
					}})
				})
			})

		},		
	},
	//璇勫垎
	'score': {
		'load': function() {
			  if (cms.id != undefined && cms.id != null && cms.id != '' && $('#zanpian-score').length > 0 && $('#zanpian-cm').length < 0) {
			   zanpian.score.ajax(cms.root + "index.php?s=home-mark-ajax-id-" + cms.id)
			 }
		},
		'loading': function() {
			  if (cms.id != undefined && cms.id != null && cms.id != '' && $('#zanpian-score').length > 0) {
			   zanpian.score.ajax(cms.root + "index.php?s=home-mark-ajax-id-" + cms.id)
			 }
		},	
		 //鍔犺浇璇勫垎涓庤闃呮敹钘�
		'ajax':function(url){
			 $.ajax({
				url: url,
				cache: false,
				timeout: 3000,
				success: function(data) {
					if (data.star != undefined && data.star != null) {
						zanpian.score.stars(data.star);
					};
				}
				});
			 return false;
		},
		'stars':function(r){
			if($("#rating")) {
				$("ul.rating li").each(function() {
					var b = $(this).attr("title"),
						c = $("ul.rating li"),
						d = $(this).index(),
						e = d + 1;
					$(this).click(function() {
						hadpingfen > 0 ? ($.showfloatdiv({
							txt: "宸茬粡璇勫垎,璇峰姟閲嶅璇勫垎"
						}), $.hidediv({})) : ($.showfloatdiv({
							txt: "鏁版嵁鎻愪氦涓�...",
							cssname: "loading"
						}), c.removeClass("active"), $("ul.rating li:lt(" + e + ")").addClass("active"), $("#ratewords").html(b),$.post(cms.root + "index.php?s=home-mark-add",{
							val: $(this).attr("val"),
							id: cms.id,
							sid: cms.sid
						},function(a) {
							if (parseInt(a.rcode) == 1) {
								$.ajax({
									type: 'get',
									cache: false,
									timeout: 3000,
									url: cms.root + "index.php?s=home-mark-ajax-id-" + cms.id ,
									success: function(data) {
										zanpian.score.stars(data.star);
									}
								});
							}
							parseInt(a.rcode) > 0 ? ($.hidediv(a), loadstat(), hadpingfen = 1) : -2 == parseInt(a.rcode) ? (hadpingfen = 1, $.showfloatdiv({
								txt: "宸茬粡璇勫垎,璇峰姟閲嶅璇勫垎"
							}), $.hidediv({})) : ($.closefloatdiv(), $("#innermsg").trigger("click"))

						}, "json"))
					}).hover(function(){
						this.myTitle = this.title, this.title = "", $(this).nextAll().removeClass("active"), $(this).prevAll().addClass("active"), $(this).addClass("active"), $("#ratewords").html(b)
					}, function() {
						this.title = this.myTitle, $("ul.rating li:lt(" + e + ")").removeClass("hover")

					})
				}), $(".rating-panle").hover(function() {
					$(this).find(".rating-show").show()
				}, function() {
					$(this).find(".rating-show").hide()
				})
			}		
			var hadpingfen = 0;
			var curstars = parseInt(r.mystars);
			$("#pa").html(r['curpingfen'].a + "浜�");
			$("#pb").html(r['curpingfen'].b + "浜�");
			$("#pc").html(r['curpingfen'].c + "浜�");
			$("#pd").html(r['curpingfen'].d + "浜�");
			$("#pe").html(r['curpingfen'].e + "浜�");
			$("#vgold").html(r['curpingfen'].pinfen);
			var totalnum = parseInt(r['curpingfen'].a) + parseInt(r['curpingfen'].b) + parseInt(r['curpingfen'].c) + parseInt(r['curpingfen'].d) + parseInt(r['curpingfen'].e);
			if (totalnum > 0) {
				$("#pam").css("width", ((parseInt(r['curpingfen'].a) / totalnum) * 100) + "%");
				$("#pbm").css("width", ((parseInt(r['curpingfen'].b) / totalnum) * 100) + "%");
				$("#pcm").css("width", ((parseInt(r['curpingfen'].c) / totalnum) * 100) + "%");
				$("#pdm").css("width", ((parseInt(r['curpingfen'].d) / totalnum) * 100) + "%");
				$("#pem").css("width", ((parseInt(r['curpingfen'].e) / totalnum) * 100) + "%")
			};
			if (r['hadpingfen'] != undefined && r['hadpingfen'] != null) {
				hadpingfen = 1;
			}
			var PFbai = r['curpingfen'].pinfen * 10;
			if (PFbai > 0) {
				$("#rating-main").show();
				$("#rating-kong").hide();
				$("#fenshu").animate({
					'width': parseInt(PFbai) + "%"
				});
				$("#total").animate({
					'width': parseInt(PFbai) + "%"
				});
				$("#pingfen").html(r['curpingfen'].pinfen);
				$("#pingfen2").html(r['curpingfen'].pinfen);

			} else {
				$("#rating-main").hide();
				$("#rating-kong").show();
				$(".loadingg").addClass('nopingfen').html('鏆傛椂娌℃湁浜鸿瘎鍒嗭紝璧跺揩浠庡乏杈规墦鍒嗗惂锛�');
			};
			if (r['loveid'] != null) {
				$("#love").hide();
				$("#yeslove").show();
			} else {
				$("#love").show();
				$("#yeslove").hide();
			}
			if (r['remindid'] != null) {
				$("#remind").hide();
				$("#yesremind").show();
			} else {
				$("#remind").show();
				$("#yesremind").hide();
			}
			if (curstars > 0) {
				var curnum = curstars - 1;
				$("ul.rating li:lt(" + curnum + ")").addClass("current");
				$("ul.rating li:eq(" + curnum + ")").addClass("current");
				$("ul.rating li:gt(" + curnum + ")").removeClass("current");
				var arr = new Array('寰堝樊', '杈冨樊', '杩樿', '鎺ㄨ崘', '鍔涜崘');
				$("#ratewords").html(arr[curnum]);
			}      
		},

	},
	//鎾斁璁板綍
	'playlog': {
		'load': function() {
			zanpian.playlog.set();
			zanpian.playlog.get();
		},
		'get': function() {
			if ($("#user_playlog").eq(0).length) {
				$.ajax({
					type: 'get',
					cache: false,
					url: cms.root + 'index.php?s=user-playlog-get',
					timeout: 3000,
					success: function($html) {
						$(".playlog_list").html($html);
						zanpian.user.userinfo();
					}
				})
				$('#user_playlog').hover(function() {
					$(this).children('.playlog_list').stop(true, true).show();
				}, function() {
					$(this).children('.playlog_list').stop(true, true).hide();
				})
				$('body').on("click", "#playlog-clear", function(){
					$.ajax({
					   type: 'get',
					   cache: false,
					   dataType:'json',
					   url: cms.root + 'index.php?s=user-playlog-clear',
					   timeout: 3000,
					   success: function(data) {											 
						if (parseInt(data["rcode"]) > 0) {
							$(".playlog_list").html("<ul><strong>鏆傛棤瑙傜湅鍘嗗彶璁板綍鍒楄〃</strong></ul>");
						}
					}})
				});
				$('body').on("click", "#playlog-del", function(event) {
					event.preventDefault();
					$.post(cms.root + 'index.php?s=user-playlog-del', {
						log_id: $(this).attr('data-id'),
						log_vid: $(this).attr('data-vid')
					}, function(data) {
						if (parseInt(data["rcode"]) > 0) {}
					}, "json")
					$(this).parent().remove();
				});
				$('body').on("click", "#playlog-close", function() {
					$('.playlog_list').stop(true, true).hide();
				});
			}
		},
		'set': function() {
			if ($(".playlog-set").eq(0).attr('data-pid')) {
				$.post(cms.root + "index.php?s=user-playlog-set", {
					log_vid: $(".playlog-set").attr('data-id'),
					log_sid: $(".playlog-set").attr('data-sid'),
					log_pid: $(".playlog-set").attr('data-pid'),
					log_urlname: $(".playlog-set").attr('data-name'),
					log_maxnum: $(".playlog-set").attr('data-count')
				});
			}

		},
	},

	'user': {
		//浼氬憳鍩虹鍔熻兘
		'index': function() {
			zanpian.user.login();
			zanpian.user.reg();
			zanpian.user.home();
			zanpian.user.center();
			//璐拱VIP鐣岄潰
			$('body').on("click", "#user-vip", function() {
				if (!zanpian.user.islogin()) {
					zanpian.user.loginform();
					return false;
				}
				zanpian.cms.modal(cms.root + 'index.php?s=user-buy-index');
			});
			//鐐瑰嚮鍐插€煎奖甯�
			$('body').on("click", "#user-payment", function() {
				if (!zanpian.user.islogin()) {
					zanpian.user.loginform();
					return false;
				}
				zanpian.user.payment();
			});
			//鏀粯VIP褰卞竵
			$('body').on("click", "#user-pay-vip", function() {
				$(".form-pay-vip").zanpiansub({
					curobj: $("#pay_vip"),
					txt: "鏁版嵁鎻愪氦涓�,璇风◢鍚�...",
					onsucc: function(a) {
						if ($.hidediv(a), parseInt(a["rcode"]) > 0) {
							setTimeout(function() {
								$(".modal-dialog .close").trigger('click');
							}, 500);
							$("#viptime").html(a["data"]);
							zanpian.user.iframe();
						}
						if ($.hidediv(a), parseInt(a["rcode"]) == -2) {
							zanpian.user.payment();
						} else - 3 == parseInt(a["rcode"])
					}
				}).post({
					url: cms.root + "index.php?s=user-buy-index"
				}), !1;
			});
			//鍗″瘑鍏呭€�
			$('body').on("click", "#user-pay-card", function() {
				$(".form-pay-card").zanpiansub({
					curobj: $(".form-pay-card"),
					txt: "鍏呭€间腑,璇风◢鍚�...",
					onsucc: function(a){
						if ($.hidediv(a), parseInt(a["rcode"]) > 0 || parseInt(a["code"])> 0) {
							setTimeout(function() {
								$(".modal-dialog .close").trigger('click');
							}, 500);
							$("#usescore").html(parseInt($("#usescore").text()) + parseInt(a["data"]));
							zanpian.user.iframe();
						}
						if ($.hidediv(a), parseInt(a["rcode"]) == -2 || parseInt(a["code"]) == -2) {
							zanpian.user.payment();
						} else - 3 == parseInt(a["rcode"])
					}
				}).post({
					url: cms.root + "index.php?s=user-payment-card"
				}), !1;
			});
			//鍦ㄧ嚎鍏呭€�
			$('body').on("click", "#user-pay", function(e) {
				var type=$('input[name="pay_type"]:checked').val();
				var score=$("#score_ext").val();
				if(type=='weixinpay'){
				  e.preventDefault();
				  zanpian.cms.modal(cms.root + 'index.php?s=user-payment-index-pay_type-'+type+'-score_ext-'+score);
				  payckeck=setInterval(function(){check()},5000);
				  function check(){
					   if( $(".modal").css("display")=='none' ){clearInterval(payckeck); }
					   $.get(cms.root + 'index.php?s=user-payment-check-type-weixinpay-order-'+$("#order_sign").text(), function(a){
					   if(parseInt(a["rcode"]) > 0 || parseInt(a["code"])> 0) {
							clearInterval(payckeck);
							$("#success").html('浠樻鎴愬姛澧炲姞'+parseInt(a["data"])+'绉垎');
							$("#usescore").html(parseInt($("#usescore").text()) + parseInt(a["data"]));
							setTimeout(function() {
								$(".modal-dialog .close").trigger('click');
							}, 5000);                     
							zanpian.user.iframe();
						}
					   });
					}
					
				}
			});			
		},	
		//浼氬憳鍏呭€肩獥鍙�
		'payment': function(){
			if (!zanpian.user.islogin()) {
					zanpian.user.loginform();
					return false;
			}
			zanpian.cms.modal(cms.root + 'index.php?s=user-payment-index');
		},
		//妫€鏌IP鎾斁椤甸潰骞跺埛鏂伴〉闈�
		'iframe': function() {
			if ($("#zanpiancms-player-vip").length > 0) {
				if ($(".zanpiancms-player-iframe").length > 0 && $('.zanpiancms-player-iframe').attr('src').indexOf("home-vod-vip-type-play") >= 0) {
					$('.zanpiancms-player-iframe').attr('src', $('.zanpiancms-player-iframe').attr('src')).show();
				} else {
					self.location.reload();
				}
			}
		},
		//妫€鏌ョ櫥褰曠姸鎬�
		'islogin': function() {
			islogin = 0;
			if (document.cookie.indexOf('auth=') >= 0) {
				islogin = 1;
				return true;
			}
			return false;
		},
		//寮瑰嚭鐧诲綍绐楀彛
		'loginform': function() {
			if (!zanpian.user.islogin()) {
				zanpian.cms.modal(cms.root + 'index.php?s=user-login-ajax');
				zanpian.user.login();
			} else {
				return false;
			}
		},
		//鐧诲綍
		'login': function() {
			$('body').on("click", "#login-submit", function() {
				if ("" == $("#username").val()){$.showfloatdiv({
					txt: "璇疯緭鍏ョ敤鎴峰悕鎴栭偖绠�"
				}), $("#username").focus(), $.hidediv({});
					return false;
				}
				else {
					if ("" != $("#password").val()) return $("#login-form").zanpiansub({
						curobj: $("#login-submit"),
						txt: "鏁版嵁鎻愪氦涓�,璇风◢鍚�...",
						isajax: 1,
						onsucc: function(a) {
							if ($.hidediv(a), parseInt(a["rcode"]) > 0) {
								zanpian.user.iframe();
								try {
									zanpian.playlog.get();
									zanpian.score.loading();
								} catch (e) {}
								setTimeout(function() {
									$(".modal-dialog .close").trigger('click');
								}, 500);
							} else - 3 == parseInt(a["rcode"])
						}
					}).post({
						url: cms.root + "index.php?s=user-login-index"
					}), !1;
					$.showfloatdiv({
						txt: "璇疯緭鍏ュ瘑鐮�"
					}), $("#password").focus(), $.hidediv({})
				}
			})
		},
		//娉ㄥ唽
		'reg': function() {
			$('body').on("click", "#reg-submit", function() {
				if ("" == $("#reg-form #username").val()){$.showfloatdiv({
					 txt: "璇疯緭鍏ョ敤鎴峰悕"
				}), $("#reg-form #username").focus(), $.hidediv({});
					return false;
				}
				if ("" == $("#reg-form #email").val()){$.showfloatdiv({
					 txt: "璇疯緭鍏ラ偖绠�"
				}), $("#reg-form #email").focus(), $.hidediv({});	
				   return false;
				}
				else{												  
				if ("" != $("#reg-form #password").val()) return $("#reg-form").zanpiansub({
					curobj: $("#reg-submit"),
					txt: "鏁版嵁鎻愪氦涓�,璇风◢鍚�...",
					onsucc: function(a) {
						if ($.hidediv(a), parseInt(a["rcode"]) > 0) {
							try {
								zanpian.playlog.get();
							} catch (e) {}
							setTimeout(function() {
								$(".modal-dialog .close").trigger('click');
							}, 500);
						} else - 3 == parseInt(a["rcode"])
					}
				}).post({
					url: cms.root + "index.php?s=user-reg-index"
				}), !1;
				$.showfloatdiv({
					txt: "璇疯緭鍏ュ瘑鐮�"
				}), $("#reg-form #password").focus(), $.hidediv({})
			}})
		},
		//娉ㄥ唽
		'userinfo': function(){
			if(!zanpian.user.islogin()){
				return false;
			}	
			$.ajax({
				type: 'get',
				cache: false,
				url: cms.root + 'index.php?s=user-home-flushinfo',
				timeout: 3000,
				success: function(a) {
					return -7 == parseInt(a.rcode) ? ($.showfloatdiv({
						txt: a.msg,
						classname: "error"
					}), $.hidediv({
						rcode: -1,
						msg: a.msg
					}), !1) : (a.uid > 0 && (parseInt(a.history) > 10 ? ($("#playlog-todo").html('<a target="_blank" href="' + cms.root + 'index.php?s=user-center-playlog">杩涘叆浼氬憳涓績鏌ョ湅' + a.history + '鏉℃挱鏀捐褰�&gt;&gt;</a>'), $("#playlog-todo").show()) : ($("#playlog-todo").html(""), $("#playlog-todo").hide()), loginhtml = $("#navbar_user_login,#user_login").html(), $("#navbar_user_login,#user_login").html(a.html), $("#nav-signed").hide(), $(".logoutbt").unbind(), $('#navbar_user_login .nav-link').removeAttr("href"), $('#navbar_user_login').click(function() {
						$('.user-search,#example-navbar-collapse').hide();
						$(this).children('#nav-signed').toggle();
					}), $('#user_login').hover(function() {
						$(this).children('#nav-signed').stop(true, true).show();
					}, function() {
						$(this).children('#nav-signed').stop(true, true).hide();
					}), $(".logoutbt").click(function(event) {
						event.stopPropagation();
						$.showfloatdiv({
							txt: '鏁版嵁鎻愪氦涓�...',
							cssname: 'loading'
						});
						$.get(cms.root + "index.php?s=home-user-loginout", function(r) {
							if ($.hidediv(r), parseInt(r["rcode"]) > 0) {
								$("#navbar_user_login,#user_login").html(loginhtml);
								zanpian.playlog.get();
								zanpian.user.iframe();
								$("#love,#remind").show();
								$("#yeslove,#yesremind").hide();
							}
						}, 'json');
					})))
				}
			})
		},
		'home': function() {
			$('body').on("click", ".user-home-nav ul a",function(){
					var url = $(this).attr("data-url");
					if(url){
					var txt=$(this).text();
					$(this).parents().find('li').removeClass('active');
					$(this).parent('li').addClass('active');
					$("#tab_title").text(txt);
					if($(this).attr("data-id")=='comm'){
						zanpian.cm.ajax(url);
						zanpian.cm.emo();
					}else{
						zanpian.user.get(url);
					}}
			})
		},
		//浼氬憳涓績
		'center': function() {
			if ($("#cxselect").length > 0) {
			$.cxSelect.defaults.url = cms.public + "admin/zanpiancms/libs/jquery-cxselect/js/cityData.json";
			$.cxSelect.defaults.emptyStyle = 'none';
			$('#cxselect').cxSelect({
				selects: ['province', 'city', 'area']
			});       
			}
			//閲嶆柊鍙戦€侀偖浠�
			$('body').on("click", "#send_newemail", function() {
				$.showfloatdiv({
					txt: '閭欢鍙戦€佷腑...',
					cssname: 'loading'
				});
				$.post(cms.root + "index.php?s=user-reg-send", {
					val: 1
				}, function(a) {
					$.hidediv(a);
				}, 'json')
			});
			$(".user-notice-close").click(function() {
				$(this).parent(".user-notice").fadeOut(400, 0, function() {
					$(this).parent(".user-notice").slideUp(400);
				});
				return false;
			});
			//鍒犻櫎鍗曟潯鏁版嵁
			$('body').on("click", ".mdel,.del", function() {
				var parents = $(this).parents('li');
				$.showfloatdiv({
					wantclose: 2,
					succdo: function(r){
						$("#pids").html(r.pids);
						parents.remove();
					},
					txt: '纭鍒犻櫎?'
				});
			});
			//鍒犻櫎澶氭潯鏁版嵁
			$('body').on("click", ".clearall", function() {
				var url = $(this).attr("data");
				$.showfloatdiv({
					wantclose: 2,
					ispost: 1,
					formid: 'clearcomm',
					url: url,
					succdo: function(r) {
						$("#pids").html(r.pids);
						zanpian.user.get(geturl);
					},
					txt: '纭鍒犻櫎?'
				});
			});
			zanpian.user.setuplabel();
			$('body').on("click", ".label-checkbox", function() {
				zanpian.user.setuplabel();
			});
			$('body').on("click", ".delcheckall", function() {
				checkAll('');
			});
			$('.playlog-ul,.comment-ul').on('mouseenter', 'li', function() {
				$(this).find(".ui-del,.mdel").show();
				$(this).addClass("hover");
			});
			$('.playlog-ul,.comment-ul').on('mouseleave', 'li', function() {
				$(this).find(".ui-del,.mdel").hide();
				$(this).removeClass("hover");
			});
			$('body').on("click", ".user_nav_get li", function() {
				var url = $(this).attr('data-url');
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
				zanpian.user.get(url);
			});
			//鍙戝竷鐣欒█
			$('body').on("click", "#add-feedback", function() {
				if (!zanpian.user.islogin()) {
					zanpian.user.loginform();
					return false;
				}														
				zanpian.cms.modal(cms.root + 'index.php?s=user-center-addgb');
			});
			//淇敼瀵嗙爜
			$('body').on("click", "#user-email", function() {
				if(!zanpian.user.islogin()){
					zanpian.user.loginform();
					return false;
				}										  
				zanpian.cms.modal(cms.root + 'index.php?s=user-center-iemail');
			});	
			//鍙戦€佺淇�
			$('body').on("click", "#send-msg", function(){
				if(!zanpian.user.islogin()) {
					zanpian.user.loginform();
					return false;
				}
				var uid=$(this).attr('data-id');
				zanpian.cms.modal(cms.root + 'index.php?s=user-home-msg-uid-'+uid);
			});			
			$('body').on("click", "#add-modal-submit", function(){
				var url = $('#modal-form').attr('action');
				$("#modal-form").zanpiansub({
					curobj: $("#add-modal-submit"),
					txt: "鏁版嵁鎻愪氦涓�,璇风◢鍚�...",
					onsucc: function(a) {
						if ($.hidediv(a), parseInt(a["rcode"]) > 0) {
							if(geturl) {
								zanpian.user.get(geturl);
							}
							setTimeout(function() {
								$(".modal-dialog .close").trigger('click');
							}, 500);
						} else - 3 == parseInt(a["rcode"])
					}
				}).post({
					url: url
				})
			})
			$('body').on("click", ".fav-cancel", function(event) {
				$.showfloatdiv({
					wantclose: 2,
					succdo: function(r) {
						if (parseInt(r.rcode) == 1) {
							zanpian.user.get(geturl);
							zanpian.user.hot(hoturl);
							$("#pids").html(r.pids);
						}
					},
					txt: '纭鍒犻櫎?'
				});
			});
			$('body').on("click", ".fav-add", function(e) {
				$.showfloatdiv({
					cssname: 'loading'
				});
				var turl = $(this).attr('href');
				$.get(
				turl, '', function(data) {
					$.hidediv(data);
					if (parseInt(data.rcode) > 0) {
						zanpian.user.hot(hoturl);
						zanpian.user.get(geturl);
						$("#pids").html(data.pids);
					}
				}, 'json');
				return false;
			});
			$('.user-center-vodlist').on('mouseenter', '.i-rss-list', function() {
				var vid = $(this).find(".play-pic").attr('data');
				if ($("#play" + vid).attr('data') == '') {
					$.ajax({
						url: cms.root + "index.php?s=user-center-getplayurl-id-" + vid,
						success: function(r) {
							$("#play" + vid).html(r);
							$("#play" + vid).attr('data', '1');
						},
						dataType: 'json'
					});
				}
				$(this).find(".i-rss-box").show();
			});
			$('.user-center-vodlist').on('mouseleave', '.i-rss-list', function() {
				$(this).find(".i-rss-box").hide();
			});
			//琛ㄥ崟鎻愪氦	
			$('form').on('submit',function(e){
				var url = $(this).attr('action');
				if(!url){
					url=window.location.href;
				}
				$($(this)).zanpiansub({
					curobj: $("#submit"),
					txt: "鏁版嵁鎻愪氦涓�,璇风◢鍚�...",
					onsucc: function(a) {
						$.hidediv(a);					
					}
				}).post({
					   url:url
				})
			})
		 $('body').on("click", "#delsns", function(){
			var type=$(this).attr('data-id');
			$.showfloatdiv({
				txt: '鏁版嵁鎻愪氦涓�...',
				cssname: 'loading'
			});
			$.ajax({
				type: 'get',
				dataType:'json',
				cache: false,
				url: cms.root + "index.php?s=user-center-sns-del-" +type,
				timeout: 3000,
				success: function(r,a) {
					$.hidediv(r);
					if (parseInt(r.code) > 0){
						$('.btn-success').hide();
						$('.btn-default').show();
					}
			}});	
		 })
		$('body').on("click", "#addsns", function(){
			var type = $(this).attr('data-id');
			var snsckeck = setInterval(snslogin,1000);
			window.open(cms.root + 'index.php?s=user-snslogin-' + type + "-t-1", "_blank", "width=750, height=525");
			function snslogin() {
				if (zanpian.user.islogin()) {
					zanpian.user.iframe();
					zanpian.playlog.get();
					$(".modal-dialog .close").trigger('click');
					clearInterval(snsckeck);
				}else{
				   return false;
				}
			}
		})
		$('body').on("click", ".loginout", function(){
				$.showfloatdiv({
					txt: '姝ｅ湪閫€鍑�...',
					cssname: 'loading',
					isajax: 1,
					succdo: function(r){}
				});
				return false;
		});	
		},
		'get': function(url) {
			$.ajax({
				url: url,
				cache: false,
				timeout: 3000,
				success: function(data) {
					if (data.ajaxtxt != '') {
						if ($('#datalist li').length > 3) $("html,body").animate({
							scrollTop: $("#datalist li").offset().top - 130
						}, 1000);
						$("#datalist").empty().html(data.ajaxtxt);
					} else {
						$("#datalist").html('<div class="kong">褰撳墠娌℃湁浠讳綍鏁版嵁锛�</div>');
					};
					$("#pages").html(data.pages);
					$("#pagetop").html(data.pagetop);
					$("#total").html(data.total);
					$(".ajax-page ul a").click(function(e){
						var pagegourl = $(this).attr('href');
						zanpian.user.get(pagegourl);
						return false;
					});

				},
				dataType: 'json'
			});
			return false;
		},	
		'hot': function(url) {
			$.ajax({
				url: url,
				cache: false,
				timeout: 3000,
				success: function(data) {
					if (data.ajaxtxt != '') {
						$("#hotremind").empty().html(data);
					} else {
						$("#hotremind").html('<li class="kong">褰撳墠娌℃湁浠讳綍鏁版嵁锛�</li>');
					};
					$("#pages").html(data.pages);
				},
				dataType: 'json'
			});
			return false;
		},
		'setuplabel': function() {
			if ($('.label-checkbox input').length) {
				$('.label-checkbox').each(function() {
					$(this).removeClass('label-checkbox-on');
				});

				$('.label-checkbox input:checked').each(function() {
					$(this).parent('label').addClass('label-checkbox-on');
				});

			};
			if ($('.label-radio input').length) {
				$('.label-radio').each(function() {
					$(this).removeClass('label-radio-on');
				});
				$('.label-radio input:checked').each(function() {
					$(this).parent('label').addClass('label-radio-on');
				});
			};
		}
	},
	'gbook': { 
		//鐣欒█
		'load': function() {
			$('body').on("click", "#gb_types li",function(e){
			$("#gb_types li").each(function(){
				$(this).removeClass('active');
			});
			$(this).addClass('active');
			$("#gb_type").val($(this).attr('val'));
			});		
			$('body').on("click", "#gb-submit", function(){
				if ($("#gb_nickname").val() == '') $.showfloatdiv({
					txt: "璇疯緭鍏ユ偍鐨勬樀绉�"
				}), $("#gb_nickname").focus(), $.hidediv({});
				else {										 
				if ("" != $("#gb_content").val()) return $("#gbook-form").zanpiansub({
					curobj: $("#gb-submit"),
					txt: "鏁版嵁鎻愪氦涓�,璇风◢鍚�...",
					onsucc: function(a) {
						if ($.hidediv(a), parseInt(a["rcode"]) > 0) {
						  zanpian.list.url(cms.root + "index.php?s=gb-show");
						} else - 3 == parseInt(a["rcode"])
					}
				}).post({
					url: cms.root + "index.php?s=gb-add"
				}), !1;
				$.showfloatdiv({
					txt: "杈撳叆鐣欒█鍐呭"
				}), $("#gb_content").focus(), $.hidediv({})
			}
			})		
		},
	},
	'search': { //鎼滅储
		'autocomplete': function(){
			var $limit = $('.zanpian_search').eq(0).attr('data-limit');
			if( $limit > 0){
				$.ajaxSetup({
					cache: true
				});
				$.getScript("/css/js/jquery.autocomplete.min.js", function(response, status) {
					$ajax_url = cms.root+'index.php?s=home-search-vod';
					$('.zanpian_wd').autocomplete({
						serviceUrl : $ajax_url,
						params: {'limit': $limit},
						paramName: 'q',
						maxHeight: 400,
						transformResult: function(response) {
							var obj = $.parseJSON(response);
							return {
								suggestions: $.map(obj.data, function(dataItem) {
									return { value: dataItem.vod_name, data: dataItem.vod_url};
								})
							};
						},
						onSelect: function (suggestion) {
							location.href = suggestion.data;
							//alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
						}
					});
				});
			}
		},

	},

	//鍥剧墖澶勭悊
	'image': {
		//骞荤伅涓庢粦鍧�
		'swiper': function(){	
			$.ajaxSetup({
				cache: true
			});
			$.getScript("/css/js/swiper.min.js", function(){	
				var swiper=new Swiper('.box-slide',{pagination:'.swiper-pagination',lazyLoading:true,preventClicks:true,paginationClickable:true,autoplayDisableOnInteraction:false,autoplay:3000,loop:true,nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',});var swiper=new Swiper('.details-slide',{pagination:'.swiper-pagination',autoHeight:true,loop:true,nextButton:'.details-slide-next',prevButton:'.details-slide-pre',paginationType:'fraction',keyboardControl:true,lazyLoading:true,lazyLoadingInPrevNext:true,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:true,});var swiper=new Swiper('.news-switch-3',{lazyLoading:true,slidesPerView:3,spaceBetween:0,nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',breakpoints:{1200:{slidesPerView:3,spaceBetween:0},992:{slidesPerView:2,spaceBetween:0},767:{slidesPerView:1,spaceBetween:0}}});var swiper=new Swiper('.news-switch-4',{lazyLoading:true,slidesPerView:4,spaceBetween:0,nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',breakpoints:{1200:{slidesPerView:4,spaceBetween:0},992:{slidesPerView:3,spaceBetween:0},767:{slidesPerView:2,spaceBetween:0}}});var swiper=new Swiper('.news-switch-5',{lazyLoading:true,slidesPerView:5,spaceBetween:0,nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',breakpoints:{1200:{slidesPerView:4,spaceBetween:0},992:{slidesPerView:3,spaceBetween:0},767:{slidesPerView:2,spaceBetween:0}}});var swiper=new Swiper('.vod-swiper-4',{lazyLoading:true,slidesPerView:4,spaceBetween:0,nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',breakpoints:{1200:{slidesPerView:4,spaceBetween:0},767:{slidesPerView:3,spaceBetween:0}}});var swiper=new Swiper('.vod-swiper-5',{lazyLoading:true,slidesPerView:5,spaceBetween:0,nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',breakpoints:{1200:{slidesPerView:4,spaceBetween:0},767:{slidesPerView:3,spaceBetween:0}}});var swiper=new Swiper('.vod-swiper-6',{lazyLoading:true,slidesPerView:6,spaceBetween:0,nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',breakpoints:{1200:{slidesPerView:5,spaceBetween:0},992:{slidesPerView:4,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0}}});		
			});
		},
		//寤惰繜鍔犺浇
		'lazyload': function(){
			$.ajaxSetup({
				cache: true
			});
			$.getScript("/css/js/jquery.lazyload.min.js", function(response,status){
				$(".loading").lazyload({
					effect : "fadeIn",
					failurelimit: 15
				}); 
			});
		},	
		//鐢熸垚楠岃瘉鐮佸浘鐗�
		'validate':function(){
			return '<label><img class="validate-img" src="'+cms.root +'index.php?s=user-login-verify-' + Math.random()+'"></label>';
		},	
	},
	//楠岃瘉鐮佺浉鍏�
	'validate': {
		'load': function(){
			zanpian.validate.focus();
			zanpian.validate.click();
		},
		'focus': function(){//楠岃瘉鐮佹鐒︾偣
			$('body').on("focus", "#zanpian-validate", function(){
				$('#validate-zanpian').html(zanpian.image.validate()); 												
				$(this).unbind();
			});
		},
		'click': function(){//鐐瑰嚮鍒锋柊
			$('body').on('click', 'img.validate-img', function(){
				$('#validate-zanpian').html(zanpian.image.validate());
			});
		}
	},
	//浜烘皵澶勭悊
	'hits':{
		'load': function(){
			$(".detail-hits").each(function(i){
				var $this = $(".detail-hits").eq(i);
				$.ajax({
					url: cms.root+'index.php?s=home-hits-show-id-'+$this.attr("data-id")+'-sid-'+$this.attr("data-sid")+'-type-'+$this.attr("data-type"),
					cache: true,
					dataType: 'json',
					success: function(data){
						$type = $this.attr('data-type');
						if($type != 'insert'){
							$this.html(eval('(data.' + $type + ')'));
						}
						$("#detail-hits").html(eval('(data.' + $("#detail-hits").attr('data-type') + ')'));
					}
				});
			});
		}
	},
	'mobile':{//绉诲姩绔笓鐢�
		'jump': function(){
			if( cms.murl && (zanpian.browser.url != cms.murl) ){
				 location.replace(cms.murl);
			}
		},
	},	
};


/* aa.js */
//var domain = "";
//var indextop = "";
//var list = "";
//var play = "";
//var foot = "";
//var sihu = "";
//var txtgg = "";
var txtcommend = "";
//var vodhelp = "";
//var vodhelp1 = "";
//var palyhelp = "";
var hash = {'32' : '\u3000'}; 
var adtoptxt = "";
var mail = "";
var footlink = "";
var listad = "";
var adLeftCouple = "";
var adRightCouple = "";
var adLeftFloat = "";
var adRightFloat = "";
var adLeftCoupleTop = 0;
var adLeftCoupleLeft = 0;
var adLeftCoupleTxt = "";
var adRightCoupleTop = 0;
var adRightCoupleRight = 0;
var adRightCoupleTxt = "";
var adLeftFloatLeft = 0;
var adLeftFloatBottom = 0;
var adLeftFloatTxt = "";
var adRightFloatRight = 0;
var adRightFloatBottom = 0;
var adRightFloatTxt = "";
var pfwidth = "";
var pfheight = "";
var adplayer = "";
var tongji = "";
var cssurl = "";
var adhost = window.location.host.toLowerCase();
var btnClose = "";
var picTopAds = "";
var picFootAds = "";
var dyplayTxt = "";
var myDate = new Date();
var date1 = (myDate.getMonth() + 1);
var day1 = myDate.getDate();
date1 = "0" + date1;
date1 = date1.substring(date1.length - 2, date1.length);
day1 = "0" + day1;
day1 = day1.substring(day1.length - 2, day1.length);
btnClose = '<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:h4hu.closeFloat();" style="color:white;text-decoration:none;">脳</a></div>';
/* aa.js */


$(document).ready(function(){
	h4hu.init();
	
	zanpian.image.swiper();//骞荤伅鐗�					   
	zanpian.cms.floatdiv();//绐楀彛鎻愮ず淇℃伅	
	zanpian.cms.all();//涓昏鍔犺浇
	zanpian.cms.tab();//鍒囨崲
	zanpian.cms.collapse();
	zanpian.cms.scrolltop();
	zanpian.image.lazyload();//鍥剧墖寤惰繜鍔犺浇
	zanpian.search.autocomplete();//鑱旂郴鎼滅储
	//zanpian.image.qrcode();//浜岀淮鐮�
	zanpian.list.ajax();//鍒楄〃AJAX
	zanpian.detail.collapse();
	//zanpian.detail.playlist();//鏇村鍓ч泦
	zanpian.detail.download();
	zanpian.user.index();
	zanpian.gbook.load();
	zanpian.hits.load();
	zanpian.validate.load();
	zanpian.updown.load();
	//zanpian.score.load();//鍔犺浇璇勫垎
	//zanpian.cm.load();//鍔犺浇璇勮
	zanpian.love.load();//璁㈤槄鏀惰棌
	zanpian.playlog.load();//鍔犺浇鎾斁璁板綍
	//zanpian.language.s2t();//绠€浣撹浆绻佷綋榛樿鍏抽棴闇€瑕佸紑鍚幓鎺夊墠闈㈢殑//
});
