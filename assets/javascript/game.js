var objective ;
var score= 0 ;
var wins = 0;
var loses = 0;
var cry1;
var cry2;
var cry3;
var cry4;
function reset() {
	score=0;
	$('#startnum').text(score);
	objective =  Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log(objective);
	$('#goal').text(objective);
	score = 0;
	function crystalNum(min,max) { return Math.floor(Math.random() * (12-1+1))+1};
	console.log("crytal num:" + crystalNum());
	cry1 = crystalNum();
	console.log("crystal 1:"+cry1);
	$('#crystal1').attr("data-crystalvalue1",cry1);
	
	cry2 = crystalNum();
	console.log("crystal 2:"+cry2)
	$('#crystal2').attr("data-crystalvalue2",cry2);

	cry3 = crystalNum();
	console.log("crystal 3:"+cry3)
	$('#crystal3').attr("data-crystalvalue3",cry3);

	cry4 = crystalNum();
	console.log("crystal 4:"+cry4)
	$('#crystal4').attr("data-crystalvalue4",cry4);
}

$(document).ready(function(){
	$('#startnum').text(score);
	$('#winH').text(wins);
	$('#lossH').text(loses);
	objective =  Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log(objective);
	$('#goal').text(objective);
	score = 0;
	function crystalNum(min,max) { return Math.floor(Math.random() * (12-1+1))+1};
	console.log("crytal num:" + crystalNum());
	cry1 = crystalNum();
	console.log("crystal 1:"+cry1);
	$('#crystal1').attr("data-crystalvalue1",cry1);
	
	cry2 = crystalNum();
	console.log("crystal 2:"+cry2)
	$('#crystal2').attr("data-crystalvalue2",cry2);

	cry3 = crystalNum();
	console.log("crystal 3:"+cry3)
	$('#crystal3').attr("data-crystalvalue3",cry3);

	cry4 = crystalNum();
	console.log("crystal 4:"+cry4)
	$('#crystal4').attr("data-crystalvalue4",cry4);

	$('#crystal1').on("click", function(){
		console.log("clicked")
		var crystalint = ($(this).attr("data-crystalvalue1"));
		crystalint = parseInt(crystalint);
		score += crystalint;
		$('#startnum').text(score);
		if (score === objective){
			wins++;
			$('#winH').text(wins);
			alert("You Win!");
			reset();

		}
		else if (score >= objective){
			loses++;
			$('#lossH').text(loses);
			alert("You Lose!");
			reset();
		}
	})
	$('#crystal2').on("click", function(){
		console.log("clicked")
		var crystalint2 = ($(this).attr("data-crystalvalue2"));
		crystalint2 = parseInt(crystalint2);
		score += crystalint2;
		$('#startnum').text(score);
		if (score === objective){
			wins++;
			$('#winH').text(wins);
			alert("You Win!")
			reset();
		}
		else if (score >= objective){
			loses++;
			$('#lossH').text(loses);
			alert("You Lose!");
			reset();
		}
	})
	$('#crystal3').on("click", function(){
		console.log("clicked")
		var crystalint3 = ($(this).attr("data-crystalvalue3"));
		crystalint3 = parseInt(crystalint3);
		score += crystalint3;
		$('#startnum').text(score);
		if (score === objective){
			wins++;
			$('#winH').text(wins);
			alert("You Win!");
			reset();
		}
		else if (score >= objective){
			loses++;
			$('#lossH').text(loses);
			alert("You Lose!");
			reset();
		}
	})
	$('#crystal4').on("click", function(){
		console.log("clicked")
		var crystalint4 = ($(this).attr("data-crystalvalue4"));
		crystalint4 = parseInt(crystalint4);
		score += crystalint4;
		$('#startnum').text(score);
		if (score === objective){
			wins++;
			$('#winH').text(wins);
			alert("You Win!");
			reset();
		}
		else if (score >= objective){
			loses++;
			$('#lossH').text(loses);
			alert("You Lose!");
			reset();
		}
	})

});
