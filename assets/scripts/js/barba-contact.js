// (function( $ ) {
    
//     // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
      
//     // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
//     window.requestAnimationFrame(function() {
    
//         var contactpage = Barba.BaseView.extend({
//           namespace: 'contactpage',
//           onEnter: function() {
//               // The new Container is ready and attached to the DOM.
//           },
//           onEnterCompleted: function() {
              
//                 mapboxgl.accessToken = 'pk.eyJ1IjoibWlrc3YiLCJhIjoiY2pqOGpheXB6MGVnZDN2cXRydHJ0cDhpbiJ9.9AA0Qzfwpty1ojRHe_6r8Q';

//                 var map = new mapboxgl.Map({
//                     container: 'contact__map',
//                     style: 'mapbox://styles/miksv/cjj8jcyip2mx82spg7g61qg63',
//                     // center: [55.155498, 25.097279],
//                     // zoom: 17.00,
//                     bearing: -37.49,
//                     pitch: 60.00
//                 });

//                 // fly with default options to null island
//                 map.flyTo({center: [55.187510, 25.090170], zoom: 10.77});
//                 // using flyTo options
//                 map.flyTo({
//                 center: [55.155568, 25.095368],
//                 zoom: 17.00,
//                 speed: 1,
//                 curve: 1,
//                 easing(t) {
//                     return t;
//                 }
//                 });


//                 // your code that shows the map div
//                 $('#contact__map').show();

//                 // detect the map's new width and height and resize it
//                 map.invalidateSize();
            
             
//           },
//           onLeave: function() {
//               // A new Transition toward a new page has just started.
//           },
//           onLeaveCompleted: function() {
//               // The Container has just been removed from the DOM.
//           }
//         });
        
//         // Don't forget to init the view!
        
//         contactpage.init();
//         Barba.Prefetch.init();

        
    
    
    
//     });
            
//      })( jQuery );