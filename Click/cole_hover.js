


function move() {
    $('.moveMe').css({
    	"top":Math.random()*200 + 'px',
    	"left":Math.random()*200 + 'px'
    })
}

$(document).ready(function() {
    $('.moveMe').hover(move);
});












  // $(document).ready(function(){
  //   $('.box').hover(function() {
  //   $(this).box;
  //   $(this).css('position','absolute').css('top', Math.random()*200 + 'px').css('left', Math.random()*200 + 'px');
  //   });
  //   });



//    $(document).ready(function(){
//     $('.box').hover(function() {
    // $(this).css({
    // 	"top":Math.random()*200 + 'px',
    // 	"left":Math.random()*200 + 'px'
    // })

//     })
// })



// $(document).mousemove(function(e){
// 	var mX = e.clientX -60
// 	var mY = e.clientY

// 	$(".countup").css({
// 		"top":mY,
// 		"left":mX
// 	})

// })


// var box = $(".box");

// function moveItOrLoseIt(){
// 	box.stop().animate({
// 		"top":Math.random()*200 + 'px',
//     	"left":Math.random()*200 + 'px'
// 	});
// }



//   $(document).ready(function(){
    
//     $('.box').hover(function() {

//     	moveItOrLoseIt()
 
//   })
// })


    // $(this).css({
    // 	"top":Math.random()*200 + 'px',
    // 	"left":Math.random()*200 + 'px'
    // })
