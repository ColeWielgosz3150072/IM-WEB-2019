


function move() {
    $(this).parents().css({
    	"top":20 + (Math.random()*20) + 'vh',
    	"left":50 + (Math.random()*20) + 'vw'
    })
}
function move2(){
      $(this).parents().css({
      "top":(Math.random()*85) + 'vh',
      "left":(Math.random()*85) + 'vw',
      "transition": '0.5s'
    })
}

function yahoo() { 
         $('<div class ="yeehaw2 bgSettings"><button class = "moveMe2 test2 bgSettings"></button></div>').appendTo($('.bigBoy'));    
        } 

$(document).ready(function() {
    $('.moveMe').hover(move);
    $('.moveMe').click(yahoo);
    $(document).on('mouseenter', '.moveMe2', move2);
});

$(document).on('click', '.moveMe2', yahoo);

//in trouble shooting, it was suggested to adress
//appended elements with the on. method rather than
//the regular jquery method. So I initially got window1
//working with $().hover, but had to use 'mouseenter'
//on the subsequent appended divs

