window.setInterval(function(){
	$.get("http://192.168.1.30:1880/refresh").done(function(data){
		update(data)})
},1000);



$(document).ready(function(){

	$("#no13").click(function(){$.get('http://192.168.1.80:1880/state?toggle=brick', function(data, status){update(data)});});
	$("#no14").click(function(){$.get('http://192.168.1.80:1880/state?toggle=garage', function(data, status){update(data)});});
	$("#no15").click(function(){$.get('http://192.168.1.80:1880/state?toggle=torches', function(data, status){update(data)});});
	$("#no16").click(function(){$.get('http://192.168.1.80:1880/state?toggle=blacklight', function(data, status){update(data)});});
	$( "#hint" ).submit(function( event ) {
		console.log($( "input:first" ).val());
		$.get('http://192.168.1.31:1880/msg?message='+$( "input:first" ).val(), function(data, status){})
		event.preventDefault();
	});

})

function update(data) { 
		//main page flow
		if(data.status=="reset"){
			$("#currentstatus").css('color','rgb(0,255,0)'),
			$("#currentstatus").html("Running")
		}
		else{}
		if(data.status=="pause"){
			$("#currentstatus").css('color','rgb(255,255,0)'),
			$("#currentstatus").html("Paused")
		}
		else{}
		if(data.status=="end"){
			$("#currentstatus").css('color','rgb(255,0,0)'),
			$("#currentstatus").html("Ended")
		}
		else{}
		if(data.status=="resume"){
			$("#currentstatus").css('color','rgb(0,255,0)'),
			$("#currentstatus").html("Running")
		}
		else{}
		
		
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
		if(data.key==0){
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
		if(data.key==0){
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
		
		if(data.sliderPuzzle==1){
			$("#no11").css('background','rgb(0,255,0)'),
			$("#no11").children().html("Slider Puzzle Solved")
		}
		else{$("#no11").css('background','rgb(255,0,0)'),
			$("#no11").children().html("Slider Puzzle Unsolved")
		}
		if(data.shapePuzzle==1){
			$("#no12").css('background','rgb(0,255,0)'),
			$("#no12").children().html("Shape Puzzle Solved")
		}
		else{$("#no12").css('background','rgb(255,0,0)'),
			$("#no12").children().html("Shape Puzzle Unsolved")
		}
		
		
		//Read and Write states
		if(data.mazePuzzle==0){
			$("#no13").css('background','rgb(0,255,0)'),
			$("#no13").children().html("Maze Puzzle Solved")
		}
		else{$("#no13").css('background','rgb(255,0,0)'),
			$("#no13").children().html("Maze Puzzle Unsolved")
		}
		if(data.blacklight==1){
			$("#no14").css('background','rgb(0,255,0)'),
			$("#no14").children().html("Blacklights on")
		}
		else{$("#no14").css('background','rgb(255,0,0)'),
			$("#no14").children().html("Blacklights off")
		}
		if(data.safe==1){
			$("#no15").css('background','rgb(0,255,0)'),
			$("#no15").children().html("Safe Open")
		}
		else{$("#no15").css('background','rgb(255,0,0)'),
			 $("#no15").children().html("Safe Closed")
		}
		if(data.garage==1){
			$("#no16").css('background','rgb(0,255,0)'),
			$("#no16").children().html("Garage On")
		}
		else{$("#no16").css('background','rgb(255,0,0)'),
			$("#no16").children().html("Garage Off")
		}
		if(data.brickMag==1){
			$("#no17").css('background','rgb(0,255,0)'),
			$("#no17").children().html("Brick Mag On")
		}
		else{$("#no17").css('background','rgb(255,0,0)'),
			$("#no17").children().html("Brick Mag Off")
		}
}
