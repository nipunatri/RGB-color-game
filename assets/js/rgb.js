

var colors= generateRandomColors(6);
var squares= document.querySelectorAll(".square");
var pc = pickColor();
var cdisplay=document.getElementById("cdisplay");
cdisplay.textContent=pc;
//alert(pc);
var level=0;
var mdisplay=document.querySelector("#message");
var h1 =document.querySelector("h1");
var rButton=document.querySelector("#reset");
var gameOver=false;
var ebtn =document.querySelector("#ebtn");
var hbtn =document.querySelector("#hbtn");

ebtn.addEventListener("click",function(){
	ebtn.classList.add("selected");
	hbtn.classList.remove("selected");
	colors=generateRandomColors(3);
	pc=pickColor();
	level=1;
	resetColors();
});
hbtn.addEventListener("click",function(){
ebtn.classList.remove("selected");
	hbtn.classList.add("selected");
	level=0;
	resetColors();	
});
setColors();
function setColors(){
	for(var i=0;i<squares.length;i++){
		if(level===0){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";	
		}else{
			if(colors[i]){
			squares[i].style.background=colors[i];	
			}
			else{
				squares[i].style.display="none"
			}
		}
		
	}
}
for(var i=0;i<squares.length;i++){
	
squares[i].addEventListener("click",function(){
      var cc =this.style.background;

      if(cc===pc){
      	mdisplay.textContent="Correct!";
      	gameOver=true;
      	rButton.textContent="Play again?";
      	changeColor(cc);
      }
      else{
      	 this.style.background = "none";
      	 mdisplay.textContent="Try again!";
      }
	});	
}
function changeColor(color){
for(var i=0;i<squares.length;i++){
	squares[i].style.background=color;
}
h1.style.background=color;
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var a=[];
	for(var i=0;i<num;i++){
          a[i]=getColors();
	}
	return a;
}
function getColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}
rButton.addEventListener("click",function(){
		
	gameOver=false;
resetColors();


});
function resetColors(){
if(level===0){
	colors=generateRandomColors(6);
}
else{
	colors=generateRandomColors(3);
}
h1.style.background=getColors();	
	pc=pickColor();
	cdisplay.textContent=pc;
mdisplay.textContent="";
rButton.textContent="New colors";
	setColors();
}

