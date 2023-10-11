import { useRecoilState } from 'recoil';
import { Button, Modal } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { modalState, movieState } from './atom/atom'
import ReactPlayer from 'react-player'
import {FaPlay, FaPlus,  FaPause} from 'react-icons/fa';
import {SlVolume2, SlVolumeOff} from"react-icons/sl";
import {HiThumbUp} from"react-icons/hi";
import axios from 'axios'
import { Link } from 'react-router-dom'


const MovieModal = () => {

  const [showModal, setShowModal] = useRecoilState(modalState);
 const [movie, setMovie] = useRecoilState(movieState);
 const [key, setKey] = useState("");
 const [isPlaying, setIsPlaying] = useState(true);
 const [isMuted, setIsMuted] = useState(false);
 const [genres, setGenres] = useState([]);
 


const handleClose = () =>{
 setShowModal(false);
 setMovie(null);

};

useEffect(() => {

  
const fetchMovieTrail = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${
      movie?.media_type === "tv" ? "tv" : "movie"
    }/${movie?.id}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&append_to_response=videos`
  );
  setGenres(data?.genres);

  console.log("data", data?.videos.results [0].key)
  setKey(data?.videos.results [0].key);
};

 fetchMovieTrail();
  
},[movie]);


  return( <Modal 
  className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl rounded-md'
  open={showModal}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
    <>
 <div className="relative pt-[56.24%]" >
 <ReactPlayer
  width="100%"
  height="70%"
  style={{position:"absolute", top:0 , Left:0 }}

 url= {`https://www.youtube.com/watch?v=${key}`}
 playing={isPlaying}
muted={isMuted}

 />
 
<div className='absolute bottom-[30px] flex w-full items-center justify-between px-10 top-40'>
  <div className='flex space-x-2  '>
   < button className='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6] ' >
   {" "}
    {isPlaying ? (
     <>
  
     < FaPause onClick={() => setIsPlaying (false)}  className="h-7 w-7 text-black"/>
   Pause
   </>
    ):(
      <>
   <FaPlay onClick={() => setIsPlaying (true)} className="h-7 w-7 text-black"
   />
   Play
   </>
   )}

   </button>
   
   < button className=' flex h-11 w-11 items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10 cursor-pointer  ' onClick={() => setIsPlaying (false , true)}  > 
   
   {" "}
   <FaPlus className="h-6 w-6 "/>
   </button>
   <button className="modal-btn cursor-pointer">
								<HiThumbUp className="h-10 w-10" />
							</button>
  </div>
  <div>
  {isMuted ? (
   
     <SlVolumeOff  onClick={() => setIsMuted (false)} className="h-10 w-10 cursor-pointer "/>
  
  ): ( 
    
    <SlVolume2  onClick={() => setIsMuted (true)} className="h-10 w-10 cursor-pointer "/>
    
  )}
  </div>
</div>
</div>

<div  className=' flex flex-col rounded-b-md bg-[#181818] mt-[-180px] '>
<div className='flex space-y-16  px-10 py-8 pt-10  '>
  <div className='space-y-6 text-lg '> 
    <div className='flex items-center space-x-2'>
      
    <p
     className='font-semibold text-green-400 '>
      {movie?.vote_average *10} % Match
      </p>
    <p 
    className='font-light'>{movie?.release_date || MovieModal.first_air_date}
    </p>
    <div
     className='flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs'> HD
     </div>
    </div>
    <div>
      </div>
      <div className='font-bold text-[50px]'>
        {movie?.title}
      </div>
<div className='flex flex-col gap-x-10 gap-y-4 font-light' >
<p className="w-5/6">{movie?.overview}</p>
  <div>
    <span className='text-gray-400'>
      Genres:
    </span>
    {genres.map((genre) =>  genre.name).join (",")}
    
    </div>
</div>
<di>
  <span className='text-gray-400'>Oringinal Language :</span>
  {movie?.original_language}

</di>
<div>
  <span className='text-gray-400'>Total Votes: </span>
  {movie?.vote_count}
</div>
</div>
  </div>
</div>
</>
</Modal>
  )
};

export default MovieModal;