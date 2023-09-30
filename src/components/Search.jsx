/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../utils/data'




const Search = () => {

  const query = useParams().query;
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      getData(query , setData ,1)
    } catch (e) {
      console.log(e)
    }
  }, [query])

  const av = data.map(item => (
    <li className='py-3 sm:w-8/12' key={item.title}>
      <div className='flex gap-2'>
        <img className='w-5 h-5 rounded-full' src={item.pagemap.metatags[0]['og:image']} alt={item.pagemap.metatags[0]['og:image:alt']} />
        <p className='text-sm overflow-hidden text-[#9485a1]'>{item.formattedUrl}</p>
      </div>
      <a href={item.link} className='text-blue-800 text-xl' >{item.title}</a>
      <p
        className='text-[#5f6368] text-sm '
        dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}
      ></p>
    </li>
  ))

  return (
    <main className='px-6'>
      <ol className=' sm:px-36'>{av}</ol>
    </main>
  )
}

export default Search
