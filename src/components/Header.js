import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/Redux/appSlice";
import {YOUTUBE_SEARCH_SUGGESTION } from "../utils/constants";
import SearchSuggestions from "./SearchSuggestions";
import { cacheResults } from "../utils/Redux/searchSlice";
import { useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery,setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const cacheResult = useSelector(store=>store.search);

    const toggleIcon = () => {
        dispatch(toggleMenu());
    }

    const getSearchSuggestions = async () => {
      const response = await fetch(YOUTUBE_SEARCH_SUGGESTION + searchQuery);
      const data = await response.json();
      console.log(data[1]);
      dispatch(cacheResults({
        [searchQuery] : data[1],
      }))
      setSearchSuggestions(data[1]);
    }

    useEffect(()=>{
      const timer =  setTimeout(()=>{
         if(cacheResult[searchQuery]){
            setSearchSuggestions(cacheResult[searchQuery]);
         }else{
            getSearchSuggestions();
         }
      },200);


       return () => {
         clearTimeout(timer);
       }

    },[searchQuery])

  return (
    <div className="grid grid-flow-col p-4  shadow-lg fixed top-0 w-full bg-white">
      <div className="flex h-10 col-span-1 cursor-pointer">
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="hamburgerIcon"
          onClick={toggleIcon}
        />
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          alt="YoutubeIcon"
        />
      </div>
      <div className="col-span-10 h-8">
        <div className="flex">
          <input type="text" className="border border-gray-600 rounded-l-full w-2/4 p-2 placeholder-[#737373] focus:outline-none focus:border-b-1  focus:border-blue-500" placeholder="Search" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}
           onFocus={()=>setShowSuggestions(true)}
           onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border border-gray-600 border-l-0 rounded-r-full py-2 px-4"><img src='https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png' className = 'h-5'alt='searchIcon'/></button>
         </div>
          {searchSuggestions?.length>0 && showSuggestions && <SearchSuggestions suggestions={searchSuggestions}/>}
      </div>
      <div className="h-6 w-6 col-span-1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt="YoutubeIcon"
        />
      </div>
    </div>
  );
};

export default Header;
