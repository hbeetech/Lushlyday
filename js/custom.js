// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
/** Single video play */
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');

    videos.forEach((video) => {
      video.addEventListener('play', function() {
        videos.forEach((vid) => {
          if (vid !== video) {
            vid.pause();
          }
        });
      });
    });
  });

  /** Map Location */
  function initMap() {
    // Coordinates for the location
    var location = { lat: 12.9715987, lng: 77.5945627 }; // Replace with your exact coordinates

    // Create a map centered on the location
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });

    // Add a marker to the location
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Lushly Day Agri Tech'
    });
  }