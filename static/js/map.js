function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 54.5894595977686, 
            lng: -6.868459210999505
        }
    });
  
    // Add some markers to the map.
    /*const marker = new google.maps.Marker({
      position:{lat: 55.16792152519541, lng: -6.810822099777691},
      map:map
    })
    // Add a marker clusterer to manage the markers.
    //new MarkerClusterer(map, marker, {
      //imagePath:
        //"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    //});

    const detailWindow = new google.maps.InfoWindow({
      content: `<h4>Mussenden Temple</h4>`
    })
    */
    
    
   
  function addMarker(property){
    
    const marker = new google.maps.Marker({
      position:property.location,
      map:map
    })

    const detailWindow = new google.maps.InfoWindow({
      content: property.content
    })

    marker.addListener("click", () =>{
      detailWindow.open(map, marker);
    })
  }

    addMarker({location:{lat: 55.16792152519541, lng: -6.810822099777691},
    content: `<h4>Mussenden Temple</h4>`})
    addMarker({location:{lat: 54.8255649690015, lng: -7.46340543048264},
    content: `<h4>Grays Printing Press</h4>`})

} 
 




    
   
 