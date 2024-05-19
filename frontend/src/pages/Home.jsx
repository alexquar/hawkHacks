import React, { useId } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useFilterContext } from '../hooks/useFilterContext';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useAuthContext } from '../hooks/useAuthContext';
export default function Home() {
  const {filter} = useFilterContext()
  console.log(filter)
const {user} = useAuthContext()
const uid = user.id
  const position = { lat: 43.4723, lng: -80.5449};
  const flipOpen = (id) => {
    setUpdatedEvents(updatedEvents.map(tag => {
      if(tag.id === id){
        tag.open = !tag.open
      }
      return tag
    }))
  }

      const [updatedEvents, setUpdatedEvents] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
      useEffect(() => {
        const fetchData = async () => {
          try {
        const response = await fetch(`https://mysite-isdc.onrender.com/api/events?filter=${filter}`, {
          method: 'GET',
          headers: {
            "Accept": "application/json",
          }
        });
        const events = await response.json();
        console.log(events);
        setUpdatedEvents(events.objects.map(event => ({
          ...event,
          open: false,
          image: getEmoji(event.theme),
          location: { lat: event.latitude, lng: event.longitude },
        })))
        console.log(updatedEvents)
          } catch (error) {
        console.error(error);
          }
        };

        fetchData();
      }, [filter]);


  const getEmoji = (theme) => {
    const emojiMap = {
      music: '🎵',
      sports: '⚽️',
      food: '🍔',
      technology: '📱',
      art: '🎨',
      education: '🎓',
      business: '💼',
      health: '🏥',
      fashion: '👗',
      travel: '✈️',
      goose:'🪿'
    };

    return emojiMap[theme] || '';
  }
  const format = (dateTime) => {

    // Split the string on 'T'
    let [date, time] = dateTime.split('T');
    
    let [hourMinute] = time.split(':00.000Z');
    
    let result = `${date} ${hourMinute}`;
    
    return result
  }
  const deleteEvent = async (id) => {
    try {
      const response = await fetch(`https://mysite-isdc.onrender.com/api/events/${id}`, {
        method: 'DELETE',
        body : JSON.stringify({user_id:uid}),
        headers: {
          'Content-Type':'application/json',
          "Accept": "application/json",
        }
      });
      setUpdatedEvents(updatedEvents.filter(event => event.id !== id))
    } catch (error) {
      console.error(error);
  }}
  if(!updatedEvents){ return <div>Loading...</div> 
  }else {
  return (
    
    <div className='flex justify-center flex-col'>
       <APIProvider apiKey={'AIzaSyAoD_LbQQXbvMnByd0fzqzweDXOjOvjylc'} className='m-5'>
      <div style={{ height: "100dvh", width: "100%" }}>
        <Map defaultZoom={15} defaultCenter={position} mapId={'2e0f38f7239851a2 '}>
          {updatedEvents.map(tag => (
            <div key={tag.id}>
            <AdvancedMarker position={tag.location} onClick={()=>flipOpen(tag.id)}>
            <span className='text-3xl'>{tag.image}</span>
            </AdvancedMarker>
          {tag.open &&  <InfoWindow position={tag.location} onCloseClick={()=>flipOpen(tag.id)}>
              <div className='bg-white
              shadow-primary 
    shadow-md 
    rounded-md 
    py-3 px-4 my-4 
    relative max-w-xs
    overflow-clip text-center'>
                <h1 className='text-3xl text-primary my-3 px-1'>{tag.title}</h1>
                <p className=' my-3' >{tag.description}</p>
                <p className=' my-3'>Starts: {format(tag.start_at)}</p>
                <p className=' my-3'>Ends: {format(tag.end_at)}</p>
              {uid == tag.user_id &&  <button onClick={() => deleteEvent(tag.id)} className='bg-primary text-center text-white hover:text-primary hover:bg-white rounded-full p-3 my-5'>Delete Event</button>}
              </div>
            </InfoWindow> }
            </div>
          ))}
        </Map>
      </div>
    </APIProvider>
            </div>
  )}
}
