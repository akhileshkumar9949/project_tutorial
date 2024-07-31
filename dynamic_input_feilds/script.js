 const addBtn = document.querySelector(".add");

 const input = document.querySelector(".inp-group");


function removeInput(){

    this.parentElement.remove();

}
 function addInput(){

 	const name = document.createElement("input");

 	name.type = "text";

 	name.placeholder = "enter name";


 	const password = document.createElement("input");

 	password.type = "password";

 	password.placeholder = "enter password";


     const email = document.createElement("input");

    email.type = "email";

    email.placeholder="enter email";



 	const btn = document.createElement("a");

 	btn.className = "delete";

 	btn.innerHTML = "&times";




    btn.addEventListener("click", removeInput);


    const flex = document.createElement("div");

    flex.className="flex";


    input.appendChild(flex);

    flex.appendChild(name);

    flex.appendChild(email);

    flex.appendChild(password);
    
    flex.appendChild(btn);

 }
 addBtn.addEventListener("click",addInput);