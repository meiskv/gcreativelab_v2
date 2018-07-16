(function( $ ) {
    
 
    if($('.movin__g')){

    
    $(window).mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 15);
        var amountMovedY = (e.pageY * -1 / 15);
        var elem = document.querySelector('.movin__g');
        // $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
        TweenLite.to(elem,0.5,{x: amountMovedX,y: amountMovedY})
    });

    $(window).mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 15);
        var amountMovedY = (e.pageY * -1 / 15);
        var elem0 = document.querySelector('#P0');
        var elem1 = document.querySelector('#P1');
        var elem2 = document.querySelector('#P2');
        var elem3 = document.querySelector('#P3');
        var elem4 = document.querySelector('#P4');
        var elem5 = document.querySelector('#P5');
        var elem6 = document.querySelector('#P6');
        var elem7 = document.querySelector('#P7');

        var cloud01 = document.querySelector('#Cloud_01');
        var cloud02 = document.querySelector('#Cloud_02');
        var cloud03 = document.querySelector('#Cloud_03');
        // $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
        TweenLite.to(cloud01,1.5,{x: -amountMovedX})
        TweenLite.to(cloud02,1.5,{x: amountMovedX})
        TweenLite.to(cloud03,1.5,{x: -amountMovedX})


        TweenLite.to(elem0,3.3,{x: -amountMovedX})
        TweenLite.to(elem1,3.0,{x: amountMovedX})
        TweenLite.to(elem2,2.5,{x: -amountMovedX})
        TweenLite.to(elem3,2.0,{x: amountMovedX})
        TweenLite.to(elem4,1.5,{x: -amountMovedX})
        TweenLite.to(elem5,1,{x: amountMovedX})
        TweenLite.to(elem6,0.5,{x: -amountMovedX})
        TweenLite.to(elem7,0,{x: amountMovedX})
    });

    }
    
    })( jQuery );