// v1,2011/7/24, create pop up Tip functions
// v2,2011/7/27, fix position for blogger
// v3,2011/8/2, float window add z-index
// v4.2011/8/26, add get url parameter function: getUrlParameter
// v5,2012/5/24, fix tip layer for IE
// v6.2012/12/22, add loadjs() to dynamic load javascript
// v7,2013/6/8, addjust tip position Y: getPositionY()

/* should also include paramter js*/


 
 /**
 * should  implement setTipContent() in paraent js first
 * key may be the key of hash, or index of array
 * need popOffsetX,popOffsetY from global parameter 
 * ref: http://snipplr.com/view/3624/
 */
 if (typeof popOffsetX=== 'undefined'){
		popOffsetX=20;
	}
if (typeof popOffsetY=== 'undefined'){
		popOffsetY=20;
	}	
function popTip(e,popId,key){
var objPop=document.getElementById(popId);
setTipContent(objPop,key);	/* should be implement this first */

objPop.style.visibility="visible";
objPop.style.width= "200px";
objPop.style.border= "1px solid black";
objPop.style.padding= "2px";
objPop.style.backgroundColor= "gray";
objPop.style.color="white";
objPop.style.overflow= "hidden";
objPop.style.position="absolute";
objPop.style.zIndex=1000;	/* make sure this window is top layer */


objPop.style.left=getPositionX(e);
objPop.style.top=getPositionY(e);

}

function hideTip(popid){
var objPop=document.getElementById(popid);
objPop.style.visibility="hidden";

}

function getPositionX(e){
	
	var posX=0;
	
	e=e||event; /* for IE/FF */
	
	if (e.pageX){
		posX= e.pageX;
		
	}
	else{
	//var posX=event.clientX + document.body.scrollLeft-300;
	//var posX=e.clientX +document.documentElement.scrollLeft+popOffsetX; /* for IE/FF */
    //var posX=e.clientX +(document.documentElement.scrollLeft || document.body.scrollLeft)+popOffsetX; /* for IE/FF/Chrome */
	posX=e.clientX +(document.documentElement.scrollLeft || document.body.scrollLeft)-(e.clientLeft||document.documentElement.clientLeft||0); /* for IE/FF/Chrome */
	//posX =e.clientX + document.body.scrollLeft+ document.documentElement.scrollLeft;
	
	}

	var bloggerOffset;
	//bloggerOffset=getBloggerOffsetX();
	bloggerOffset=getBloggerOffset();
	//alert(bloggerOffset.x);
	posX=posX+popOffsetX-bloggerOffset.x;
	
	// adjust if div too close right side bar
	//var rightsidebarObj=document.getElementById("column-right-outer");
	//var rightsidebarObj=document.getElementById("Blog1");
	//alert(posX);
	//alert(rightsidebarObj.offsetLeft);
	//if (rightsidebarObj!=null){
	  //while ((posX+200)>rightsidebarObj.c){
	  if ( (posX+200)> 520 ){
	   
		  posX=posX-200;
	  }
  //}
	
	return posX+"px";
	
}
function getBloggerOffset(){
     var offset= new Object();
	offset.x=0;
	offset.y=0;
	//alert(offset.x);
	var obj=document.getElementById("Blog1");
	//alert(blog1);
	if (obj!=null){
		while( obj != null ) {
		  offset.x+=obj.offsetLeft ;
          offset.y += obj.offsetTop;
          obj = obj.offsetParent;
        }
	
		//offset.x=blog1.offsetLeft 
		//offset.y=blog1.offsetTop 
	}
	
	
	//offset.x=blog1.offsetLeft 
	return offset ;
}
function getPositionY(e){
	
	var posY=0;
	
	e=e||event; /* for IE/FF */
	if (e.pageY){
		posY= e.pageY;
	}
	else{
	//var posY=event.clientY + document.body.scrollTop;
	//var posY=e.clientY +document.documentElement.scrollTop+popOffsetY; /* for IE/FF */
	//var posY=e.clientY+(document.body.scrollTop || document.documentElement.scrollTop ) +popOffsetY ; /* for IE/FF/Chrome */
	posY=e.clientY+(document.body.scrollTop || document.documentElement.scrollTop)-(e.clientTop||document.documentElement.clientTop||0 )  ; /* for IE/FF/Chrome */
	//posY=e.clientY + document.body.scrollTop+ document.documentElement.scrollTop;
	}
	
	var bloggerOffset;
	//bloggerOffset=getBloggerOffsetX();
	bloggerOffset=getBloggerOffset();
	
	posY=posY+popOffsetY-bloggerOffset.y;

/*
if ( (posY)> 550 ){
	   
		  posY=posY-200;
	  }
	*/  
	return posY+"px";
}

function getUrlParameter(para){
  var value=""; /* parameter's value */
  var url = window.location.href;
  var urlParseQ=url.split("?"); /* url string after question mark */  
  //alert("urlParseQ: "+urlParseQ);
  
  var urLAfterQ;

  if (urlParseQ.length < 2){
	  return "";
	}
  else{
	  urlAfterQ=urlParseQ[1];
  }
  //alert("urlAfterQ"+urlAfterQ);
  
  /* urlAfterQ may be A=1&B=2 */
  var urlParameterPair=urlAfterQ.split("&");
  //alert("urlParameterPair"+urlParameterPair);
  
   /* urlParameterPair[0] may be A=1*/
  for (i=0; i<urlParameterPair.length; i++){
    
	  var ParameterPair=urlParameterPair[i].split("=");
	
	  /* ParameterPair[0] may be A,  ParameterPair[1] may be 1*/
    if (ParameterPair[0] == para)
    {
      value = ParameterPair[1];
      break;
    }
  }

  return value;
}

function loadjs(jsurl){

  //var objscript=document.createElement('script')
  //objscript.setAttribute("type","text/javascript")
  //objscript.setAttribute("src", jsurl)
  //alert("load js:"+jsurl);
  document.write("<script src='"+jsurl+"'><\/script>");
 }
 
function loadSkillEmu(job){
	loadjs(jsSkill);
	loadjs(jsJob[job]);

}

function loadPetPick(){
	loadjs(jsPet);
	loadjs(jsPetValue);
}

function loadPetEvolutionPick(){
	loadjs(jsPetEvolution);
	loadjs(jsPetValue);
}