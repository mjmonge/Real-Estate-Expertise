// Method to populate content in the Google Map Divs
function initMap() {
  // The location of West Town in Chicago
  const chicagoWestTown = { lat: 41.896, lng: -87.665 };
  // The map, centered at West Town in Chicago
  const chicagoWestTownMap = new google.maps.Map(document.getElementById("map1"), {
    zoom: 12,
    center: chicagoWestTown,
  });
  // The marker, positioned at West Town in Chicago
  const marker1 = new google.maps.Marker({
    position: chicagoWestTown,
    map: chicagoWestTownMap,
  });

  // The location of Marquette University
  const marquette = { lat: 43.039, lng: -87.927 };
  // The map, centered at Marquette in Milwaukee
  const marquetteMap = new google.maps.Map(document.getElementById("map2"), {
    zoom: 12,
    center: marquette,
  });
  // The marker, positioned at Marquette University in Milwaukee
  const marker2 = new google.maps.Marker({
    position: marquette,
    map: marquetteMap,
  });

}