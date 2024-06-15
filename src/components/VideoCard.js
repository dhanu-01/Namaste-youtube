import React from 'react'

const VideoCard = ({info}) => {

  const {snippet,statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;
  

  return (
    <div className='p-2 m-2 w-64'>
        <img src={thumbnails.medium.url} alt="videoImg" className='rounded-lg'/>
            <p className='font-bold text-lg truncate text-ellipsis overflow-hidden'>{title}</p>
            <p className='truncate text-sm'>{channelTitle}</p>
            <div className='flex'>
                <p>{Math.floor(statistics?.viewCount / 100)} Views </p>
                 &nbsp;.&nbsp;
                <p>9 days ago</p>
            </div>
    </div>
  )
}

export default VideoCard