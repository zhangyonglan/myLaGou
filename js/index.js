

var oThumbs=document.getElementsByClassName("thumbs")[0];
var oLis=oThumbs.getElementsByTagName("li");
var oImgRight=document.getElementsByClassName("imgs1_right")[0];
var oCurrent=oImgRight.getElementsByTagName("em")[0];

var oImgLeft=document.getElementsByClassName("imgs1_left")[0];
var oImgs=oImgLeft.getElementsByTagName("img");


for(var i=0;i<oLis.length;i++){
    oLis[i].index=i;
    oLis[i].onmouseover=function(){
        oCurrent.style.top=(this.index*55)+"px";
        oImgLeft.style.top=(-this.index*160)+"px";
    }
}



/*登?框*/
var logIn = document.getElementById("log_in");
var bg = document.getElementById("bg");
var box = document.getElementById("box");

logIn.onclick = function () {

    bg.style.display = "block";
    box.style.display = "block";

}

var close=document.getElementById("close");
close.onclick=function(){
    box.style.display="none";
    bg.style.display="none";
}

/*登?框End*/


/*------------------------------*/
$(".menu_main").on("mouseover",function(){
    $(this).next().css("display","block");
});
$(".menu_main").on("mouseout",function(){
    $(this).next().css("display","none");
});
/*--------左??航mouseover----------*/
/*--------回到?部start-------------------*/
var oBack=document.getElementById("back");

var winH=document.documentElement.clientHeight||document.body.clientHeight;

window.onscroll= computedStyle;
function computedStyle(){
    var curT=document.documentElement.scrollTop||document.body.scrollTop;

    if(curT>0){
        oBack.style.display="block";
    }else{
        oBack.style.display="none";
    }
}

oBack.onclick= function(){
    backToTop(this,1000);//???的一般不能直接?值?事件，因???函??行?果?值?事件，并且this不是?定事件的元素

};
function backToTop(ele,duration){
    ele.style.display="none";
    window.onscroll=null;
    var curT=document.documentElement.scrollTop||document.body.scrollTop;
    var interval=10;
    var step=curT/duration*interval;
    console.log(curT+"  "+duration);
    var timer=window.setInterval(function(){
        document.documentElement.scrollTop-=step;
        document.body.scrollTop-=step;

        if((document.documentElement.scrollTop||document.body.scrollTop)<=0){
            window.clearInterval(timer);
            window.onscroll=computedStyle;
        }
    },interval);

}

/*--------回到?部end---------------------*/
/*
var thumbs=document.getElementsByClassName("thumbs")[0];
var oImgs2=thumbs.getElementsByTagName("img");
var oEm=thumbs.getElementsByTagName("em"[0]);
for(var j=0;j<oImgs2.length;j++){
    oImgs2[j].index=j;
    oImgs2[j].onmouseover=function(){
        var _top=this.index*55;
        $(oEm).animate({top:_top+"px"},3000);
    }
}*/
