import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';




const Images = () => {

  const query = useParams().query;

  const key = import.meta.env.VITE_REACT_APP_SEARCH_API
  const id = import.meta.env.VITE_REACT_APP_CUSTOM_ID

  const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=${query}&searchType=image`;

  const [data, setData] = useState([])


  useEffect(() => {
    try {
      axios.get(url)
        .then((res) => { setData(res.data.items) })
    } catch (e) {
      console.log(e)
    }
  }, [])

  const vids = data.map(item => (
    <div className='text-[#75777a] overflow-clip' key={item.link} >
      <Link to={item.image.contextLink}><img className='h-40 w-80 sm:w-96 sm:h-44 rounded-md hover:shadow-2xl ' src={item.link} alt={item.title} /></Link>
      <span className='text-xs'>{item.displayLink}</span>
      <p className=' text-xs  sm:text-sm'>{item.snippet}</p>
    </div>
  ))


  return (
    <main className='p-3 grid grid-cols-3  sm:grid-cols-5 gap-3' >
      {vids}
    </main>
  )
}

export default Images
