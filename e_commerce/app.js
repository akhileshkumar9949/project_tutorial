var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){

	if(MenuItems.style.maxHeight == "0px"){

		MenuItems.style.maxHeight = "200px";

	}
	else{

		MenuItems.style.maxHeight = "0px"
	}
}




// js for product gallery


var ProductImg = document.getElementById("ProductImg");

var SmallImg = document.getElementsByClassName("small-img");

// SmallImg[1].addEventListener("click",function(){

// 	ProductImg.src = SmallImg[1].src;

// })
// SmallImg[2].addEventListener("click",function(){

// 	ProductImg.src = SmallImg[2].src;

// })
// SmallImg[3].addEventListener("click",function(){

// 	ProductImg.src = SmallImg[3].src;

// })
// SmallImg[4].addEventListener("click",function(){

// 	ProductImg.src = SmallImg[4].src;

// })
// SmallImg[0].onclick = function(){

// 	ProductImg.src = SmallImg[0].src;
// }
// SmallImg[1].onclick = function(){

// 	ProductImg.src = SmallImg[1].src;
// }
// SmallImg[2].onclick = function(){

// 	ProductImg.src = SmallImg[2].src;
// }
// SmallImg[3].onclick = function(){

// 	ProductImg.src = SmallImg[3].src;
// }



// js for toggel Form

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
var login = document.getElementById("login")
var register = document.getElementById("register");

register.addEventListener('click',function(){


RegForm.style.transform = "translateX(0px)";
LoginForm.style.transform = "translateX(0px)";
Indicator.style.transform = "translateX(0px)";


});

login.addEventListener('click',function(){


RegForm.style.transform = "translateX(300px)";
LoginForm.style.transform = "translateX(300px)";
Indicator.style.transform = "translateX(0px)";


});
// function register() {

// 	RegForm.style.transform = "translateX(0px)";
// 	LoginForm.style.transform = "translateX(0px)"
// }

// function login() {

// 	RegForm.style.transform = "translateX(300px)";
// 	LoginForm.style.transform = "translateX(300px)"
// }

