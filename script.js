let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let result=document.querySelector('.result');
let close=document.getElementById('cross');
let number = Math.ceil(Math.random() * 1000);;
console.log(number)

close.addEventListener('click',()=>{
	closeResult();
})


btn.addEventListener('click',()=>{
	rotat();
	
	setTimeout(() => {
		
		outResult()
	}, 5000);
});

function rotat(){
	number += Math.ceil(Math.random() * 1000);
	container.style.transform = "rotate(" + number+ "deg)";
	// console.log('before add ', number)
	console.log(number);
	
	

	console.log('reminder',number%360)
	
	
	
}

function closeResult(){
	result.style.display="none";
}




function outResult(){
	result.style.display="flex";

	if((number%360) >= 22 && (number%360) < 68 ){
		let imgout=document.querySelector('.img img');
		imgout.setAttribute('src','./gifts/uthak.png');
		document.querySelector('#msgout').innerText="10 situps ";
		console.log('22-68')
	}
	else if((number%360) >= 68 && (number%360) < 113){
		let imgout=document.querySelector('.img img');
		imgout.setAttribute('src','./gifts/swimming pose.png');
		document.querySelector('#msgout').innerText="2 min swimming pose";
		console.log('69-113')
	}
	else if((number%360) >= 113 && (number%360) < 158 ){
		let imgout=document.querySelector('.img img');
		imgout.setAttribute('src','./gifts/slap.png');
		document.querySelector('#msgout').innerText="1-1 slap each side";
		console.log('114-158')
	}
	else if((number%360) >= 158 && (number%360) < 203){
		let imgout=document.querySelector('.img img');
		imgout.setAttribute('src','./gifts/pushups.png');
		document.querySelector('#msgout').innerText="8 Pushups";
		console.log('159-203')
	}
	else if((number%360) >= 203 && (number%360) < 248){
		let imgout=document.querySelector('.img img');
		imgout.setAttribute('src','./gifts/oneleg.png');
		document.querySelector('#msgout').innerText="stand on oneleg for 2min";
		console.log('204-248')
	}
	else if((number%360) >= 248 && (number%360) < 293){
		let imgout=document.querySelector('.img img');
		imgout.setAttribute('src','./gifts/murga.png');
		document.querySelector('#msgout').innerText="2 min in Murga Pose";
		console.log('249-293')
	}
	else if((number%360) >= 293 && (number%360) < 338){
		let imgout=document.querySelector('.img img');
		imgout.setAttribute('src','./gifts/ladder.png');
		document.querySelector('#msgout').innerText="10 round on ladder";
		console.log('294-338')
	}
	else{
		let imgout=document.querySelector('.img img');
		imgout.setAttribute('src','./gifts/hands up.png');
		document.querySelector('#msgout').innerText="2min handsup";
		console.log('else')
	}

	
	
}