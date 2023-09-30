import axios from 'axios'

const getData = (query , setData , type) => {
    const key = import.meta.env.VITE_REACT_APP_SEARCH_API
    const id = import.meta.env.VITE_REACT_APP_CUSTOM_ID

    let url;

    //type codes for identifying request 

    if(type===1){
        // for all search
        url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=${query}`;
    }
    else if(type === 2){
        //for images 
        url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=${query}&searchType=image`;
    }
    else if(type === 3){
        //for videos
         url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${key}`;
    }

        try {
            //fetching and setting data in data state
            axios.get(url)
                .then((res) => { setData(res.data.items) })

            console.log("changed")
        } catch (e) {
            console.log(e)
        }

}

export { getData}