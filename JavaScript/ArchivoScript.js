// JavaScript Document


//alert("abre anticipado pop up");

function ejecuta(){
	/*document.getElementsByTagName("p")[0].onclick=saludo;					elige una etiqueta, tenes que usar FOR para all*/
	/*var z=document.getElementsByClassName("name")[pos].onclick=saludo;		elige una clase y aplica un funcion For para all*/
	//document.getElementById("importante").onclick=saludo;						//elige un ID
	
	/*document.querySelector(".importante").onclick=saludo;					sirve para div llamados*/
	/*document.querySelector("#principal p:last-child").onclick=saludo;		//enfoca al el ultimo hijo*/
	/*var elementos= document.querySelectorAll("#principal p")[0].onclick= saludo;*/		//hace referencia al Div e hijos
	var elementos= document.querySelectorAll("#principal p, span");			//podes agregar mas de un selector
	for(var i=0;i<elementos.length;i++){						//length va hasta el final de todos los query traidos
		
		elementos[i].onclick= saludo;
	}
}



function saludo(){
		alert("abre anticipado pop up");	
}


window.onload = ejecuta;










