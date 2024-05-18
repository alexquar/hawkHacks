import React from 'react'

export default function Home() {
  <script defer src="https://maps.googleapis.com/maps/js?AIzaSyAoD_LbQQXbvMnByd0fzqzweDXOjOvjylc&callback=initMap"></script>
  const initMap = () => {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  return (
    <div>
            <div style={{ width: '100%', height: '80vh' }}>
              
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <button style={{ marginRight: '10px' }}>Button 1</button>
              <button style={{ marginRight: '10px' }}>Button 2</button>
              <button>Button 3</button>
            </div>
            </div>
  )
}
