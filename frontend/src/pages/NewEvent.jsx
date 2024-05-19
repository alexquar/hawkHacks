import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

import {
    APIProvider,
    Map,
    Marker,
    InfoWindow,
  } from "@vis.gl/react-google-maps";
import Select from 'react-select'
import { useAuthContext } from '../hooks/useAuthContext';
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
    { value: 'goose', label: 'Goose' },
];
export default function NewEvent() {
  const {user} = useAuthContext()
  const navigate = useNavigate()
const [title,setTitle] = useState('')
const [description,setDescription] = useState('')
const [themes,setThemes] = useState(null)
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
    setMarkerPosition(selectedLocation);
    setShowDialog(false);
  }
const handleSubmit = async (e) =>{
    e.preventDefault()
    const event = {
        description,
        start_at: startTime,
        end_at: endTime,
        title,
        theme: themes.value,
        latitude: markerPosition.lat,
        longitude: markerPosition.lng,
        user_id:user.id
    }
    console.log(event)
    const res = await fetch('https://mysite-isdc.onrender.com/api/events', {
        method:'POST',
        body : JSON.stringify(event),
        headers : {
            'Content-Type':'application/json',
            "Accept": "application/json",
        }
    })

    const json = await res.json()
    if(!res.ok){
        console.log('error')
    } 
    console.log(json)
    navigate('/')
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
      <Select options={options}  onChange={(option) => setThemes(option)} value={themes} required />
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
    <button className="btn-primary" onClick={onAddLocation}>
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
