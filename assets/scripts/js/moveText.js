(function( $ ) {
    
    //     var lFollowX = 0,
    //     lFollowY = 0,
    //     x = 0,
    //     y = 0,
    //     friction = 0.500;
    
    // function moveBackground() {
    //   x += (lFollowX - x) * friction;
    //   y += (lFollowY - y) * friction;
      
    //  var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';
    
    //   $('.movin__g').css({
    //     '-webit-transform': translate,
    //     '-moz-transform': translate,
    //     'transform': translate
    //   });
    
    //   window.requestAnimationFrame(moveBackground);
    // }
    
    // $(window).on('mousemove click', function(e) {
    
    //   var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    //   var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    //   lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    //   lFollowY = (30 * lMouseY) / 100;
    
    // });
    
    // moveBackground();
           
    $(window).mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 15);
        var amountMovedY = (e.pageY * -1 / 15);
        var elem = document.querySelector('.movin__g');
        // $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
        TweenLite.to(elem,0.5,{x: amountMovedX,y: amountMovedY})
    });
    
    })( jQuery );