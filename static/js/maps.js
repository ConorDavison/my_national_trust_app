function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 54.5894595977686, 
            lng: -6.868459210999505
        }
    });
  
    // Add some markers to the map.
    const marker = new google.maps.Marker({
      position:{lat: 55.16792152519541, lng: -6.810822099777691},
      map:map
    })
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

    const detailWindow = new google.maps.InfoWindow({
      content: "<h2>Tussendon</h2>"
    })

    marker.addListener('mouseover', () =>{
      detailWindoww.open(map, marker);
    })

} 
 




    
   
 