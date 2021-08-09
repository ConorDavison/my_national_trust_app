function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 54.5894595977686, 
            lng: -6.868459210999505
        }
    });

  
  
  
  let markerArray = [

    {location:{lat: 55.16792152519541, lng: -6.810822099777691},
    content: `<h6>Mussenden Temple</h6>
    <p>
    Built in 1785 as an estate library, this small building was modeled after Rome's Temple of Vesta.
    </p>`},

    {location:{lat: 54.8255649690015, lng: -7.46340543048264},
    content: `<h6>Grays Printing Press</h6>
    <p>18th century printing press.</p>`},
    
    {location:{lat: 55.169608351567604, lng: -6.75045507782922},
    content: `<h6>Portstewart Strand</h6>
    <p>Picturesque beach with swimming, surfing & other water sports, plus dunes for wildlife viewing.</p>`},

    {location:{lat: 55.232857667809284, lng: -6.529209642011693},
    content: `<h6>Giants Causeway</h6>
    <p>Flanked by the wild North Atlantic Ocean and a landscape of dramatic cliffs.</p>`},

    {location:{lat: 55.23217017982699, lng: -6.404572030465502},
    content: `<h6>Whitepark Bay</h6>
    <p>Crescent-shaped surf beach between 2 headlands, plus sand dunes covered with wild flowers in summer.</p>`},
    
    {location:{lat: 55.239509389065596, lng: -6.347968943956218},
    content: `<h6>Carrick-a-rede</h6>
    <p>Carrick-a-Rede Rope Bridge was first erected by salmon fishermen in 1755.</p>`},

    {location:{lat: 55.126294480873696, lng: -6.042887111393298},
    content: `<h6>Cushendon</h6>
    <p>Situated in the heart of the Glens of Antrim, Cushendun village is steeped in character and folklore.</p>`},

    {location:{lat: 554.65512107196545, lng: -6.839495786308285},
    content: `<h6>Cushendon</h6>
    <p>Working water-powered mill used in the manufacture of linen.</p>`},

    {location:{lat: 54.68582593207678, lng: -6.65552203048854},
    content: `<h6>Springmill</h6>
    <p>A pretty 17th-century plantation house with walled garden.</p>`},

    {location:{lat: 54.706508350437495, lng: -6.095241516996608},
    content: `<h6>Templetown Mausoleum</h6>
    <p>The finest example in Ireland of Robert Adam's neoclassical architecture.</p>`},

    {location:{lat: 54.70169216221488, lng: -6.042967645833136},
    content: `<h6>Pattersons Spade Mill</h6>
    <p>The last working water-driven spade mill in daily use in the British Isles.</p>`},

    {location:{lat: 54.799049406444816, lng: -5.83018073175638},
    content: `<h6>Glenoe</h6>
    <p>Glenoe or Gleno is a hamlet in County Antrim, Northern Ireland.</p>`},

    {location:{lat: 54.82086478726612, lng: -5.720606704182918},
    content: `<h6>Islandmaggee</h6>
    <p>Islandmagee is a peninsula and civil parish on the east coast of County Antrim, Northern Ireland, located between the towns of Larne and Whitehead.</p>`},

    {location:{lat: 54.46501754861015, lng: -6.6577650746793875},
    content: `<h6>The Argory</h6>
    <p>Neo-classical National Trust mansion on a wooded riverside estate, with a playground and book shop.</p>`},

    {location:{lat: 54.44319559782086, lng: -6.592740199808195},
    content: `<h6>Ardress House</h6>
    <p>17th-century house with elegant 18th-century decoration and a traditional farmyard.</p>`},

    {location:{lat: 54.59985196610092, lng: -6.042624415146882},
    content: `<h6>Divis and the Black mountain</h6>
    <p>Panoramic city and mountain views spread from the nature trails through a wildlife-rich landscape.</p>`},

    {location:{lat: 54.59985196610092, lng: -6.042624415146882},
    content: `<h6>The Crown Bar</h6>
    <p>Carved-mahogany booths, etched-glass, plus gas lamps feature in an 1820's pub, famed for its decor.</p>`},

    {location:{lat: 54.599430182442035, lng: -5.865704072819552},
    content: `<h6>Belmont Tower</h6>
    <p>This landmark building, formerly Belmont Primary School, has a history dating back to the 1890s.</p>`},

    {location:{lat: 54.54856466053796, lng: -5.952604372821682},
    content: `<h6>Minnowburn</h6>
    <p>TAn amazing location close to the city, in the heart of the country.</p>`},

    {location:{lat: 54.56148200739128, lng: -5.888363090020574},
    content: `<h6>Lisnabreeny</h6>
    <p>A picturesque walk from wooded glen to hilltop rath.</p>`},

    {location:{lat: 54.56148200739128, lng: -5.888363090020574},
    content: `<h6>Mount Stewart</h6>
    <p>Neo-classical house, celebrated gardens and demesne.</p>`},

    {location:{lat: 54.25820595471324, lng: -7.730632443997512},
    content: `<h6>Florence Court</h6>
    <p>18th-century residence on a sustainable estate with an ornate interior and walled garden.</p>`},

    {location:{lat: 54.33705229113515, lng: -7.599550730200723},
    content: `<h6>Castle Coole</h6>
    <p>Magnificent 18th-century mansion and landscape park.</p>`},

    {location:{lat: 54.17303730082619, lng: -7.426471472837411},
    content: `<h6>Crom</h6>
    <p>Country estate of over 2000 acres around Upper Lough Erne, with islands, castle ruins and a cafe..</p>`},

    {location:{lat: 54.189897239218084, lng: -6.383536072836671},
    content: `<h6>Derrymore House</h6>
    <p>National Trust–administered thatched house dating from the 18th century & built in a unique style.</p>`},

    {location:{lat: 54.159141393569314, lng: -6.066091959354573},
    content: `<h6>The Mournes</h6>
    <p>Picturesque mountain range in Northern Ireland known for its varied panoramas & rugged adventure.</p>`},

    {location:{lat: 54.23441865268465, lng: -5.862939143998529},
    content: `<h6>Murlough National Nature Reserve</h6>
    <p>Protected 6,000-year-old dune system with spectacular views of the nearby hills & the Irish Sea.</p>`},

    {location:{lat: 54.44779603014256, lng: -5.829586745843796},
    content: `<h6>Rowallane Garden</h6>
    <p>Formal and informal National Trust gardens with unique, colourful plants, walking trails and a cafe.</p>`},

    {location:{lat: 54.44779603014256, lng: -5.829586745843796},
    content: `<h6>Strangford Lough</h6>
    <p>Tranquil lake featuring sailing, boating & canoeing, plus family fun picnic areas & a steam train.</p>`},

    {location:{lat: 54.36783844044293, lng: -5.580459015156625},
    content: `<h6>Strangford Lough</h6>
    <p>Tranquil lake featuring sailing, boating & canoeing, plus family fun picnic areas & a steam train.</p>`},

  
  ]

  for (let i = 0; i < markerArray.length; i++){
    addMarker(markerArray[i]);
  }
   
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


} 
 




    
   
 