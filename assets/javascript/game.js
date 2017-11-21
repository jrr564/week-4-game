$( document ).ready(function(){

//global variables	
//generates random number
	var numRand = Math.floor(Math.random()*101+19);
//sets score to 0
	var count= 0;
//sets crystals to random value 1-4
	var attack1 = Math.floor(Math.random()*11+1);
	var attack2 = Math.floor(Math.random()*11+1);
	var attack3 = Math.floor(Math.random()*11+1);
	var attack4 = Math.floor(Math.random()*11+1);

//wins and losses
	var wins = 0;
	var losses = 0;

//displays random number
	$(".goal").html("To open the pod bay doors, match this number: "+numRand+"");
//displays count score
    $(".counter").html("yr score: "+count);
//displays wins
	$(".wins").html("Wins: "+wins);
	
	$(".losses").html("Losses: "+losses);
//reset game
	function gameReset() {
		numRand = Math.floor(Math.random()*101+19);
		$(".goal").html("To open the pod bay doors, match this number: "+numRand+"");
		attack1 = Math.floor(Math.random()*11+1);
		attack2 = Math.floor(Math.random()*11+1);
		attack3 = Math.floor(Math.random()*11+1);
		attack4 = Math.floor(Math.random()*11+1);
		count= 0;
		$(".counter").html("Score: "+count);
		}
//win screen
	function win(){
		$(".message").html("Systems are normal. Opening pod bay doors..");
		wins++;
		$(".wins").html("Wins: "+wins);
		gameReset();
	}
//loss screen
	function loss(){
		$(".message").html("You have jeopardized the mission.");
		losses++;
		$(".losses").html("Losses: "+losses);
		gameReset();
	}
//buttons with click function
	$("#button-one").on("click", function() {
		count = count + attack1;
		$(".counter").html("yr score: "+count);
		if (count === numRand) {
			win();
		}
		else if (count > numRand) {
			loss();
		}
	})

	$("#button-two").on("click", function() {
		count = count + attack2;
		$(".counter").html("yr score: "+count);
		if (count === numRand) {
			win();
		}
		else if (count > numRand) {
			loss();
		}
	})

	$("#button-three").on("click", function() {
		count = count + attack3;
		$(".counter").html("yr score: "+count);
		if (count === numRand) {
			win();
		}
		else if (count > numRand) {
			loss();
		}
	})

	$("#button-four").on("click", function() {
		count = count + attack4;
		$(".counter").html("yr score: "+count);
		if (count === numRand) {
			win();
		}
		else if (count > numRand) {
			loss();
		}
	})
	
	gameReset()

})
