
import Icon from '../assets/Nv.jsx'
import google from '../assets/google.png'
import { ImSearch, ImMic } from 'react-icons/im'
import { BsKeyboardFill } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Profile = "https://media.licdn.com/dms/image/D4D03AQGF4s_-VKiesA/profile-displayphoto-shrink_100_100/0/1676294948698?e=1701302400&v=beta&t=A5iw8f1S3rMt3cZfhnm7q6bCv27CVo2_OXuBtt9cPzI"

const Home = () => {

  //state for query
  const [query, setQuery] = useState('');
  

  return (
    <>
      <nav className='flex text-sm mb-28  items-center justify-end gap-6 p-4' >

        <a href='mailto:sahiltambe81922@gmail.com' >Gmail</a>
        <p>Images</p>
        <Icon />
        <Link to={'https://www.linkedin.com/in/sahil-tambe-77b181230/'}><img className='w-10 rounded-full' src={Profile} alt="profile" /></Link>
      </nav>
      <div className='flex flex-col items-center gap-5'>
        <img className='w-36 sm:w-56' src={google} alt="google" />
        <div className='h-11 w-72 sm:w-[32rem] text-slate-400 flex justify-start gap-2 items-center p-2 border-[#E3E3E3] border-2 border-solid rounded-full'>
          <ImSearch />
          <div className="w-11/12 flex items-center gap-2">
            <input
              type="search"
              name="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value) }}
              className="flex-1 bg-transparent border-none outline-none text-black placeholder-slate-400"
              placeholder="Search..."
            />
            <div className='flex gap-3'>
              <BsKeyboardFill />
              <ImMic />
            </div>
          </div>
        </div>

        <div className='flex gap-8'>

          {/* redirect to /search */}
          <Link className='btn' to={`/search/${query}`} >Search</Link>
          <Link className='btn' to={`/images/${query}`} >Im feeling lucky</Link>
        </div>
      </div>
      <footer className='bg-[#F2F2F2F2] text-slate-500 flex gap-3 flex-col p-2  w-screen absolute bottom-0'>
        <p>India</p>
        <div className='flex flex-col sm:flex-row justify-between items-center '>
          <div className='flex gap-5  '>
            <p>About</p>
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search works</p>
          </div>
          <div className='flex gap-5'>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
