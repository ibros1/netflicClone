import React from 'react'
import Banner from '../components/browse/Banner'
import Header from '../components/browse/Header'
import Row from '../components/browse/Row'
import Footer from '../components/footer/Footer'
import MovieModal from '../MovieModal'

import requests from '../request'



const Browse = () => {
  return (
    <div className=' h-screen lg:h-[140vh] bg-gradient-to-b '>
      
     <Header/>
   
     <main className='relative pl-4 lg:pl-10  space-y-24 pt-40'>
      <Banner />
      <Row title={"Trending Now "} url={requests.fetchTrending} />
      <Row title={"Action Moveis "} url={requests.fetchActionMovies} />
      <Row title={"Top Rated "} url={requests.fetchTopRated} />
      <Row title={"Romance Moveis "} url={requests.fetchRomanceMovies} />
      <Row title={"Horror Moveis "} url={requests.fetchHorrorMovies} />
      <Row title={"Decomentries "} url={requests.fetchDocumantaries} />
      <Row title={"Comedy Moveis "} url={requests.fetchComedyMovies} />
      <Row title={"Original Movies "} url={requests.fetchNetflixOriginals} />
      <MovieModal />
      </main>
  
    </div>
  )
}

export default Browse