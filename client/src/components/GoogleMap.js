import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect } from 'react';


/// https://maps.googleapis.com/maps/api/geocode/json?latlng=46.49639813020755,-80.99861117865834&key=AIzaSyAjEu5jgZ4h62ka6lKGEx6cGJSX2FxettY


const containerStyle = {
    width: '50vw',
    height: '50vh'
  };
  
  const center = {
    lat: 43.653225,
    lng: -79.383186,
  };


  function GoogleMapContainer() {
    const { isLoaded, loadError } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAjEu5jgZ4h62ka6lKGEx6cGJSX2FxettY"
    })

    if(loadError) return <div>SHIIIIITTT</div>;
  
    const [map, setMap] = React.useState([]);

    const [pins, setPins] = React.useState([]);
  
  
    // const onLoad = React.useCallback(function callback(map) {
    //   const bounds = new window.google.maps.LatLngBounds();
    //   map.fitBounds(bounds);
    //   setMap(map)
    // }, [])
  
    // const onUnmount = React.useCallback(function callback(map) {
    //   setMap(null)
    // }, [])

    // const id = localStorage.setItem('id', JSON.stringify(1))

    // const getUserPins = async (id) => {
    //   try {
    //     const response = await fetch(`http://localhost:3000/pins/${id}`);
    //     const jsonData = await response.json();

    //     setMap(jsonData);
    //   }catch (err) {
    //     console.log(err.message)
    //   }
    // }

  //when page is open
    // useEffect(() => {
    //   getUserPins(id);
    // }, [])

    const onClick = (data)=>{
      console.log(data.latLng.lat())
      console.log(data.latLng.lng())
      localStorage.setItem("lat", JSON.stringify(data.latLng.lat()))
      localStorage.setItem("lng", JSON.stringify(data.latLng.lng()))
      

      setMap(current => [
        // ...current,
        {
          lat : data.latLng.lat(),
          lng : data.latLng.lng()
        }
      ]);
    }

  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
          onClick={onClick}
        >
          { map.map((marker, ind) => <Marker key ={ind} position={{lat:marker.lat, lng:marker.lng}}  />) }

          {/* { pins.map((marker, ind) => <Marker key ={ind} position={{lat:marker.lat, lng:marker.lng}}  />) } */}
          <></>
        </GoogleMap>
    ) : <>NOT WORKING</>
  }
  
  export default React.memo(GoogleMapContainer);