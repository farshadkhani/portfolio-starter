import React from 'react';
import axios from "axios"
import { useState } from "react"
const App = () => {
 const [data , setdata] = useState({});
 const [location , setlocation] = useState("");
   const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a0dc9c7f504d34f035fef87b65a0d1a9`;

   const searchLocation =(event)=>{
     if (event.key === "Enter"){
      axios.get(url).then((response)=>{
        setdata(response.data)
      })
      setlocation("")
     }
   }
  return (


              <div className="app overflow-hidden "> 
             
                <img className='w-[100%] h-[100%] object-cover z-[-5] absolute   ' alt=" " src="./bgg.jpg"/>
                <div className='search m-auto text-center p-10  text-white'>
                  <input type='text'
                  className='m-auto h-10 w-100 bg-transparent rounded-[30px] border-white/50 outline-none border-2 p-5'
                  value={location}
                  onChange={event =>setlocation(event.target.value)}
                  placeholder='Enter Location ...'
                  onKeyPress={searchLocation}/>
                </div>
              <div className="h-[100vh] w-[100%] container z-[2] max-w-[1200px] m-auto flex flex-col justify-around text-center ">
                    {/* <img   alt="" src='./Logo.png ' className='w-[170px] lg:w-[240px] ml-[-50px] h-[130px] overflow-hidden'  /> */}
                  <div className='top'>
                    <div className='location'>
                      <span className='span2'> {data.name} </span>
                    </div>
                    <div className='temp'>
                      {data.main ? <h1 className='h1'>{data.main.temp.toFixed()} °F</h1> : null}
                    </div>
                    <div className='desc flex flex-col justify-center align-center text-center'>
                    {data.weather ? <img className='m-auto' src={`./${data.weather[0].icon}@2x.png`}  alt="" width={150} /> : null }
                      {data.weather ? <p className='p'>{data.weather[0].main }</p> : null }
                    </div>
                  </div>

{data.name !== undefined  && 

<div className='bottom flex justify-between lg:justify-around bg-black/20 pt-3 pb-3 p-1 rounded-[25px]   w-[96%]      lg:max-w-[50%] m-auto'>
<div className='feels'>
{data.main ? <p className='p'>{data.main.feels_like.toFixed()  } °F</p> : null}
  <p className='p2'>Feels Like</p>
</div>
<div className='humidity'>
{data.main ? <p className='p'>{data.main.humidity.toFixed()   } %</p> : null}
  <p className='p2'>Humidity</p>
</div>
<div className='wind'>
{data.wind ? <p className='p'>{data.wind.speed.toFixed()  } MPH</p> : null}
  <p className='p2'>Wind Speed</p>
</div>
</div>
}

                </div>
              </div>

  );
};

export default App;
