window.setInterval(function(){
	$.get("http://192.168.1.80:1880/state").done(function(data){
		update(data)})
},1000);



$(document).ready(function(){

	$("#no13").click(function(){$.get('http://192.168.1.81:1880/state?toggle=torch', function(data, status){update(data)});});
	$("#no14").click(function(){$.get('http://192.168.1.81:1880/state?toggle=blacklight', function(data, status){update(data)});});
	$("#no15").click(function(){$.get('http://192.168.1.81:1880/state?toggle=exit', function(data, status){update(data)});});
	$("#no16").click(function(){$.get('http://192.168.1.80:1880/garage', function(data, status){update(data)});});
	$("#no17").click(function(){$.get('http://192.168.1.81:1880/state?toggle=brickMag', function(data, status){update(data)});}); 

})

function update(data) { 
		//main page flow
		if(data.hintCount==0){
			$("#hintCount").css('color','rgb(255,0,0)'),
			$("#hintCount").html("Hint Count = 0"),
			$("#useHint").html("        ")
		}
		else{}
		if(data.hintCount==1){
			$("#hintCount").css('color','rgb(255,255,0)'),
			$("#hintCount").html("Hint Count = 1"),
			$("#useHint").html("USE HINT")
		}
		else{}
		if(data.hintCount==2){
			$("#hintCount").css('color','rgb(0,255,0)'),
			$("#hintCount").html("Hint Count = 2"),
			$("#useHint").html("USE HINT")
		}
		else{}
		if(data.hintCount==3){
			$("#hintCount").css('color','rgb(0,255,0)'),
			$("#hintCount").html("Hint Count = 3"),
			$("#useHint").html("USE HINT")
		}
		else{}
		if(data.hintCount==4){
			$("#hintCount").css('color','rgb(0,255,0)'),
			$("#hintCount").html("Hint Count = 4"),
			$("#useHint").html("USE HINT")
		}
		else{}
		if(data.hintCount==5){
			$("#hintCount").css('color','rgb(0,255,0)'),
			$("#hintCount").html("Hint Count = 5"),
			$("#useHint").html("USE HINT")
		}
		else{}
		if(data.hintCount==6){
			$("#hintCount").css('color','rgb(0,255,0)'),
			$("#hintCount").html("Hint Count = 6"),
			$("#useHint").html("USE HINT")
		}
		else{}
		if(data.hintCount==7){
			$("#hintCount").css('color','rgb(0,255,0)'),
			$("#hintCount").html("Hint Count = 7"),
			$("#useHint").html("USE HINT")
		}
		else{}
		if(data.hintCount==99){
			$("#hintCount").css('color','rgb(255,165,0)'),
			$("#hintCount").html("ORANGE MAN BAD Xd")
		}
		else{}
		if(data.toggleSound==1){
			$("#mutes").css('color','rgb(0,255,0)'),
			$("#mutes").html("MUTE")
		}
		else{
			$("#mutes").css('color','rgb(255,0,0)'),
			$("#mutes").html("UNMUTE")
		}
		
		// main page flow chart buttons
		if(data.statue==0){
			$("#no1").css('background','rgb(0,255,0)')//,
			$("#no1").children().html("Statue Present")
		}
		else{$("#no1").css('background','rgb(255,0,0)')//,
			$("#no1").children().html("Statue Removed")
		}
		if(data.wordPuzzle==1){
			$("#no2").css('background','rgb(0,255,0)'),
			$("#no2").children().html("Word Puzzle Solved")
		}
		else{$("#no2").css('background','rgb(255,0,0)'),
			$("#no2").children().html("Word Puzzle Unsolved")
		}
		if(data.key==1){
			$("#no3").css('background','rgb(0,255,0)'),
			$("#no3").children().html("Key Puzzle Solved")
		}
		else{$("#no3").css('background','rgb(255,0,0)'),
			$("#no3").children().html("Key Puzzle Unsolved")
		}
		if(data.brick==0){
			$("#no4").css('background','rgb(0,255,0)'),
			$("#no4").children().html("Brick Present")
		}
		else{$("#no4").css('background','rgb(255,0,0)'),
			$("#no4").children().html("Brick Removed")
		}
		if(data.vase==1){
			$("#no5").css('background','rgb(0,255,0)'),
			$("#no5").children().html("Vase Solved")
		}
		else{$("#no5").css('background','rgb(255,0,0)'),
			$("#no5").children().html("Vase Unsolved")
		}
		if(data.statue==0){
			$("#no6").css('background','rgb(0,255,0)')//,
			$("#no6").children().html("Statue Present")
		}
		else{$("#no6").css('background','rgb(255,0,0)')//,
			$("#no6").children().html("Statue Removed")
		}
		if(data.wordPuzzle==1){
			$("#no7").css('background','rgb(0,255,0)'),
			$("#no7").children().html("Word Puzzle Solved")
		}
		else{$("#no7").css('background','rgb(255,0,0)'),
			$("#no7").children().html("Word Puzzle Unsolved")
		}
		if(data.key==1){
			$("#no8").css('background','rgb(0,255,0)'),
			$("#no8").children().html("Key Puzzle Solved")
		}
		else{$("#no8").css('background','rgb(255,0,0)'),
			$("#no8").children().html("Key Puzzle Unsolved")
		}
		if(data.brick==0){
			$("#no9").css('background','rgb(0,255,0)'),
			$("#no9").children().html("Brick Present")
		}
		else{$("#no9").css('background','rgb(255,0,0)'),
			$("#no9").children().html("Brick Removed")
		}
		if(data.vase==1){
			$("#no10").css('background','rgb(0,255,0)'),
			$("#no10").children().html("Vase Solved")
		}
		else{$("#no10").css('background','rgb(255,0,0)'),
			$("#no10").children().html("Vase Unsolved")
		}
		
		
		
		//read state only
		
		if(data.slider1==1){
			$("#no11").css('background','rgb(0,255,0)'),
			$("#no11").children().html("Slider 1 Solved")
		}
		else{$("#no11").css('background','rgb(255,0,0)'),
			$("#no11").children().html("Slider 1 Unsolved")
		}
		if(data.slider2==1){
			$("#no12").css('background','rgb(0,255,0)'),
			$("#no12").children().html("Slider 2 Solved")
		}
		else{$("#no12").css('background','rgb(255,0,0)'),
			$("#no12").children().html("Slider 2 Unsolved")
		}
		if(data.maze1==1){
			$("#no28").css('background','rgb(0,255,0)'),
			$("#no28").children().html("Maze 1 Solved")
		}
		else{$("#no28").css('background','rgb(255,0,0)'),
			$("#no28").children().html("Maze 1 Unsolved")
		}
		if(data.maze2==1){
			$("#no29").css('background','rgb(0,255,0)'),
			$("#no29").children().html("Maze 2 Solved")
		}
		else{$("#no29").css('background','rgb(255,0,0)'),
			$("#no29").children().html("Maze 2 Unsolved")
		}
		
		//Read and Write states
		if(data.torch==1){
			$("#no13").css('background','rgb(0,255,0)'),
			$("#no13").children().html("Torches on")
		}
		else{$("#no13").css('background','rgb(255,0,0)'),
			$("#no13").children().html("Torches off")
		}
		if(data.blacklight==1){
			$("#no14").css('background','rgb(0,255,0)'),
			$("#no14").children().html("Blacklights on")
		}
		else{$("#no14").css('background','rgb(255,0,0)'),
			$("#no14").children().html("Blacklights off")
		}
		if(data.exit==1){
			$("#no15").css('background','rgb(255,0,0)'),
			$("#no15").children().html("Exit locked")
		}
		else{$("#no15").css('background','rgb(0,255,0)'),
			$("#no15").children().html("Exit unlocked")
		}
		if(data.garage==1){
			$("#no16").css('background','rgb(0,255,0)'),
			$("#no16").children().html("Garage Open")
		}
		else{$("#no16").css('background','rgb(255,0,0)'),
			$("#no16").children().html("Garage Closed")
		}
		if(data.brickMag==1){
			$("#no17").css('background','rgb(255,0,0)'),
			$("#no17").children().html("Brick Mag On")
		}
		else{$("#no17").css('background','rgb(0,255,0)'),
			$("#no17").children().html("Brick Mag Off")
		}
}

function resetting()
{
	$("#resetme").html("RESET")
}

var count=3600;
function timer()
{
  count=count-1;
  if (count <= 0)
  {
	if (count == 0){
		alert("TIME IS UP");}
     else{}
     return;
  }
	var minutes = Math.floor((count / 60));
	var seconds = Math.floor((count % 60));
	if (minutes == 1){
		mintext=" min ";
	}
	else{
		mintext=" mins ";
	}
		
	document.getElementById("timer").innerHTML= minutes + mintext + seconds + " secs"; 

}
