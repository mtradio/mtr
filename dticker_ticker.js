var text = new Array();var header = new Array();var linka = new Array();var targa = new Array();var divtext = new Array();var divh = new Array();var objst = new Array();var objs = new Array();var objsh = new Array();
text[0] = "網路電台MR再度復出 歡迎收聽 MikotoTimeRadio";
text[1] = "除了網路電台還有實況電台喔";
text[2] = "實況電台 T.M.G.M 時命遊戲音樂台";
text[3] = "網路電台提升至192K唷";
text[4] = "點歌系統可以多加利用 找歌訣竅利用歌手.專輯來找";


header[0] = "";
header[1] = "";
header[2] = "";
header[3] = "";
header[4] = "";


linka[0] = "";
linka[1] = "";
linka[2] = "";
linka[3] = "";
linka[4] = "";



targa[0] = "";
targa[1] = "";
targa[2] = "";
targa[3] = "";
targa[4] = "";




 uagent = window.navigator.userAgent.toLowerCase();IEB=(uagent.indexOf('msie') != -1)?true:false;var scompat = document.compatMode;var kalan=0;var vcurr=0;var vnext=0;var str2='';var mc=0;mc=text.length;stepc=parseInt(20*(3000/1000));dif=0.00;op=1.00;dif=(1.00/stepc);var RealTickerWidth=0;var RealTickerHeight=0;var CalcIcWidth=0;var CalcIcHeight=0;var nstheight=0,nst2width=0;nstheight=22-1-1;nst2width=400-1-1;var icwidth=400;var icheight=22;var msgw,msgh;msgw=400-10;if((IEB==true)&&(scompat == "BackCompat" )){    RealTickerWidth=400;    RealTickerHeight=22;}else{    RealTickerWidth=400-2*(1);    RealTickerHeight=22-2*(1);}    CalcIcWidth=400-2*(1);    CalcIcHeight=22-2*(1);    str2='';        str2=str2+'<div style="position:relative;width'+RealTickerWidth+':px;height:'+RealTickerHeight+'px;left:0px;top:0px;overflow:hidden;visibility:visible;'+'border-style:solid; border-width:1px; border-color:#000000;'+'">';        for(i=0;i<mc;i++)    {        divh[i]='<div id="dh'+i+'" style="position:absolute;width:'+10+'px; height:'+CalcIcHeight+'px;visibility:inherit;background:'+'#EEEEEE'+'; COLOR:#E9E9E9;padding-top:'+3+'px;padding-left:'+0+'px;'+'left:0px; top:0; FONT-FAMILY: '+'Verdana'+'; FONT-SIZE: '+10+'pt; font-style: '+'normal'+'; font-weight: '+'bold'+'; TEXT-DECORATION: '+'none'+';margin:0px; overflow:hidden;text-align:'+'center'+';cursor: default;">';        divtext[i]='<div id="d'+i+'" style="position:absolute;width:'+(CalcIcWidth-10-0)+'px;height:'+CalcIcHeight+'px;left:'+10+'px; top:0;visibility:inherit;background:#EEEEEE;COLOR:'+'#060606'+'; '+'padding-top:'+3+'px;padding-left:'+8+'px;'+' FONT-FAMILY: '+'Verdana'+'; FONT-SIZE: '+'10'+'pt; font-style: '+'normal'+'; font-weight: '+'normal'+'; margin:0px; TEXT-DECORATION: '+'none'+'; overflow:hidden;text-align:'+'left'+';cursor: default;" onmouseover="mdivmo('+i+')" onmouseout ="restime('+i+')" onclick="butclick('+i+')">';        str2=str2+'<div id="op'+i+'" style="position:absolute;overflow:hidden;visibility:hidden;left:0px;top:0px;width:'+CalcIcWidth+'px; height:'+CalcIcHeight+'px;border-style:solid;border-width:0px;">';        str2=str2+''+divh[i]+''+header[i]+'</div>'+divtext[i]+''+text[i]+'</div>';        str2=str2+'</div>';    }    str2=str2+'</div>';		function mdivmo(gnum){    if(linka[gnum]!='')    {		objs[gnum].style.color='#000000';		objs[gnum].style.cursor='pointer';		window.status='Unregistered version. Visit:www.scriptocean.com';	}   }function restime(gnum2){	objs[gnum2].style.color='#060606';	window.status='';    }function butclick(gnum3){}function zindx(){	objst[vnext].style.visibility="visible";	objst[vcurr].style.zIndex=2;	objst[vnext].style.zIndex=3;}function Sonraki(){	vcurr=vnext;	vnext=vnext+1;		if(vnext>=mc)	{		vnext=0;	}}function dotrans(){    if(vnext!=vcurr)    {        if(IEB){spageObj.filters[0].apply();}        objs[vnext].style.color='#060606';        objst[vnext].style.visibility='visible';        objst[vcurr].style.visibility='hidden';        if(IEB){spageObj.filters[0].play();}    }    Sonraki();    setTimeout('dotrans()',3000+3000);}function dotransff(){	op=op-dif;		if(op<(0.00)){op=0.00;}		objst[vcurr].style.opacity = op;	objst[vnext].style.opacity = 1.00-op;	if(op>(0.00))	{		setTimeout('dotransff()',50);	}	else	{		objst[vcurr].style.zIndex=2;		objst[vnext].style.zIndex=3;		Sonraki();	    setTimeout('beftrans()',3000);					}}function beftrans(){	op=1.00;	objst[vcurr].style.visibility="visible";	objst[vnext].style.visibility="visible";		objst[vcurr].style.zIndex=3;	objst[vnext].style.zIndex=2;		objst[vcurr].style.opacity = 1.00;		objst[vnext].style.opacity = 1.00;			dotransff();	}function DoScrollUp(){    kalan=kalan-Math.ceil(kalan/(3000/1000));	objst[vcurr].style.top=""+(kalan-CalcIcHeight)+"px";	objst[vnext].style.top=""+kalan+"px";    if(kalan<=0)    {            Sonraki();        kalan=CalcIcHeight;	    objst[vnext].style.top=""+kalan+"px";        zindx();                 timeo=setTimeout('DoScrollUp()',3000);        }    else    {        setTimeout('DoScrollUp()',50);        }}function DoSlide(){	kalan=kalan-Math.ceil(kalan/(3000/1000));	objst[vcurr].style.left=""+(kalan-CalcIcWidth)+"px";	objst[vnext].style.left=""+kalan+"px";		if(kalan<=0)	{    		Sonraki();		kalan=CalcIcWidth;		objst[vnext].style.left=""+kalan+"px";	        		zindx();                  		timeo=setTimeout('DoSlide()',3000);	}	else	{		setTimeout('DoSlide()',50);    	}}function dofirst(){    var i=0;    for(i=0;i<mc;i++)    {        objs[i]=document.getElementById("d"+i);        objs[i].style.left=""+10+"px";        objs[i].style.top="0px";        objsh[i]=document.getElementById("dh"+i);        objsh[i].style.left="0px";        objsh[i].style.top="0px";        objst[i]=document.getElementById("op"+i);        objst[i].style.left="0px";        objst[i].style.top="0px";        objst[i].style.visibility="hidden";    }    objst[0].style.visibility="visible";            if(2==2)    {            kalan=CalcIcWidth;        vnext=0;        Sonraki();        zindx();        objst[vnext].style.left=""+kalan+"px";                setTimeout('DoSlide()',3000);    }    else if(2==4)    {            kalan=CalcIcHeight;        vnext=0;        Sonraki();        zindx();                setTimeout('DoScrollUp()',3000);    }    else if(2==5)    {		if(IEB){setTimeout('dotrans()',3000);}		else{setTimeout('beftrans()',3000);}    }    else    {        setTimeout('dotrans()',3000);    }}function initte(){    spageObj=document.getElementById('spage');        if(!spageObj)    {        setTimeout('initte()',200);    }    spageObj.innerHTML=str2;    vnext=1;    if(vnext>=mc){vnext=0;}    spageObj.style.left="0px";    spageObj.style.top="0px";    setTimeout('dofirst()',100);    }setTimeout('initte()',100);		       