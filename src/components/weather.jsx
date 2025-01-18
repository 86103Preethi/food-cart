import React, { useState, useEffect } from 'react';
import cloudy from '../images/weather/clouds.png';
import rainy from '../images/weather/rain.png';
import suncomes from '../images/weather/suncomes.png';
import stormy from '../images/weather/storm.png';
import temperature from '../images/weather/temperature-list.svg';
import wind from '../images/weather/wind.svg';
import sun from '../images/weather/sun.png';
import snow from '../images/weather/weather.png';
import PropTypes from 'prop-types';

const WeatherDetails = ({icon,temp,location,country,lat,long,hum,windspeed}) => {
    return(
        <>
            <div className='flex justify-center p-2 my-5'>
                <img src={icon} alt='Sun Shine' className='rounded-lg w-40 h-50'/>
            </div>

            <div className='text-center'>
                <div className='font-medium text-5xl mb-2'>{temp}C</div>
                <div className='uppercase font-medium text-white text-5xl mb-2'>{location}</div>
                <div className='mb-2 font-medium'>{country}</div>
                <div className='flex justify-center gap-4'>
                    <div className='flex flex-col'>
                        <span className=''>Latitude</span>
                        <span className=''>{lat}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className=''>Longitude</span>
                        <span className=''>{long}</span>
                    </div>
                </div>
            </div>


            <div className='flex justify-between mx-10 my-10'>

                <div>
                    <div className='m-2'>
                        <img src={temperature} alt='temperature' className='text-white w-20 h-30'/>
                    </div>
                    <div className='flex flex-col ml-3'>
                        <span className=''>{hum}%</span> 
                        <span className=''>Humidity</span>
                    </div>
                </div>
             

                <div>
                    <div className='m-2'>
                        <img src={wind} alt='Sun Shine' className='text-white w-20 h-30'/>
                    </div>
                    <div  className='flex flex-col ml-3'>
                        <span className=''>{windspeed}%</span> 
                        <span className=''>Wind Speed</span>
                    </div>
                </div>


            </div>
        </>
    )
};

WeatherDetails.propTypes = {
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    windspeed: PropTypes.number.isRequired,
}



const Weather = () => {
    const weatherIcon = {
        '04d' : suncomes,
        '50n' : sun,
        '10d' : sun,
        '11d' : stormy,
        '13d' : snow,
        '02d' : cloudy,
        '09d' : rainy, 
    }
    const [icon,setIcon] = useState('sun');
    const [temp,setTemp] = useState(0);
    const [location,setLocation] = useState('');
    const [country,setCountry] = useState('');
    const [lat,setLat] = useState(0);
    const [long,setLong] = useState(0);
    const [hum,setHum] = useState(0);
    const [windspeed,setWindspeed] = useState(0);
    const [text,setText] = useState('chennai');
    const [loading,setLoading] = useState(false);


    useEffect(() => {
       searchApi();
    }, []);


    const searchApi = async() => {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=45841bae654177c98405cfb0e5e1f2a8&units=Metric';

        try{
        let response = await fetch(url);
        let data = await response.json(); 
        console.log("data",data);
        if(data.cod === '404'){
            setLoading(false)
            setIcon(sun);
        }else{
            setLocation(data.name);
            setCountry(data.sys.country);
            setTemp(Math.floor(data.main.temp));
            setLat(data.coord.lat);
            setLong(data.coord.lon);
            setHum(data.main.humidity);
            setWindspeed(data.wind.speed);
            const iconCode = data.weather[0].icon;
            // console.log("icon",iconCode,weatherIcon[iconCode]);
            if (weatherIcon[iconCode]) {
            setIcon(weatherIcon[iconCode]);
            } else {
            setIcon(sun);
            }
        }

        }catch(error){
        console.error("error",error)
        }finally{
            setLoading(false);
        }
    }

    const handleSearch = (e) => {
        setText(e.target.value);
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
        searchApi();
        }
    }

  return (
    <>
        <div className='container'>
            <div className='flex justify-center gap-3 mt-10'>
                <input  type='text' placeholder='Search the City Name' className='border rounded-full p-3 w-80' onChange={handleSearch} value={text} onKeyDown={handleKeyDown}/>
                <button className='border bg-white rounded-full p-2.5' onClick={() => {searchApi()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
           <WeatherDetails icon={icon} temp={temp} location={location} country={country} lat={lat} long={long} hum={hum} windspeed={windspeed}/>
        </div>
    </>
  )
}

export default Weather