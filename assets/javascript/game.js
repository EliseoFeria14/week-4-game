var objective ;
var score= 0 ;
var wins = 0;
var loses = 0;
var cry1;
var cry2;
var cry3;
var cry4;

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
	console.log("crystal 1:"+cry1)
	cry2 = crystalNum();
	console.log("crystal 2:"+cry2)
	cry3 = crystalNum();
	console.log("crystal 3:"+cry3)
	cry4 = crystalNum();
	console.log("crystal 4:"+cry4)
});
