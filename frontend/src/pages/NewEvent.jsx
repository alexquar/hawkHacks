import React from 'react'
import { useState } from 'react'
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Marker,
    Pin,
    InfoWindow,
  } from "@vis.gl/react-google-maps";
import Select from 'react-select'
const options = [
    { value: 'music', label: 'Music' },
    { value: 'sports', label: 'Sports' },
    { value: 'food', label: 'Food' },
    { value: 'technology', label: 'Technology' },
    { value: 'art', label: 'Art' },
    { value: 'education', label: 'Education' },
    { value: 'business', label: 'Business' },
    { value: 'health', label: 'Health' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'travel', label: 'Travel' },
];
const markerPosition = { lat: 43.4723, lng: -80.5449 };
export default function NewEvent() {
const [title,setTitle] = useState('')
const [description,setDescription] = useState('')
const [theme,setTheme] = useState('')
const [long,setLong] = useState(null)
const [lat,setLat] = useState(null)
const [startTime,setStartTime] = useState('')
const [endTime,setEndTime] = useState('')
const [selectedLocation, setSelectedLocation] = useState({});
const [markerPosition, setMarkerPosition] = useState({ lat: 43.4723, lng: -80.5449 })
// store show dialog state to add location
const [showDialog, setShowDialog] = useState(false);
// store dialog location
const [dialogLocation, setDialogLocation] = useState("");
const handleMapClick = (mapProps) => {
      const lat = mapProps.detail.latLng.lat;
      const lng = mapProps.detail.latLng.lng;
      setShowDialog(true);
      setDialogLocation({ lat, lng });
      setSelectedLocation({ lat, lng });
  };
  const onAddLocation = () => {
    // setLat(selectedLocation.lat);
    // setLong(selectedLocation.lng);
    console.log(selectedLocation)
    setMarkerPosition(selectedLocation);
    setShowDialog(false);
  }
const handleSubmit = (e)=>{
    e.preventDefault()
}
  return (
    <form className='mt-10 w-full md:w-1/2' onSubmit={handleSubmit}>
        <h1 className='text-center text-3xl m-3'>New Event</h1>
      <label>
        <span>Title:</span>
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required 
        />
      </label>
      <label>
        <span>Description:</span>
        <input 
          type="text" 
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required 
        />
      </label>
      <label>
        <span>Start Time:</span>
        <input 
          type="datetime-local" 
          onChange={(e) => setStartTime(e.target.value)}
          value={startTime}
          required 
        />
      </label>
      <label>
        <span>End Time:</span>
        <input 
          type="datetime-local" 
          onChange={(e) => setEndTime(e.target.value)}
          value={endTime}
          required 
        />
      </label>
      <Select options={options}  onChange={(option) => setTheme(option)} required />
<div className='mt-2'>
<span>Location:</span>
 <APIProvider apiKey={'AIzaSyAoD_LbQQXbvMnByd0fzqzweDXOjOvjylc'} className='m-5'>
 <div className='my-2' style={{ height: "75dvh", width: "100%" }}>
<Map
  style={{ borderRadius: "20px" }}
  defaultZoom={15}
  defaultCenter={markerPosition}
  onClick={(mapProps) => handleMapClick(mapProps)}
> 
{showDialog && (
  // displays a dialog to add clicked location
  <InfoWindow position={dialogLocation}>
    <button className="btn primary" onClick={onAddLocation}>
      Add this location
    </button>
  </InfoWindow>
 )}
<Marker position={markerPosition} />
</Map>
</div>
</APIProvider>
</div>


      <button className="btn-primary my-5">Submit</button>
    </form>
    
  )
}