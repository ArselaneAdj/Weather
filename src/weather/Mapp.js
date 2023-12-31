import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useEffect } from "react";






const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 36.7586,
  lng: 33.4623
};

function MyComponent() {

  useEffect(() => {
    document.title = 'Map';
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCMz7gU4hJP8KghnRFrciYztTL_KR-hw2M"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        defaultZoom={1}
        onLoad={onLoad}
        onUnmount={onUnmount}
        lat={45.756659}
        lng={21.228703}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)