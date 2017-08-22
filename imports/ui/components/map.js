Template['layout_map'].onRendered(function(){
    GoogleMaps.load({key:'AIzaSyC0-ixqE4-do0zFNW09iRV-BlPwhyjfXEE'});
});

Template['layout_map'].helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(38.441804, -122.711617),
        zoom: 8
      };
    }
  }
});

Template['layout_map'].onCreated(function(){
  GoogleMaps.ready('map', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance,
			  title: 'Russian River Brewing Company',
			  label: 'Russian River Brewing Company'
      });
    });
});


Template['layout_map'].events({
});
