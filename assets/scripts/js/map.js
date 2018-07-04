
mapboxgl.accessToken = 'pk.eyJ1IjoibWlrc3YiLCJhIjoiY2poZXNubGowMTh6cjNka2YxNHhnYXJyOCJ9.F47GjPg96hKXbldkdIt1Pg';

var map = new mapboxgl.Map({
    container: 'contact__map',
    style: 'mapbox://styles/miksv/cjj6qsuxw0ysl2spg5gv61eyk',
    center: [-74.50, 40],
    zoom: 9
  });

  // your code that shows the map div
$('#contact__map').show();

// detect the map's new width and height and resize it
map.invalidateSize();