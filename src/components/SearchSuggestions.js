import React from 'react'

const SearchSuggestions = ({suggestions}) => {
  return (
    <div className='absolute w-[30rem] z-50 border rounded-lg mt-2 bg-gray-50'>
    <ul className=''>
    {
       suggestions.map((suggestion,index) => (
            <li key={index} className='p-2 hover:bg-gray-200 cursor-pointer'> 
                <img src='https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png' className = 'h-4 inline-block'alt='searchIcon'/>
                <span className='mx-2'>{suggestion}</span>
            </li>
       ))
    }
    </ul>
    </div>
  )
}

export default SearchSuggestions