mapboxgl.accessToken = 
'pk.eyJ1IjoiYXNoY29kZXM3IiwiYSI6ImNsY2hmeDM1aDBkZTkzd3BjZXFqMW9yd3MifQ.RNU3xpn2bLMVP0gIly0n7A' ;



navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })
  
  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }
  
  function errorLocation() {
    setupMap([35.91, 31.95])
  }

  function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 11
        
        
    })


    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        })
        );
}
