import { Link, useParams } from 'react-router-dom'
import { getData } from '../utils/data'
import { useEffect } from 'react';
import { useState } from 'react';

const Videos = () => {

  const query = useParams().query;
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      getData(query , setData ,3)
    } catch (e) {
      console.log(e)
    }
  }, [query])

  const vids = data.map(item => {

    const date = item.snippet.publishedAt

    const dateObject = new Date(date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = dateObject.getFullYear();


    const formattedDate = `${day}-${month}-${year}`;
    const ytUrl = `https://www.youtube.com/watch?v=${item.id.videoId}`

    return (
      <Link to={ytUrl} key={item.id.videoId}>
        <div className='flex text-sm gap-3 sm:text-base hover:shadow-xl' >
          <img className='w-44 rounded-md ' src={item.snippet.thumbnails.medium.url} alt={item.snippet.description} />
          <div>
            <h2 className='text-blue-800 font-semibold' >{item.snippet.title}</h2>
            <p>YouTube</p>

            <span className='text-xs'>{formattedDate}</span>
          </div>
        </div>
      </Link>
    )

  })

  return (
    <div className='flex flex-col gap-3 p-3 sm:px-48'>
      {vids}
    </div>
  )
}

export default Videos


// 