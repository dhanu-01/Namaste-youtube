export const POPULAR_URL ='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=' + process.env.REACT_APP_YOUTUBE_API_KEY;

export const SEARCH_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=' + process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';


export const exportLiveCount = 20;
//live chat >>> Infinite scroll >>>>>> Pagination

/// DATA (LIVE)

// -> web sockets (no regular interval)  (Trading apps, Zerodha, watsapp)
// -> API polling  ui request the server .... data flows from server to the ui (interval)  (GMAIL, Cricbuzz)
