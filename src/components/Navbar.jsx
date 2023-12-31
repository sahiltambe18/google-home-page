import { useParams, Link } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'
import { useNavigate } from "react-router-dom";
import google from '../assets/google.png'
import { useState } from 'react'

const Navbar = () => {
    const Query = useParams().query;

    const [query, setQuery] = useState(Query)
    
    let navigate = useNavigate();

    // for handling keypress
    const handleKeyPress = (e) => {
        if (e.code === 'Enter') {
            return navigate(`/search/${query}`)
        }
    }



    return (
        <nav className='border-b '>
            <div className='flex flex-col sm:flex-row  items-center gap-1 sm:gap-8 w-screen p-3 sm:p-5'>
                <Link to={'/'}><img className='w-16 sm:w-36' src={google} alt="google" /></Link>
                <div className='h-11 w-11/12 sm:w-5/12 text-slate-400 sm:text-2xl flex justify-start shadow-xl gap-2 sm:justify-between items-center p-2 border-[#E3E3E3] border-2 border-solid rounded-full'>

                    <div className="w-11/12 flex items-center gap-2">
                        <input
                            type="search"
                            name="search"
                            value={query}
                            onChange={(e) => { setQuery(e.target.value) }}
                            className="flex-1 w-11/12 bg-transparent border-none outline-none text-black placeholder-slate-400"
                            placeholder="Search..."
                            onKeyDown={handleKeyPress}
                        />
                        <Link to={`/search/${query}`} className='text-[#4285f4]' ><ImSearch /></Link>
                    </div>
                </div>
            </div>
            <ul className='flex w-screen sm:w-7/12  sm:text-lg sm:justify-center sm:gap-11 justify-evenly mb-2'>
                <Link to={`/search/${query}`} className='options' >All</Link>
                <Link to={`/images/${query}`} className='options'>Images</Link>
                <Link to={`/videos/${query}`} className='options'>Videos</Link>
            </ul>
        </nav>
    )
}

export default Navbar
