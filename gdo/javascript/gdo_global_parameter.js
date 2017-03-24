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
// v11,2012/12/22, add javascript url
// v12,2013/5/15, fix global parameter name (add g_),add sea shaman
// v13,2013/6/7, add goldset link; job name mapping variable: js1stJobName etc.
// v14,2013,6/15, add job weapon mapping
// v15, 2013, 7/19 add job sea officer
// v16,2013/9/13, add job dragon kinght
// v17, 2013/12/20, add job wing, change maxLv from 75 to 80
// v18, 2014/02/21, add job oracle
//				2014/02/26, add wing build 
// v19, 2014/03/03, add goldset for job oracle
// v20, 2014/05/16, add new job flower; change maxLv from 80 to 85
// v21, 2014/05/17, modify g_PointLimit_2nd from 15 to 17; modify g_PointLimit_3rd from 15 to 18;
//								http://gd.x-legend.com.tw/01news/news_01_in.php?mtype=1&newsid=1350
// v22, 2014/09/04, add job forestfighter 森鬥士, 2nd forestmount 百嶽, forestbracing 森羅
//      2014/09/10, 加入森鬥士金裝
//      2014/10/29, 加入瓏月配點連結
// V23, 2014/12/19, 更改 maxLv 從85到100; 等級點數一轉上限 g_PointLimit_1st 從61到76

/* pop up 
 * using in gdo_global_lib.js
 */
var popOffsetX=-260; // popup offset x for blogger
popOffsetX=-50;
popOffsetX=10;

var popOffsetY=-440; // popup offset y for blogger
popOffsetY=-15;
popOffsetY=-10;


/* lv for list weapon 
 * using in gdo_craft.js
 */
var minLv=10; /* set min lv to display */
// total point lv60=69+2 (51-60 got 2 points), lv75 = 84+2, lv80 = 89+2
//var maxLv=70; /* also used in gdo_skill */
//var maxLv=75; /* 20130502 game update*/
//var maxLv=80 // 2013/12/23
//var maxLv=85 // 2014/05/16
var maxLv=100 // 2014/12/19


/**
 * 1st job
 **/
//var g_PointLimit_1st=61;
var g_PointLimit_1st=76; // 2014/12/19

/**
 * 2nd job
 **/
//var PointLimit_2nd=10;
//var g_PointLimit_2nd=15; /* 20130502 game update */
var g_PointLimit_2nd=17; /* 20140517 game update */


/**
 * 3rd job
 **/
//var PointLimit_3rd=10;
//var g_PointLimit_3rd=15; /* 20130502 game update */
var g_PointLimit_3rd=18; /* 20140517 game update */


/**
 * javascript url
 **/
 
 var jsGlobalParameter="http://file.kouwua.net/gdo/javascript/gdo_global_parameter.js";
 var jsGlobalLib="http://file.kouwua.net/gdo/javascript/gdo_global_lib.js";
 
 var jsPet="http://file.kouwua.net/gdo/javascript/gdo_pet.js";
 var jsPetEvolution="http://file.kouwua.net/gdo/javascript/gdo_pet_evolution.js"
 var jsPetValue="http://file.kouwua.net/gdo/javascript/gdo_pet_value.js";
 
 var jsRelatedPost="http://file.kouwua.net/gdo/javascript/gdo_relatedpost.js";
 
 
 var jsSkill="http://file.kouwua.net/gdo/javascript/gdo_skill.js"
 
 var jsProtector="http://file.kouwua.net/gdo/javascript/gdo_skill_protector.js" 
 var jsSkillyiyang="http://file.kouwua.net/gdo/javascript/gdo_skill_yiyang.js";
 var jsSkillxuan="http://file.kouwua.net/gdo/javascript/gdo_skill_xuan.js";
 var jsSkillsoul="http://file.kouwua.net/gdo/javascript/gdo_skill_soul.js";
 var jsSkillnature="http://file.kouwua.net/gdo/javascript/gdo_skill_nature.js";
 var jsSkillhunter="http://file.kouwua.net/gdo/javascript/gdo_skill_hunter.js";
 var jsSkillguard="http://file.kouwua.net/gdo/javascript/gdo_skill_guard.js";
 var jsSkillfighter="http://file.kouwua.net/gdo/javascript/gdo_skill_fighter.js";
 var jsSkillbarbarian="http://file.kouwua.net/gdo/javascript/gdo_skill_barbarian.js";
 var jsSkillassassin="http://file.kouwua.net/gdo/javascript/gdo_skill_assassin.js";
 var jsSkillarcher="http://file.kouwua.net/gdo/javascript/gdo_skill_archer.js";
 var jsSkillseashaman="http://file.kouwua.net/gdo/javascript/gdo_skill_seashaman.js";
 var jsSkillofficer="http://file.kouwua.net/gdo/javascript/gdo_skill_officer.js";
 var jsSkilldragonknight="http://file.kouwua.net/gdo/javascript/gdo_skill_dragonknight.js";
 var jsSkillwing="http://file.kouwua.net/gdo/javascript/gdo_skill_wing.js";
 var jsSkilloracle="http://file.kouwua.net/gdo/javascript/gdo_skill_oracle.js";
 var jsSkillflower="http://file.kouwua.net/gdo/javascript/gdo_skill_flower.js";
 var jsSkillforestfighter="http://file.kouwua.net/gdo/javascript/gdo_skill_forestfigther.js";
 
 
var jsJob = new Object();
 jsJob['protector']="http://file.kouwua.net/gdo/javascript/gdo_skill_protector.js" 
 jsJob['yiyang']="http://file.kouwua.net/gdo/javascript/gdo_skill_yiyang.js";
 jsJob['xuan']="http://file.kouwua.net/gdo/javascript/gdo_skill_xuan.js";
 jsJob['soul']="http://file.kouwua.net/gdo/javascript/gdo_skill_soul.js";
 jsJob['nature']="http://file.kouwua.net/gdo/javascript/gdo_skill_nature.js";
 jsJob['hunter']="http://file.kouwua.net/gdo/javascript/gdo_skill_hunter.js";
 jsJob['guard']="http://file.kouwua.net/gdo/javascript/gdo_skill_guard.js";
 jsJob['fighter']="http://file.kouwua.net/gdo/javascript/gdo_skill_fighter.js";
 jsJob['barbarian']="http://file.kouwua.net/gdo/javascript/gdo_skill_barbarian.js";
 jsJob['assassin']="http://file.kouwua.net/gdo/javascript/gdo_skill_assassin.js";
 jsJob['archer']="http://file.kouwua.net/gdo/javascript/gdo_skill_archer.js";
 
 jsJob['butterfly']="http://file.kouwua.net/gdo/javascript/gdo_skill_butterfly.js";
 jsJob['seashaman']=jsSkillseashaman;
 jsJob['officer']=jsSkillofficer;
 jsJob['dragonknight']=jsSkilldragonknight;
 
 jsJob['wing']=jsSkillwing;
 
 jsJob['oracle']=jsSkilloracle;
 jsJob['flower']=jsSkillflower;
 jsJob['forestfighter']=jsSkillforestfighter;
 
 
 

var jsLink=new Object();
jsLink['GoldSet']="http://gdomurmur.kouwua.net/2013/06/blog-post.html";
jsLink['PurpleWeapon']="http://gdomurmur.kouwua.net/2013/06/blog-post_15.html";



var jsWeaponType=new Array();
jsWeaponType[0]="拳套";
jsWeaponType[1]="匕首";
jsWeaponType[2]="單手劍";
jsWeaponType[3]="單手杖";
jsWeaponType[4]="雙手杖";
jsWeaponType[5]="弓";
jsWeaponType[6]="弩";
jsWeaponType[7]="太刀";
jsWeaponType[8]="大鎚";
jsWeaponType[9]="長柄武器";


var js1stJobName=new Array();
js1stJobName[0]="武者";
js1stJobName[1]="道法";
js1stJobName[2]="射手";
js1stJobName[3]="力士";
js1stJobName[4]="陰陽";
js1stJobName[5]="刺客";
js1stJobName[6]="守衛";
js1stJobName[7]="靈術";
js1stJobName[8]="獵人";
js1stJobName[9]="玄術";
js1stJobName[10]="守護";
js1stJobName[11]="魔使";
js1stJobName[12]="咒術";
js1stJobName[13]="海鱗";
js1stJobName[14]="龍騎";
js1stJobName[15]="羽翎";
js1stJobName[16]="神諭";
js1stJobName[17]="幻術";
js1stJobName[18]="森鬥";



var jsJobWeapon=new Object();
jsJobWeapon['武者']=[jsWeaponType[0],jsWeaponType[2],jsWeaponType[7]];
jsJobWeapon['道法']=[jsWeaponType[3],jsWeaponType[4]];
jsJobWeapon['射手']=[jsWeaponType[5],jsWeaponType[6]];
jsJobWeapon['力士']=[jsWeaponType[8],jsWeaponType[9]];
jsJobWeapon['陰陽']=[jsWeaponType[3],jsWeaponType[4]];
jsJobWeapon['刺客']=[jsWeaponType[1],jsWeaponType[2],jsWeaponType[7]];
jsJobWeapon['守衛']=[jsWeaponType[0],jsWeaponType[9]];
jsJobWeapon['靈術']=[jsWeaponType[3],jsWeaponType[5]];
jsJobWeapon['獵人']=[jsWeaponType[5],jsWeaponType[6]];
jsJobWeapon['玄術']=[jsWeaponType[5],jsWeaponType[4]];
jsJobWeapon['守護']=[jsWeaponType[8],jsWeaponType[2]];
jsJobWeapon['魔使']=[jsWeaponType[0],jsWeaponType[1],jsWeaponType[7]];
jsJobWeapon['咒術']=[jsWeaponType[1],jsWeaponType[4]];
jsJobWeapon['海鱗']=[jsWeaponType[3],jsWeaponType[6]];
jsJobWeapon['龍騎']=[jsWeaponType[0],jsWeaponType[2],jsWeaponType[9]];
jsJobWeapon['羽翎']=[jsWeaponType[8],jsWeaponType[2],jsWeaponType[7]];
jsJobWeapon['神諭']=[jsWeaponType[4],jsWeaponType[5]];
jsJobWeapon['幻術']=[jsWeaponType[1],jsWeaponType[5]];
jsJobWeapon['森鬥']=[jsWeaponType[2],jsWeaponType[9]];

var js1st2ndJobName=new Array();

js1st2ndJobName[0]="武者-武尊";
js1st2ndJobName[1]="武者-塔皇";
js1st2ndJobName[2]="道法師-靈仙";
js1st2ndJobName[3]="道法師-天道";
js1st2ndJobName[4]="射手-雲狩";
js1st2ndJobName[5]="射手-龍犽";
js1st2ndJobName[6]="力士-霸星";
js1st2ndJobName[7]="力士-狂衛";
js1st2ndJobName[8]="陰陽師-神巫";
js1st2ndJobName[9]="陰陽師-御靈";
js1st2ndJobName[10]="刺客-疾風";
js1st2ndJobName[11]="刺客-絕影";
js1st2ndJobName[12]="守衛-獵魂";
js1st2ndJobName[13]="守衛-森守";
js1st2ndJobName[14]="靈術士-舞月";
js1st2ndJobName[15]="靈術士-玄祭";
js1st2ndJobName[16]="獵人-鳳狙";
js1st2ndJobName[17]="獵人-天樂";
js1st2ndJobName[18]="玄術師-鬼策";
js1st2ndJobName[19]="玄術師-玄陽";
js1st2ndJobName[20]="守護者-震靈";
js1st2ndJobName[21]="守護者-煉星";
js1st2ndJobName[22]="魔戰使-神泉";
js1st2ndJobName[23]="魔戰使-戰魂";
js1st2ndJobName[24]="咒術士-夜瀧";
js1st2ndJobName[25]="咒術士-魅噬";
js1st2ndJobName[26]="海鱗尉-神略";
js1st2ndJobName[27]="海鱗尉-獄魂";
js1st2ndJobName[28]="龍騎-止水";
js1st2ndJobName[29]="龍騎-滅牙";
js1st2ndJobName[30]="羽翎-嵐鷹";
js1st2ndJobName[31]="羽翎-驚羽";
js1st2ndJobName[32]="神諭-朧月";
js1st2ndJobName[33]="神諭-沐星";
js1st2ndJobName[34]="幻術-幽蜂";
js1st2ndJobName[35]="幻術-魅蝶";
js1st2ndJobName[36]="森鬥-百嶽";
js1st2ndJobName[37]="森鬥-森羅";

var js2ndJobName=new Array();

js2ndJobName[0]="武尊";
js2ndJobName[1]="塔皇";
js2ndJobName[2]="靈仙";
js2ndJobName[3]="天道";
js2ndJobName[4]="雲狩";
js2ndJobName[5]="龍犽";
js2ndJobName[6]="霸星";
js2ndJobName[7]="狂衛";
js2ndJobName[8]="神巫";
js2ndJobName[9]="御靈";
js2ndJobName[10]="疾風";
js2ndJobName[11]="絕影";
js2ndJobName[12]="獵魂";
js2ndJobName[13]="森守";
js2ndJobName[14]="舞月";
js2ndJobName[15]="玄祭";
js2ndJobName[16]="鳳狙";
js2ndJobName[17]="天樂";
js2ndJobName[18]="鬼策";
js2ndJobName[19]="玄陽";
js2ndJobName[20]="震靈";
js2ndJobName[21]="煉星";
js2ndJobName[22]="神泉";
js2ndJobName[23]="戰魂";
js2ndJobName[24]="夜瀧";
js2ndJobName[25]="魅噬";
js2ndJobName[26]="神略";
js2ndJobName[27]="獄魂";
js2ndJobName[28]="止水";
js2ndJobName[29]="滅牙";
js2ndJobName[30]="嵐鷹";
js2ndJobName[31]="驚羽";
js2ndJobName[32]="朧月";
js2ndJobName[33]="沐星";
js2ndJobName[34]="幻術";
js2ndJobName[35]="百嶽";
js2ndJobName[36]="森羅";

var PetLink=
''+

'<table width="950" border="0" cellspacing="0" cellpadding="0"><tr><td>'+

							 '<table width="450"  style="border:1px solid #DDD;" cellspacing="0" cellpadding="0">'+                
               ' <tr>'+
                  '<td width="80" align="center">寵物查詢</td>'+
                  '<td  align="center" bgcolor="#FFECEC"><a href="http://gdomurmur.kouwua.net/2011/06/blog-post.html">挑選器</a></td>'+
                  '<td  align="center" bgcolor="#FFECEC"><a href="http://gdomurmur.kouwua.net/2011/07/blog-post_14.html">一覽表</a></td>'+
                  '<td  align="center" bgcolor="#FFECEC"><a href="http://gdomurmur.kouwua.net/2013/01/blog-post.html">特殊技能</a></td>'+
                '</tr>'+
               '</table>'+
               
               '</td>'+
               '<td width="50"></td>'+
               '<td>'+
               
               '<table width="450" style="border:1px solid #DDD;" cellspacing="0" cellpadding="0">'+    
               // '<tr>'+
                  '<td  width="80" align="center">寵物進化</td>'+
                  '<td   align="center" bgcolor="#D5FFE2"><a href="http://gdomurmur.kouwua.net/2011/09/blog-post.html">進化挑選器</a></td>'+
                  '<td  align="center" bgcolor="#D5FFE2"><a href="http://gdomurmur.kouwua.net/2011/09/blog-post_15.html">常用組合表</a></td>'+
                  //'<td width="100" align="center" bgcolor="#D5FFE2"></td>'+
                '</tr>'+
             '</table>'+
             
             '</td></tr></table>'+
'';
/**
 * skill emu link
 **/

var JobAllLink=
   PetLink+'<br>'+
//'<table width="1050" style="border:1px solid #DDD;"  cellspacing="1" cellpadding="0">'+
'<table width="1125" style="border:1px solid #DDD;"  cellspacing="1" cellpadding="0">'+
  '<tbody>'+
    '<tr>'+
      '<td align="center">職業</td>'+
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
      '<td colspan="2" bgcolor="#CCFFFF" align="center">魔使</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">咒術</td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center">海鱗</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">龍騎</td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center">羽翎</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center">神諭</td>'+
      '<td colspan="2" bgcolor="#CCFFFF" align="center">幻術</td>'+
      '<td colspan="2" bgcolor="#FFFFCC" align="center"><font color="red">森鬥</font></td>'+
  	//	'<td align="center" width="40">職業</td>'+
    '</tr>'+

    
    '<tr>'+
      '<td align="center">模擬</td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_30.html">武尊</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_5564.html">塔皇</a></td>'+
       '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_1366.html">靈仙 </a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_1714.html ">天道 </a></td>'+
     
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_31.html">雲狩</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_6387.html">龍犽</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_5875.html">霸星</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_2826.html">狂衛</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_6269.html">神巫</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_5700.html">御靈</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_8262.html">疾風</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_702.html">絕影</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_4260.html">獵魂</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_1739.html">森守</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_9313.html">舞月</a></td>'+
 	    '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_7462.html">玄祭</a></td>'+
 	    
        '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123.html">鳳狙</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/07/123_2496.html">天樂</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/09/123.html">鬼策</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.blogspot.tw/2012/09/123_17.html">玄陽</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/11/123.html">震靈</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.blogspot.tw/2012/11/123_17.html">煉星</a></td>'+
       '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/01/123.html">神泉</a></td>'+
       '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/01/123_17.html">戰魂</a></td>'+
       '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/05/123.html">夜瀧</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/05/123_15.html">魅噬</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/07/123.html">神略</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/07/123_19.html">獄魂</a></td>'+
     '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/09/123.html">止水</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/09/123_13.html">滅牙</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/12/123.html">嵐鷹</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/12/123_25.html">驚羽</a></td>'+
      
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2014/02/123.html">朧月</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2014/02/123_21.html">沐星</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2014/05/123.html">幽蜂</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2014/05/123_16.html">魅蝶</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2014/09/123.html">百嶽</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2014/09/123_5.html">森羅</a></td>'+
     
       //'<td align="center">模擬</td>'+
    '</tr>'+
    
    '<tr>'+
      '<td align="center">配點</td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60.html">武尊</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_05.html">塔皇</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_13.html">靈仙</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_12.html">天道</a></td>'+
      
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_09.html">雲狩</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_11.html">龍犽</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_14.html">霸星</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_16.html">狂衛</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2012/01/2-lv60.html">神巫</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2012/01/2.html">御靈</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2011/12/2.html">疾風</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2011/12/2_16.html">絕影</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_21.html">獵魂</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_22.html">森守</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_18.html">舞月</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2012/02/2-lv60_19.html">玄祭</a></td>'+
      
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/02/blog-post_20.html">鳳狙</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/02/blog-post.html">天樂</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/02/blog-post_6258.html">鬼策</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/03/blog-post.html">玄陽</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/07/blog-post_16.html">震靈</a></td>'+      
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/02/blog-post_6311.html">煉星</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/02/blog-post_7849.html">神泉</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/02/blog-post_7072.html">戰魂</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/08/blog-post.html">夜瀧</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/09/blog-post.html">魅噬</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/07/blog-post_22.html">神略</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2013/07/blog-post_5533.html">獄魂</a></td>'+
      '<td bgcolor="#FFFFCC" align="center">止水</td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2013/09/blog-post_17.html">滅牙</a></td>'+
      '<td bgcolor="#CCFFFF" align="center">嵐鷹</td>'+      
      '<td bgcolor="#CCFFFF" align="center"><a href="http://gdomurmur.kouwua.net/2014/02/blog-post.html">驚羽</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2014/10/blog-post.html">朧月</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="http://gdomurmur.kouwua.net/2014/03/blog-post.html">沐星</a></td>'+
      '<td bgcolor="#CCFFFF" align="center">幽蜂</td>'+
      '<td bgcolor="#CCFFFF" align="center">魅蝶</td>'+
      '<td bgcolor="#FFFFCC" align="center">百嶽</td>'+
      '<td bgcolor="#FFFFCC" align="center">森羅</td>'+
      
      //'<td align="center">配點</td>'+
    '</tr>'+
    
  
    
    '<tr>'+
       '<td align="center" >套裝</td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[0]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[0]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[0]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[1]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[1]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[2]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[1]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[3]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[2]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[4]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[2]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[5]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[3]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[6]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[3]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[7]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[4]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[8]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[4]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[9]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[5]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[10]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[5]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[11]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[6]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[12]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[6]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[13]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[7]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[14]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[7]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[15]+'">金</a></td>'+
      
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[8]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[16]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[8]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[17]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[9]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[18]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[9]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[19]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[10]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[20]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[10]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[21]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[11]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[22]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[11]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[23]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[12]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[24]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[12]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[25]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[13]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[26]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[13]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[27]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[14]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[28]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[14]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[29]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[15]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[30]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[15]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[31]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[16]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[32]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[16]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[33]+'">金</a></td>'+
      //'<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[17]+'">紫</a>|金</td>'+
      //'<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[17]+'">紫</a>|金</td>'+
			'<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[17]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[34]+'">金</a></td>'+
      '<td bgcolor="#CCFFFF" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[17]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[35]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[18]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[36]+'">金</a></td>'+
      '<td bgcolor="#FFFFCC" align="center"><a href="'+jsLink['PurpleWeapon']+'?job='+js1stJobName[18]+'">紫</a>|<a href="'+jsLink['GoldSet']+'?job='+js1st2ndJobName[37]+'">金</a></td>'+
     
      
      // '<td align="center" >套裝</td>'+
    '</tr>'+
    
    '</tbody>'+
'</table>';

    

/**
 * skill emu link
 **/
 var SkillEmuLink='';
