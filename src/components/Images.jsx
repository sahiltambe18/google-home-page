import { Link, useParams } from 'react-router-dom'
import { getData } from '../utils/data'
import { useEffect, useState } from 'react';


const Images = () => {

  const query = useParams().query;

  const [data, setData] = useState([])


  useEffect(() => {
    try {
      getData(query , setData ,2)
    } catch (e) {
      console.log(e)
    }
  }, [query])

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
