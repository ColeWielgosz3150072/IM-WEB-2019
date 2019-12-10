var ourKey = '2f3e5a19c489da9c53c1ef63612e8919';


//when calling, ? is first and ever subsequent value is a & seperator

var APIURL = 'http://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=' + ourKey;

$.ajax({
	dataType: 'JSON',
	url: APIURL,
	success:function(test){
		console.log(test.main.temp)

		var tempC = Math.floor(test.main.temp - 273.15);

		console.log("the temp is"+ tempC + "Celcius")

         $('<div class ="bigTemp">it is '+ tempC + '&#176 celcius</div>').appendTo($('.bigBoy'));     

	}
})


$("a").click(function(){

	var t = $(this).attr("data-target")

	$("body").scrollTo(t,200)
})
