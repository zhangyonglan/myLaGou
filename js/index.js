/**
 * Created by 11929_000 on 2016/4/8.
 */
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


/*----------µn?---------*/
/*µn?®Ø*/
var logIn = document.getElementById("log_in");
var bg = document.getElementById("bg");
var box = document.getElementById("box");

logIn.onclick = function () {
    alert(1);
    bg.style.display = "block";
    box.style.display = "block";
}
var close=document.getElementById("close");
close.onclick=function(){
    box.style.display="none";
}
/*µn?®ØEnd*/


/*------------------------------*/
$(".menu_main").on("mouseover",function(){
    var top=$(this).next().css("top");

   $(this).next().css({"display":"block","top":top});

});

$(".menu_main").on("mouseout",function(){
    $(this).next().css("display","none");
})