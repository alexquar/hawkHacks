import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export default function About() {
return (
    <div className='mt-10 flex flex-col justify-center items-center'>
        <div className="hero flex justify-center flex-col">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">Hey there!</h1>
                    <p className="py-6 mx-4 md:mx-0 ">Welcome to Geese Spotter. We're here to help you find your place on campus. You can use this site to find current events in a wide range of categories accross the University of Waterloo Campus!</p>
                    <Link to='/' className="bg-primary text-center text-white hover:text-primary hover:bg-white rounded-full p-3 my-5">Get Started</Link>
                </div>
            </div>
        </div>
        <div className="sm:flex items-center">
            <div className="sm:w-1/2 px-2">
                <div className="image object-center text-center">
                    <img src={logo} alt='logo' />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <span className="text-words border-b-2 border-secondary uppercase">Why us?</span>
                    <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">It is just so <span className="text-primary">simple</span>
                    </h2>
                    <p className="text-gray-700 my-2">
                        To view current campus events, simply click on the "Get Started" button above. There you can see events that are distinguishable in theme by emoji and you can even filter events by category to find the perfect event for you. To learn more about an activity just click on it to see it's title, description and timeline. If you want to create your own function you can do so by clicking on the "Add Event" button in the navigation bar and follow the simple process. No matter what you want to particpate in we'll help you spot what interests you.
                    </p>
                    <p className="text-gray-700 my-2">
<span className='text-accent'>Have fun! </span> -Spot the goose (Pictured left)</p>
                </div>
            </div>
        </div>
        <footer className="footer footer-center text-center w-full text-white bg-primary p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by Geese Spotter</p>
  </aside>
</footer>
    </div>
)
}
