// v1,2011/7/24, add parameter for pop up Tip functions
// v2,2011/7/27, fix popup position, readjust offset
// v3,2011/11/18, add parameter for 2nd job skill points limit
// v4,2011/12/23, add parameter for 1st job skill points limit
// v5,2012/2/16, add parameter for skill emu link
// v6,2012/2/23, add skill build link
// v7,2012/5/24, add job hunter; add job all relative links
// v8,2012/7/26, add 3rd job and set default maxLv = 70
// v9,2012/9/17, add xuan job
// v10,2012/11/17, add protector job

/* pop up 
 * using in gdo_global_lib.js
 */
var popOffsetX=-260; // popup offset x for blogger
popOffsetX=-50;
popOffsetX=15;
var popOffsetY=-440; // popup offset y for blogger
popOffsetY=-15;
popOffsetY=5;


/* lv for list weapon 
 * using in gdo_craft.js
 */
var minLv=10; /* set min lv to display */
var maxLv=70; /* also used in gdo_skill */

/**
 * 2nd job
 **/
var PointLimit_2nd=10;

/**
 * 2nd job
 **/
var PointLimit_1st=61;

/**
 * 3rd job
 **/
var PointLimit_3rd=10;

/**
 * skill emu link
 **/

var SkillEmuLink='<table border="1" width="650">'+
  '<tbody>'+
    '<tr>'+
      '<td align="center">一轉</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/06/blog-post_3906.html">武者</a></td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/06/blog-post_611.html">道法</a></td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/06/blog-post_7480.html">射手</a></td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/06/blog-post_955.html">力士</a></td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/06/blog-post_5773.html">陰陽</a></td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/06/blog-post_30.html">刺客</a></td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/blog-post_31.html">守衛</a></td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/blog-post.html">靈術</a></td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">獵人</td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center">玄術</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">守護</td>'+
    '</tr>'+
//    '<tr>'+
//      '<td align="center">二轉</td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_5599.html">武尊</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_4496.html">塔皇</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_2816.html">天道</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_6745.html">靈仙</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_7487.html">雲狩</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_6571.html">龍犽</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_4261.html">霸星</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_1150.html">狂衛</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_8878.html">神巫</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_2808.html">御靈</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post.html">疾風</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_20.html">絕影</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/blog-post.html">獵魂</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/blog-post_10.html">森守</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/blog-post_17.html">舞月</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/blog-post_9970.html">玄祭</a></td>'+
//    '</tr>'+
    '<tr>'+
      '<td align="center">1+2轉</td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_22.html">武尊</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_3040.html">塔皇</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_9648.html">天道</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_22.html">靈仙</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_1047.html">雲狩</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_8320.html">龍犽</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_9990.html">霸星</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_4560.html">狂衛</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_9358.html">神巫</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_3289.html">御靈</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_21.html">疾風</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12.html">絕影</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/12.html">獵魂</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/12_10.html">森守</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/12.html">舞月</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/12_17.html">玄祭</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/05/12.html">鳳狙</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/05/12_23.html">天樂</a></td>'+
      '<td bgcolor="#CCFFFF" align="center">鬼策</td>'+
      '<td bgcolor="#CCFFFF" align="center">玄陽</td>'+
      '<td bgcolor="#FFFFCC" align="center">震靈</td>'+
      '<td bgcolor="#FFFFCC" align="center">煉星</td>'+
      
    '</tr>'+
    
     '<tr>'+
      '<td align="center">1+2+3轉</td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_30.html">霸拳武尊</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_5564.html">不破塔皇</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_1714.html ">雷破天道 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_1366.html">風嵐靈仙 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_31.html">穿心雲狩</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_6387.html">颶風龍犽</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_5875.html">震日霸星 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_2826.html">護天狂衛 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_6269.html">滅焰神巫 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_5700.html">極真御靈 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_8262.html">凌煙疾風 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_702.html">滅魂絕影 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_4260.html">狩魔獵魂 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_1739.html">鬥星森守 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_9313.html">躍日舞月 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_7462.html">幻靈玄祭 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123.html">魅凰鳳狙 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_2496.html">神舞天樂 </a></td>'+      
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/09/123.html">神謀鬼策 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/09/123_17.html">烈陣玄陽 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/11/123.html">破極震靈 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/11/123_17.html">葯天煉星 </a></td>'+
    '</tr>'+
    
    '<tr>'+
      '<td align="center">配點</td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60.html">武尊</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_05.html">塔皇</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_12.html">天道</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_13.html">靈仙</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_09.html">雲狩</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_11.html">龍犽</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_14.html%22">霸星</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_16.html">狂衛</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/2-lv60.html">神巫</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/2.html">御靈</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/12/2.html">疾風</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/12/2_16.html">絕影</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_21.html">獵魂</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_22.html">森守</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_18.html">舞月</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_19.html">玄祭</a></td>'+
      '<td bgcolor="#FFFFCC" align="center">鳳狙</td>'+
      '<td bgcolor="#FFFFCC" align="center">天樂</td>'+
      '<td bgcolor="#CCFFFF" align="center">鬼策</td>'+
      '<td bgcolor="#CCFFFF" align="center">玄陽</td>'+
      '<td bgcolor="#FFFFCC" align="center">震靈</td>'+
      '<td bgcolor="#FFFFCC" align="center">煉星</td>'+
      
    '</tr>'+
  '</tbody>'+
'</table>';


/**
 * skill emu link
 **/

var JobAllLink='<table border="1" width="850">'+
  '<tbody>'+
    '<tr>'+
      '<td align="center" width="60">職業</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">武者</td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center">道法</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">射手</td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center">力士</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">陰陽</td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center">刺客</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">守衛</td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center">靈術</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">獵人</td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center">玄術</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">守護</td>'+
    '</tr>'+
//    '<tr>'+
//      '<td align="center">二轉</td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_5599.html">武尊</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_4496.html">塔皇</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_2816.html">天道</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_6745.html">靈仙</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_7487.html">雲狩</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_6571.html">龍犽</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_4261.html">霸星</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_1150.html">狂衛</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_8878.html">神巫</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_2808.html">御靈</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post.html">疾風</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_20.html">絕影</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/blog-post.html">獵魂</a></td>'+
//      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/blog-post_10.html">森守</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/blog-post_17.html">舞月</a></td>'+
//      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/blog-post_9970.html">玄祭</a></td>'+
//    '</tr>'+
    '<tr>'+
      '<td align="center">1+2轉</td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_22.html">武尊</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_3040.html">塔皇</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_9648.html">天道</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_22.html">靈仙</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_1047.html">雲狩</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_8320.html">龍犽</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_9990.html">霸星</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_4560.html">狂衛</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_9358.html">神巫</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12_3289.html">御靈</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/blog-post_21.html">疾風</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/11/12.html">絕影</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/12.html">獵魂</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/12_10.html">森守</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/12.html">舞月</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/12_17.html">玄祭</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/05/12.html">鳳狙</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/05/12_23.html">天樂</a></td>'+
      '<td bgcolor="#CCFFFF" align="center">鬼策</td>'+
      '<td bgcolor="#CCFFFF" align="center">玄陽</td>'+
      '<td bgcolor="#FFFFCC" align="center">震靈</td>'+
      '<td bgcolor="#FFFFCC" align="center">煉星</td>'+
      
    '</tr>'+
    
    '<tr>'+
      '<td align="center">1+2+3轉</td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_30.html">霸拳武尊</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_5564.html">不破塔皇</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_1714.html ">雷破天道 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_1366.html">風嵐靈仙 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_31.html">穿心雲狩</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_6387.html">颶風龍犽</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_5875.html">震日霸星 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_2826.html">護天狂衛 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_6269.html">滅焰神巫 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_5700.html">極真御靈 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_8262.html">凌煙疾風 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_702.html">滅魂絕影 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_4260.html">狩魔獵魂 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_1739.html">鬥星森守 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_9313.html">躍日舞月 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_7462.html">幻靈玄祭 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123.html">魅凰鳳狙 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_2496.html">神舞天樂 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/09/123.html">神謀鬼策 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/09/123_17.html">烈陣玄陽 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/11/123.html">破極震靈 </a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/11/123_17.html">葯天煉星 </a></td>'+
    '</tr>'+
    
    '<tr>'+
      '<td align="center">配點</td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60.html">武尊</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_05.html">塔皇</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_12.html">天道</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_13.html">靈仙</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_09.html">雲狩</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_11.html">龍犽</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_14.html%22">霸星</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_16.html">狂衛</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/2-lv60.html">神巫</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/01/2.html">御靈</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/12/2.html">疾風</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2011/12/2_16.html">絕影</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_21.html">獵魂</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_22.html">森守</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_18.html">舞月</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.com/2012/02/2-lv60_19.html">玄祭</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="">鳳狙</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="">天樂</a></td>'+
      '<td bgcolor="#CCFFFF" align="center">鬼策</td>'+
      '<td bgcolor="#CCFFFF" align="center">玄陽</td>'+
      '<td bgcolor="#FFFFCC" align="center">震靈</td>'+
      '<td bgcolor="#FFFFCC" align="center">煉星</td>'+
    '</tr>'+
    
   
    
    
  '</tbody>'+
'</table>';