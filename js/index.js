window.setInterval(function(){
	$.get("http://192.168.1.30:1880/refresh").done(function(data){
		update(data)})
},1000);



$(document).ready(function(){
	$("#no13").click(function(){$.get('http://192.168.1.30:1880/state?toggle=laser', function(data, status){update(data)});});
	$("#no14").click(function(){$.get('http://192.168.1.30:1880/state?toggle=lamp', function(data, status){update(data)});});
	$("#no15").click(function(){$.get('http://192.168.1.30:1880/state?toggle=resettimer', function(data, status){update(data)});});
	$("#no16").click(function(){$.get('http://192.168.1.30:1880/state?toggle=eyeon', function(data, status){update(data)});});
	$("#no17").click(function(){$.get('http://192.168.1.30:1880/state?toggle=lasersmoke', function(data, status){update(data)});});
	$("#no18").click(function(){$.get('http://192.168.1.30:1880/state?toggle=siren', function(data, status){update(data)});});
	$("#no19").click(function(){$.get('http://192.168.1.30:1880/state?toggle=frontlights', function(data, status){update(data)});});
	$("#no20").click(function(){$.get('http://192.168.1.30:1880/state?toggle=backlights', function(data, status){update(data)});});
	$("#no21").click(function(){$.get('http://192.168.1.30:1880/state?toggle=dim', function(data, status){update(data)});});
	$("#no22").click(function(){$.get('http://192.168.1.30:1880/state?toggle=picture', function(data, status){update(data)});});
	$("#no23").click(function(){$.get('http://192.168.1.30:1880/state?toggle=exit', function(data, status){update(data)});});
	$("#no24").click(function(){$.get('http://192.168.1.30:1880/state?toggle=glass', function(data, status){update(data)});});
	$("#no25").click(function(){$.get('http://192.168.1.30:1880/state?toggle=barrelsmoke', function(data, status){update(data)});});
	$("#no26").click(function(){$.get('http://192.168.1.30:1880/state?toggle=bombstart', function(data, status){update(data)});});
	$("#no27").click(function(){$.get('http://192.168.1.30:1880/state?toggle=ceilingsmoke', function(data, status){update(data)});});
	$( "#hint" ).submit(function( event ) {
		console.log($( "input:first" ).val());
		$.get('http://192.168.1.31:1880/msg?message='+$( "input:first" ).val(), function(data, status){})
		event.preventDefault();
	});

})

function update(data) { 
		//main page flow
		if(data.lights==0){
			$("#no1 a").css('background','rgb(0,255,0)')
		}
		else{$("#no1 a").css('background','rgb(255,0,0)')
		}
		if(data.laser==1){
			$("#no2 a").css('background','rgb(0,255,0)')
		}
		else{$("#no2 a").css('background','rgb(255,0,0)')
		}
		if(data.picture==0){
			$("#no3 a").css('background','rgb(0,255,0)')
		}
		else{$("#no3 a").css('background','rgb(255,0,0)')
		}
		if(data.glass==0){
			$("#no4 a").css('background','rgb(0,255,0)')
		}
		else{$("#no4 a").css('background','rgb(255,0,0)')
		}
		if(data.bomb==0){
			$("#no5 a").css('background','rgb(0,255,0)')
		}
		else{$("#no5 a").css('background','rgb(255,0,0)')
		}
		
		
		//read state only
		if(data.bombp==0){
			$("#no5 a").css('background','rgb(0,255,0)')
		}
		else{$("#no5 a").css('background','rgb(255,0,0)')
		}
		if(data.switchp==1){
			$("#no6 a").css('background','rgb(0,255,0)')
		}
		else{$("#no6 a").css('background','rgb(255,0,0)')
		}
		if(data.breakerp==1){
			$("#no7 a").css('background','rgb(0,255,0)')
		}
		else{$("#no7 a").css('background','rgb(255,0,0)')
		}
		if(data.thermp==1){
			$("#no8 a").css('background','rgb(0,255,0)')
		}
		else{$("#no8 a").css('background','rgb(255,0,0)')
		}
		if(data.surgep==1){
			$("#no9 a").css('background','rgb(0,255,0)')
		}
		else{$("#no9 a").css('background','rgb(255,0,0)')
		}
		if(data.eyep==1){
			$("#no10 a").css('background','rgb(0,255,0)')
		}
		else{$("#no10 a").css('background','rgb(255,0,0)')
		}
		if(data.microphonep==1){
			$("#no11 a").css('background','rgb(0,255,0)')
		}
		else{$("#no11 a").css('background','rgb(255,0,0)')
		}
		if(data.alarmp==1){
			$("#no12 a").css('background','rgb(0,255,0)')
		}
		else{$("#no12 a").css('background','rgb(255,0,0)')
		}
		
		
		//Read and Write states
		if(data.laser==0){
			$("#no13 a").css('background','rgb(0,255,0)'),
			$("#no13").children().html("Laser On")
		}
		else{$("#no13 a").css('background','rgb(255,0,0)'),
			$("#no13").children().html("Laser Off")
		}
		if(data.lamp==1){
			$("#no14 a").css('background','rgb(0,255,0)'),
			$("#no14").children().html("Lamp On")
		}
		else{$("#no14 a").css('background','rgb(255,0,0)'),
			$("#no14").children().html("Lamp Off")
		}
		if(data.resettimer==1){
			$("#no15 a").css('background','rgb(0,255,0)')
		}
		else{$("#no15 a").css('background','rgb(255,0,0)')
		}
		if(data.eyeon==1){
			$("#no16 a").css('background','rgb(0,255,0)'),
			$("#no16").children().html("Eye Scanner On")
		}
		else{$("#no16 a").css('background','rgb(255,0,0)'),
			$("#no16").children().html("Eye Scanner Off")
		}
		if(data.lasersmoke==1){
			$("#no17 a").css('background','rgb(0,255,0)'),
			$("#no17").children().html("Laser Smoke On")
		}
		else{$("#no17 a").css('background','rgb(255,0,0)'),
			$("#no17").children().html("Laser Smoke Off")
		}
		if(data.siren==1){
			$("#no18 a").css('background','rgb(0,255,0)'),
			$("#no18").children().html("Siren On")
		}
		else{$("#no18 a").css('background','rgb(255,0,0)'),
			$("#no18").children().html("Siren Off")
		}
		if(data.frontlights==0){
			$("#no19 a").css('background','rgb(0,255,0)'),
			$("#no19").children().html("Front Lights On")
		}
		else{$("#no19 a").css('background','rgb(255,0,0)'),
			$("#no19").children().html("Front Lights Off")
		}
		if(data.backlights==0){
			$("#no20 a").css('background','rgb(0,255,0)'),
			$("#no20").children().html("Back Lights On")
		}
		else{$("#no20 a").css('background','rgb(255,0,0)'),
			$("#no20").children().html("Back Lights Off")
		}
		if(data.dim==1){
			$("#no21 a").css('background','rgb(0,255,0)'),
			$("#no21").children().html("Lights Dim")
		}
		else{$("#no21 a").css('background','rgb(255,0,0)'),
			$("#no21").children().html("Lights Bright")
		}
		if(data.picture==1){
			$("#no22 a").css('background','rgb(0,255,0)'),
			$("#no22").children().html("Picture Locked")
		}
		else{$("#no22 a").css('background','rgb(255,0,0)'),
			$("#no22").children().html("Picture Unlocked")
		}
		if(data.exit==0){
			$("#no23 a").css('background','rgb(0,255,0)'),
			$("#no23").children().html("Exit Door Unlocked")
		}
		else{$("#no23 a").css('background','rgb(255,0,0)'),
			$("#no23").children().html("Exit Door Locked")
		}
		if(data.glass==0){
			$("#no24 a").css('background','rgb(0,255,0)'),
			$("#no24").children().html("Glass Door Unlocked")
		}
		else{$("#no24 a").css('background','rgb(255,0,0)'),
			$("#no24").children().html("Glass Door Locked")
		}
		if(data.barrelsmoke==1){
			$("#no25 a").css('background','rgb(0,255,0)'),
			$("#no25").children().html("Barrel Smoke On")
		}
		else{$("#no25 a").css('background','rgb(255,0,0)'),
			$("#no25").children().html("Barrel Smoke Off")
		}
		if(data.bombstart==1){
			$("#no26 a").css('background','rgb(0,255,0)'),
			$("#no26").children().html("Bomb Started")
		}
		else{$("#no26 a").css('background','rgb(255,0,0)'),
			$("#no26").children().html("Bomb Not Started")
		}
		if(data.ceilingsmoke==1){
			$("#no27 a").css('background','rgb(0,255,0)'),
			$("#no27").children().html("Ceiling Smoke On")
		}
		else{$("#no27 a").css('background','rgb(255,0,0)'),
			$("#no27").children().html("Ceiling Smoke Off")
		}
}
