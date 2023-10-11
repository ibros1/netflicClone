import React, { useEffect, useState } from 'react';
import requests from '../../request';
import axios from 'axios';
import BASE_IMAGE_URL from '../../constants';
import{MdPlayArrow , MdInfo} from 'react-icons/md';
import { modalState, movieState } from '../../atom/atom'
import { useRecoilState } from 'recoil';

const Banner = () => {
  const [trending, setTrending] = useState([]);
  const[showModel, setShowModel] = useRecoilState(modalState);
   const [movie,setMovie] =useRecoilState (movieState)

  useEffect(() => {
    const  fetchNetflixOriginals  = async () => {
     const {data} = await axios.get(requests.fetch);
      setTrending(
        data.results [Math.floor(Math.random() * data.results.length)]
      );
    }
     fetchNetflixOriginals();
     }, []);


     useEffect(() => {
     const   fetchRomanceMovies = async () => {
      const {data} = await axios.get(requests. fetchRomanceMovies);
       setTrending(
         data.results [Math.floor(Math.random() * data.results.length)]
       );
     }
     fetchRomanceMovies();
      }, []);



  return(

        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end mt-[10%]  md:mt-[0%]'>

        <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen '>
       <img src={`${
        BASE_IMAGE_URL + trending.backdrop_path || trending.posters_path}`} 
       alt=""
       className='h-screen w-screen object-cover'

       />

        </div >
        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
          {trending.title || trending.name || trending.original_name}</h1>
        <p className='max-w-xs text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
          {trending.overview}
        </p>
        <div className="flex items-center space-x-2">
          <button className="flex items-center rounded bg-white px-5 py-1 text-black transition hover:bg-gray-200 md:px-7 md:py-2 md:text-lg"
           onClick={ () => {
            setShowModel(true);
            setMovie(trending)
          }}
          >
                  
          
          <MdPlayArrow className="mx-2 h-6 w-6 md:h-8 md:w-8" />
          Play
            </button>

            <button className="flex items-center rounded bg-[#5a7272] px-5 py-1 hover:bg-[#718a8a] md:px-7 md:py-2 md:text-lg">
            <MdInfo className="mx-2  h-6 w-6 md:h-8 md:w-8" /> More Info
          </button>
        </div>
        </div>
 )
       };

    export default Banner;
