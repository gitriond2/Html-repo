// JavaScript Document

var mivideo, reproducir, barra, progreso;
var Maximo=430;

function comenzar(){
	mivideo= document.getElementById("mivideo");
	reproducir= document.getElementById("reproducir");
	barra= document.getElementById("barra");
	progreso=document.getElementById("progreso");
	
	reproducir.addEventListener("click",clickeando,false);
	
	barra.addEventListener("click",BarProgress,false);	
	
}

function clickeando(){
	if((mivideo.paused==false) && (mivideo.ended==false)){
		mivideo.pause();
		reproducir.innerHTML="play";			//cambia la letra del boton
	}
	else{
		mivideo.play();
		reproducir.innerHTML="pause";
		bucle=setInterval(estado,30);						//hace llamados en menos milisegundos
	}
}
function estado(){
	if(mivideo.ended==false){
		// hace igual que VAL()	 parsetint
		var total=parseInt(mivideo.currentTime*Maximo/mivideo.duration);  		
		progreso.style.width=total+"px";
	}
}
function BarProgress(posicion){
		if((mivideo.paused==false) && (mivideo.ended==false)){
			var ratonX=posicion.pageX-barra.offsetLeft;
			var nuevoTiempo= ratonX*mivideo.duration/Maximo;
			mivideo.currentTime=nuevoTiempo;
			progreso.style.width=ratonX+"px";
		}
		else
		{}
}


window.addEventListener("load",comenzar,false);