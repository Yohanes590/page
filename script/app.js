function openMenu(menu_bar,inner_bar) {
   menu_bar =  document.getElementById("menu_bar").style.width;
   if(menu_bar == "0%"){
    document.getElementById("menu_bar").style.width="100%";
    document.getElementById("inner").style.width="270px";
   }else{
    document.getElementById("menu_bar").style.width="0%";
    document.getElementById("inner").style.width="0px";
   }
    
}


window.addEventListener('scroll',(y)=>{

	y = scrollY;

if(y> 100){
	document.getElementById("nav_bar").style.opacity="0";

}

	if(y > 642){
		document.getElementById("nav_bar").style.position="fixed";
	document.getElementById("nav_bar").style.opacity="1";

	}else{
		if(y == 0){
		document.getElementById("nav_bar").style.position="relative";
		document.getElementById("nav_bar").style.opacity="1";
		}
	}
})



window.addEventListener('load',()=>{
	setTimeout(off,4000)
})

function off(){
	document.getElementById("ring").style.display="none";
	document.getElementById("body").style.opacity="1";

}