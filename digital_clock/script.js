let hrs = document.querySelector('#hrs');
let mins= document.querySelector('#min');
let sec = document.querySelector('#sec');


// let currentTime = new Date();

// console.log(currentTime.getHours());


// hrs.innerHTML = currentTime.getHours();

// mins.innerHTML = currentTime.getMinutes();

// sec.innerHTML = currentTime.getSeconds();


setInterval(()=>{
	
	let currentTime = new Date();

	// console.log((currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds());

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();

mins.innerHTML = (currentTime.getMinutes()<10?"":"") + currentTime.getMinutes();

sec.innerHTML = (currentTime.getSeconds() <10 ? "0":"") + currentTime.getSeconds();

},1000)

