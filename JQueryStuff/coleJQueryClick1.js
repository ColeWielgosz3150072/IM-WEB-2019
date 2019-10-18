
//variables
	//boolean
	//string variables
	//number variable

//events
	//click
	//scroll

//conditionals
	//if else statements

//addClass
//33removeClass



$(document).scroll(function(){

	var scrolledSoFar = $(document).scrollTop()
	
	var totalHeight = $(document).height()- $(window).height()

	var scrollPercentage = scrolledSoFar / totalHeight;

	var scrollDegree = scrollPercentage * 360;

	var flowerPosition = (scrolledSoFar - 1000)/4;

	var textTestPosition = (scrolledSoFar - 900)/3;

	var textScrollTestPosition = (scrolledSoFar)/-1;

	var titleScroll = ((scrolledSoFar)/-2)+220;

	var forestFire1Scroll = ((scrolledSoFar)/10)+1000;

	$(".circle").css({
		"transform":"rotate("+scrollDegree+"deg)"
	})

	console.log(scrollDegree)

// 	$(".circle2").css({
// 		"bottom":scrollDegree+"px"
// })
	console.log(scrolledSoFar)

	if (scrolledSoFar < 400){
		$(".circle2").css({
		"bottom":"2000px"
})
	} else if (scrolledSoFar > 400){
		$(".circle2").css({
		"bottom":flowerPosition+"px"
})
}




	if (scrolledSoFar < 400){
		$(".outlinedText").css({
		"bottom":"2000px"
})
	} else if (scrolledSoFar > 400){
		$(".outlinedText").css({
		"bottom":textTestPosition+"px"
})
}


	if (scrolledSoFar < 400){
		$(".backOfOutlinedText").css({
		"bottom":"2000px"
})
	} else if (scrolledSoFar > 400){
		$(".backOfOutlinedText").css({
		"bottom":textTestPosition+"px"
})
}


console.log(textScrollTestPosition);


	if (scrolledSoFar < 1){
		$(".leftScrollingTextInner").css({
		"left":0+"px"
})
	} else if (scrolledSoFar > 1){
		$(".leftScrollingTextInner").css({
		"left":textScrollTestPosition+"px"
})
}

//this is what is being used for "final" elements



	if (scrolledSoFar < 450){//for the title
		$(".titleLargeBack").css({
		"top":0+"px"
})
		$(".titleLargeFront").css({
		"top":0+"px"
})
	} else if (scrolledSoFar > 450){
		$(".titleLargeBack").css({
		"top":titleScroll+"px"
})
		$(".titleLargeFront").css({
		"top":titleScroll+"px"
})
}


	if (scrolledSoFar < 1){
		$(".forestFire1").css({//for the forest fire gif
		"top":-100+"px"
})
	} else if (scrolledSoFar > 1){
		$(".forestFire1").css({
		"top":forestFire1Scroll+"px"
})
	} 

}) // end of scroll function


 $( function() {
    $( ".circle2" ).draggable({ scroll: true, scrollSensitivity: 100 });
  } );



