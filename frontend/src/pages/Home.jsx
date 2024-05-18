import React from 'react'
import { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
export default function Home() {
  const position = { lat: 43.4723, lng: -80.5449};
  const [open, setOpen] = useState(false);
  return (
    
    <div className='flex justify-center flex-col mt-5'>
       <APIProvider apiKey={'AIzaSyAoD_LbQQXbvMnByd0fzqzweDXOjOvjylc'} className='m-5'>
      <div style={{ height: "75dvh", width: "100%" }}>
        <Map defaultZoom={15} defaultCenter={position} mapId={'2e0f38f7239851a2 '}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>I'm in Waterloo</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <button style={{ marginRight: '10px' }}>Button 1</button>
              <button style={{ marginRight: '10px' }}>Button 2</button>
              <button>Button 3</button>
            </div>
            </div>
  )
}
