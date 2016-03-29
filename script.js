
var result = document.getElementById("result");
var input1 = document.getElementsByClassName('chiffre');
var input2 = document.getElementById('egal');



for (var i = 0 ; i<input1.length; i++) {
	
	input1[i].addEventListener("click",function(){
		
	if (this.value == "AC") {
		result.innerHTML = ' ';
	}else{
		result.innerHTML += this.value;
		
	}

	})
}
 

var egal = function(){
		result.innerHTML= eval(result.innerHTML);	
	}

	input2.addEventListener("click", egal);


  



	
