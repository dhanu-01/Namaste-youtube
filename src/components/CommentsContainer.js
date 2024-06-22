import React from 'react'

const commentsData = [
    {
        name : "Nikola Tesla",
        text : "Inventor of DC motor",
        replies : [
            {
                name : "Nikola Tesla",
                text : "Inventor of DC motor",
                replies : [
                    {
                        name : "Nikola Tesla",
                        text : "Inventor of DC motor",
                        replies : [
                            {
                                name : "Nikola Tesla",
                                text : "Inventor of DC motor",
                                replies : [
                                    {
                                        name : "Nikola Tesla",
                                        text : "Inventor of DC motor",
                                        replies : [
                                            {
                                                name : "Nikola Tesla",
                                                text : "Inventor of DC motor",
                                                replies : [
                                                    {
                                                        name : "Nikola Tesla",
                                                        text : "Inventor of DC motor",
                                                        replies : [
                                                            {
                                                                name : "Nikola Tesla",
                                                                text : "Inventor of DC motor",
                                                                replies : [
                                                                    {
                                                                        name : "Nikola Tesla",
                                                                        text : "Inventor of DC motor",
                                                                        replies : [
                                                                            {
                                                                                name : "Nikola Tesla",
                                                                                text : "Inventor of DC motor",
                                                                                replies : [
                                                                                    
                                                                                ]
                                                                            },
                                                                            {
                                                                                name : "Nikola Tesla",
                                                                                text : "Inventor of DC motor",
                                                                                replies : [
                                                                                
                                                                                ]
                                                                            },
                                                                            {
                                                                                name : "Nikola Tesla",
                                                                                text : "Inventor of DC motor",
                                                                                replies : [
                                                                                
                                                                                ]
                                                                            },
                                                                        ]
                                                                    },
                                                                ]
                                                            },
                                                            {
                                                                name : "Nikola Tesla",
                                                                text : "Inventor of DC motor",
                                                                replies : [
                                                                
                                                                ]
                                                            },
                                                            {
                                                                name : "Nikola Tesla",
                                                                text : "Inventor of DC motor",
                                                                replies : [
                                                                
                                                                ]
                                                            },
                                                        ]
                                                    },
                                                ]
                                            },
                                            {
                                                name : "Nikola Tesla",
                                                text : "Inventor of DC motor",
                                                replies : [
                                                
                                                ]
                                            },
                                            {
                                                name : "Nikola Tesla",
                                                text : "Inventor of DC motor",
                                                replies : [
                                                
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                name : "Nikola Tesla",
                                text : "Inventor of DC motor",
                                replies : [
                                
                                ]
                            },
                            {
                                name : "Nikola Tesla",
                                text : "Inventor of DC motor",
                                replies : [
                                
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name : "Nikola Tesla",
                text : "Inventor of DC motor",
                replies : [
                
                ]
            },
            {
                name : "Nikola Tesla",
                text : "Inventor of DC motor",
                replies : [
                
                ]
            },
        ]
    },
    {
        name : "Nikola Tesla",
        text : "Inventor of DC motor",
        replies : [
            {
                name : "Nikola Tesla",
                text : "Inventor of DC motor",
                replies : [
                
                ]
            },
            {
                name : "Nikola Tesla",
                text : "Inventor of DC motor",
                replies : [
                
                ]
            },
            {
                name : "Nikola Tesla",
                text : "Inventor of DC motor",
                replies : [
                
                ]
            },
            {
                name : "Nikola Tesla",
                text : "Inventor of DC motor",
                replies : [
                
                ]
            },
        ]
    },
    {
        name : "Nikola Tesla",
        text : "Inventor of DC motor",
        replies : [
            {
                name : "Nikola Tesla",
                text : "Inventor of DC motor",
                replies : [
                
                ]
            },
            {
                name : "Nikola Tesla",
                text : "Inventor of DC motor",
                replies : [
                
                ]
            },
            {
                name : "Nikola Tesla",
                text : "Inventor of DC motor",
                replies : [
                
                ]
            },
        ]
    },
    {
        name : "Nikola Tesla",
        text : "Inventor of DC motor",
        replies : [
        
        ]
    },

]

const Comments = ({data}) => {
    const {name,text,replies} = data;
    return (
        <div className='flex items-center gap-2 border-l-black rounded-lg bg-gray-100 w-3/4 p-1 m-2'>
            <div className='h-8 w-8'>
                 <img src= 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png' alt = 'userIcon'/>
            </div>
            <div>
               <p>{name}</p>
               <p>{text}</p>
            </div>

        </div>
    )
}

const CommentsList = ({comments}) => {
    return comments.map((comment,index)=>(
        <div key={index}>
            <Comments data = {comment}/>
            <div className='pl-10 border-l-black'>
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-4 p-2 w-[900px]'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments = {commentsData}/>
    </div>
  )
}

export default CommentsContainer