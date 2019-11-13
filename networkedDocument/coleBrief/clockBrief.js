$(document).scroll(function(){

	var scrolledSoFarVert = $(document).scrollTop()
	
	var totalHeight = $(document).height()- $(window).height()

	var scrolledSoFarHor = $(document).scrollLeft()

	var totalWidth = $(document).width()- $(window).width()



	var clockPositionTop = (scrolledSoFarVert/2)

	var clockPositionLeft = (scrolledSoFarHor/2)

	var apiPositionTop = (scrolledSoFarVert/2) + 500

	var apiPositionLeft = (scrolledSoFarHor/2) + 865

	var HKPositionTop = (scrolledSoFarVert/2) + 900

	var HKPositionLeft = (scrolledSoFarHor/2) + 300

	var apiLinkPositionTop = (scrolledSoFarVert/2) + 400

	var apiLinkPositionLeft = (scrolledSoFarHor/2) + 1000

	var uninhabitableLinkPositionTop = (scrolledSoFarVert/2) + 300

	var uninhabitableLinkPositionLeft = (scrolledSoFarHor/2) + 2500

	var stepsPositionTop = (scrolledSoFarVert/2) + 1000

	var stepsPositionLeft = (scrolledSoFarHor/2) + 1500



$(".clock").css({
	"top": clockPositionTop,
	"left":clockPositionLeft
})
$(".climateAPI").css({
	"top": apiPositionTop,
	"left":apiPositionLeft
})

$(".HK").css({
	"top": HKPositionTop,
	"left": HKPositionLeft
})

$(".apiLink").css({
	"top": apiLinkPositionTop,
	"left": apiLinkPositionLeft
})

$(".uninhabitableLink").css({
	"top": uninhabitableLinkPositionTop,
	"left": uninhabitableLinkPositionLeft
})

$(".steps").css({
	"top": stepsPositionTop,
	"left": stepsPositionLeft
})

}) 

