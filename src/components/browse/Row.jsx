import React, { useEffect, useState, useRef } from 'react';
import requests from '../../request';
import axios from 'axios';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import BASE_IMAGE_URL from '../../constants';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../../atom/atom'

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [isScroll, setIsScroll] = useState(false);
  const rowRef = useRef(null);
  const[showModel, setShowModel] = useRecoilState(modalState);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(url);
      setMovies(data.results.slice(0, 10000));
    };
    fetchMovies();
  }, []);

  
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

  const handleScroll = (direction) => {
    setIsScroll(true);

    if (rowRef.current) {
      const { clientWidth, scrollLeft } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className='h-60 cursor-pointer'>
      <h2 className='text-[20px] font-semibold '>{title}</h2>
      <div className='group relative md:ml-2'>
        <BsChevronLeft
          onClick={() => handleScroll('left')}
          className={`${
            !isScroll && ''
          } absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
        />
        <div
          ref={rowRef}
          className='flex items-center space-x-2.5 md:space-x-4.5 overflow-x-scroll scrollbar-hide md:p-4'
        >
     
          {movies &&
            movies.map((movie) => (
              <div
                key={movie.id}
                className='relative h-100% min-w-[170px] md:h-80 md:hover:scale-105 '
                
                onClick={ () => {
            setShowModel(true);
            setMovies(trending)
          }}>
                <img
                  src={BASE_IMAGE_URL + movie.poster_path}
                  alt=''
                  className='rounded-sm object-cover transition duration-500 md:rounded'
                  
                />
              </div>
            ))}
           <div className='mb-100px md:mb-100px'>
            </div> 
        </div>
        <BsChevronRight
          onClick={() => handleScroll('right')}
          className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
        />
      </div>
    </div>
  );
};

export default Row;
