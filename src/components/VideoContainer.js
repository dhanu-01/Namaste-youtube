import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { POPULAR_URL } from '../utils/constants'
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        getPopularVideos();
    },[])

    const getPopularVideos = async () => {
        const response = await fetch(POPULAR_URL);
        const data = await response.json();
        setVideos(data.items);
    }

  return (
    <div className='grid grid-cols-4 mt-32 -z-10'>
       {videos?.length>0  && videos.map((video)=><Link to={'/watch?v=' + video.id} key={video.id}><VideoCard info={video}/></Link> ) }
    </div>
  )
}

export default VideoContainer