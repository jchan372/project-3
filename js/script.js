var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: 41.8741, lng: -87.6285}, 
    center: {lat: 41.8784, lng: -87.6283},
    zoom: 15
  });

  var jones = new google.maps.Marker({
    position: { lat: 41.873, lng: -87.628},
    map: map
  });

  var buckinghamFountain = new google.maps.Marker({
    position: { lat: 41.87591665187033, lng: -87.61893134443656 },
    map: map
  });

  var distPoints = [
    { lat: 41.8730, lng: -87.6279 },
    { lat: 41.873098732145145, lng: -87.6277527872421 },
    { lat: 41.873258293968874, lng: -87.61891352803985 },
    { lat: 41.87543228413067, lng: -87.61894031367382 },
  ];

  var dist = new google.maps.Polyline({
    path: distPoints,
    geodesic: true,
    strokeColor: "#FE5F55",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  dist.setMap(map);

}

window.initMap = initMap;
