 var div = document.querySelectorAll(".as");
const moles = document.querySelectorAll('.mole');
 var scoreBoard = document.querySelector('.score').innerHTML;

// scoreBoard=parseInt(scoreBoard);
 var score=0;
var highscore=getCookie('co');
function  print()
{
	document.getElementById('high').innerHTML=highscore;
}



function moveMole() {
let timerId = null;
timerId = setInterval(peep, 500)

}


function Startgame()
 
{	
	score=0;
	moveMole();
	scoreBoard.textContent = 0;
	document.getElementById('lev').style.display='none';
	document.getElementById('stop').style.display='block';

 
 //setInterval(peep(), 1000);
 //mol.addEventListener("click", document.querySelector('score').innerHTML=(scoreBoard++));


	
		
}
function peep()
{	
	div.forEach(classname=>{
		classname.classList.remove('mole');
	})
	var a=div[Math.floor(Math.random() * 6)];
	a.classList.add('mole');
 	

}





function count(){
	score++;
	document.querySelector('.score').innerHTML=score;
}
function stop (){
	alert("score="+score);
	if(highscore<score)
	{
		setcookie(score);
	}
	window.location.reload();

}

function setcookie(d)
{
	document.cookie= "co="+ d;
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

