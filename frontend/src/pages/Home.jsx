import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
export default function Home() {
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

      useEffect(() => {
        const fetchData = async () => {
          try {
        const response = await fetch('https://mysite-isdc.onrender.com/api/events', {
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
      }, []);


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
  if(!updatedEvents){ return <div>Loading...</div> 
  }else {
  return (
    
    <div className='flex justify-center flex-col'>
       <APIProvider apiKey={'AIzaSyAoD_LbQQXbvMnByd0fzqzweDXOjOvjylc'} className='m-5'>
      <div style={{ height: "75dvh", width: "100%" }}>
        <Map defaultZoom={15} defaultCenter={position} mapId={'2e0f38f7239851a2 '}>
          {updatedEvents.map(tag => (
            <div key={tag.id}>
            <AdvancedMarker position={tag.location} onClick={()=>flipOpen(tag.id)}>
            <span className='text-3xl'>{tag.image}</span>
            </AdvancedMarker>
          {tag.open &&  <InfoWindow position={tag.location} onCloseClick={()=>flipOpen(tag.id)}>
              <div>
                <h3 className='text-3xl'>{tag.title}</h3>
                <p>{tag.description}</p>
                <p>Starts: {format(tag.start_at)}</p>
                <p>Ends: {format(tag.end_at)}</p>
              </div>
            </InfoWindow> }
            </div>
          ))}
        </Map>
      </div>
    </APIProvider>
            <div className='w-full flex justify-around p-3 bg-secondary flex-col lg:flex-row'>
              <button className='bg-primary rounded-full px-20 flex my-5 lg:py-0  justify-center' style={{ marginRight: '10px' }}><svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#ffffff" d="M10.5 20a1.5 1.5 0 0 0 3 0v-6.5H20a1.5 1.5 0 0 0 0-3h-6.5V4a1.5 1.5 0 0 0-3 0v6.5H4a1.5 1.5 0 0 0 0 3h6.5z"></path></g></svg></button>
              <button className='bg-primary rounded-full px-20 flex  my-5 lg:py-0 justify-center' style={{ marginRight: '10px' }}><svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"></path></svg></button>
              <button className='bg-primary rounded-full px-20 flex  my-5 lg:py-0 justify-center' style={{ marginRight: '10px' }}><svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} viewBox="0 0 48 48"><path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M41.7 42.5s0-1.609-.804-4.826c-.975-3.898-3.219-6.435-8.046-6.435h-17.7c-4.827 0-7.071 2.537-8.046 6.435C6.3 40.89 6.3 42.5 6.3 42.5m9.655-27.348c0 2.996.433 6.281 1.609 8.044C19.06 25.442 21.6 26.413 24 26.413c2.49 0 4.937-.97 6.436-3.217c1.175-1.763 1.61-5.048 1.61-8.044c0-2.247-.805-9.652-8.046-9.652s-8.046 5.907-8.046 9.652M41.7 42.5H6.3"></path></svg></button>
            </div>
            </div>
  )}
}
