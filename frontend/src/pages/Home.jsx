import React from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'
const containerStyle = {
  width: '400px',
  height: '400px'
}

const center = {
  lat: -3.745,
  lng: -38.523
}
export default function Home() {
  // const initMap = () => {
  //   const centerMap = { lat: 40.7128, lng: -74.0060}
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     center: centerMap,
  //     zoom: 10,
  //   });
  // }
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAoD_LbQQXbvMnByd0fzqzweDXOjOvjylc'
  })
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
    const handleClick = async () => {
      const res = await fetch('/api/events', {
        method:'POST',
        body : JSON.stringify({
          //insert thing here
        }),
    })

    const json = await res.json()

    if(!res.ok){
console.log('good')
    } 
    else{
      console.log('error')
    }
  }

  return (
    
    <div>
          {isLoaded && <GoogleMap mapContainerClassName={containerStyle} center={center} zoom={10} onLoad={onLoad}></GoogleMap>}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <button style={{ marginRight: '10px' }}>Button 1</button>
              <button onClick={handleClick} style={{ marginRight: '10px' }}>Button 2</button>
              <button>Button 3</button>
            </div>
            </div>
  )
}
