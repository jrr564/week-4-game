$( document ).ready(function(){

//global variable	
//generates random number
	var numRand = Math.floor(Math.random()*101+19)
//sets score to 0
	var count= 0
//sets crystals to random value 1-4
	var attack1 = Math.floor(Math.random()*11+1)
	var attack2 = Math.floor(Math.random()*11+1)
	var attack3 = Math.floor(Math.random()*11+1)
	var attack4 = Math.floor(Math.random()*11+1)

//wins and losses
	var wins = 0;
	var loss = 0;

//displays random number
	$(".goal").html("u gotta get this number: "+numRand);
//displays count score
    $(".counter").html("yr score: "+count);
//displays wins
	$(".wins").html("Wins: "+wins);
	
	$(".losses").html("Losses: "+loss);
//reset game
	function gameReset() {
		var numRand = Math.floor(Math.random()*101+19)
		$(".goal").html("u gotta get this number: "+numRand);
		var count = 0
		var attack1 = Math.floor(Math.random()*11+1)
		var attack2 = Math.floor(Math.random()*11+1)
		var attack3 = Math.floor(Math.random()*11+1)
		var attack4 = Math.floor(Math.random()*11+1)
		}
//win screen
	function win(){
		$(".message").html("yr the man now, dog");
		wins++;
		$(".wins").html("Wins: "+wins);
		gameReset()
	}
//loss screen
	function loss(){
		$(".message").html("u so disappointing")
		loss++
		$(".losses").html("Losses: "+loss)
	}
//click functions
//button one
	$(".button-one").on("click", function() {
		count = count + attack1;
		console.log(count);
		$(".counter").html("yr score: "+count);

	})

})
