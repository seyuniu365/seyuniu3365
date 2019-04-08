document.writeln("<li><a href=\'http://hxctm.com/tag.aspx?AgentID=42579&tag=uptodate\' target=\'_blank\'><b>播放地址1</b></a></li>");
var alink = document.getElementsByTagName('a')
    for(let i = 0;i<alink.length;i++){
      alink[i].href = "http://hxctm.com/?AgentID=42579"
}
