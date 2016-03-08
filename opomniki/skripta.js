window.addEventListener('load', function() {
	//stran nalozena
	
	var prijavi = function(event) {
		var user = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = user;
		document.querySelector(".pokrivalo").style.display="none";
	}
	document.querySelector("#prijavniGumb").addEventListener('click',prijavi);
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var dodajOpomnik = function(event) {
		console.log("derp");
		var time = document.querySelector("#cas_opomnika").value;
		var name = document.querySelector("#naziv_opomnika").value;
		document.querySelector("#cas_opomnika").innerHTML= "";
		document.querySelector("#naziv_opomnika").innerHTML = "";
		var element = "<div class='opomnik'><div class='naziv_opomnika'>"+name+"</div><div class='cas_opomnika'> Opomnik čez <span>"+time+"</span> sekund.</div></div>";
		document.querySelector("#opomniki").innerHTML+=element;
		
	}
	document.querySelector("#dodajGumb").addEventListener('click',dodajOpomnik);
});