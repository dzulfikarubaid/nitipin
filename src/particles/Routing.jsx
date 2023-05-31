import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder"
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";



export default function Routing() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      lineOptions: {
        styles: [
          { color: "blue", opacity: 0.5, weight: 5 },
        ]
      },
      totalDistanceRoundingSensitivity: 0.5,
      position : "bottomright",
      waypoints: [L.latLng(-7.282356,112.7949253), L.latLng(-7.266012015562123,112.78615951538087)],
      routeWhileDragging: true,
      showAlternatives: true,
      fitSelectedRoutes: true,
      altLineOptions: {
        styles: [
          { color: "black", opacity: 0.15, weight: 9 },
          { color: "white", opacity: 0.8, weight: 6 },
          { color: "blue", opacity: 0.5, weight: 2 },
        ],
      },
      createMarker: function (i, waypoints, n) {
        var startIcon = L.icon({  
          iconUrl: 'https://png.pngtree.com/png-vector/20221219/ourmid/pngtree-delivery-boy-with-food-png-image_6528630.png',
          iconSize: [40, 40],
        })
        var destinationIcon = L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
          iconSize: [20],
        })
        if(i===0){
          return L.marker(waypoints.latLng, {icon: startIcon, draggable: true})
        }
        return L.marker(waypoints.latLng, {icon: destinationIcon, draggable: true})
      },
      geocoder: L.Control.Geocoder.nominatim()
    })
    .on('routeselected', function(e) {
      var route = e.route;
      var output = route.inputWaypoints
      var lng1 = output[0].latLng.lng
      var lat1 = output[0].latLng.lat
      var lng2 =  output[1].latLng.lng
      var lat2 = output[1].latLng.lat
      console.log(lng1, lat1, lng2, lat2)
  })
    .addTo(map);
    return () => map.removeControl(routingControl);
  }, [map]);

  

  return null;
}
