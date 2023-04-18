// JavaScript Document

var miaudio, reproducir, barra, progreso;
var Maximo=430;

function comenzar(){
	miaudio= document.getElementById("miaudio");
	reproducir= document.getElementById("play");
	barra= document.getElementById("barra");
	progreso=document.getElementById("progreso");
	
	reproducir.addEventListener("click",clickeando,false);
	
	barra.addEventListener("click",BarProgress,false);	
	
}

function clickeando(){
	if((miaudio.paused==false) && (miaudio.ended==false)){
		miaudio.pause();
		reproducir.innerHTML="play";			//cambia la letra del boton
	}
	else{
		miaudio.play();
		reproducir.innerHTML="pause";
		bucle=setInterval(estado,30);						//hace llamados en menos milisegundos
	}
}
function estado(){
	if(miaudio.ended==false){
		// hace igual que VAL()	 parsetint
		var total=parseInt(miaudio.currentTime*Maximo/miaudio.duration);  		
		progreso.style.width=total+"px";
	}
}
function BarProgress(posicion){
		if((miaudio.paused==false) && (miaudio.ended==false)){
			var ratonX=posicion.pageX-barra.offsetLeft;
			var nuevoTiempo= ratonX*miaudio.duration/Maximo;
			miaudio.currentTime=nuevoTiempo;
			progreso.style.width=ratonX+"px";
		}
		else
		{}
}


window.addEventListener("load",comenzar,false);