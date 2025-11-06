'use client'

import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react';
import GeneratorSteps from './components/StepsBox';

export default function Home() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // fetch('http://localhost:5000/api/time').then(res => res.json()).then(data => {
    //   console.log("xxxx: ", data.time)
    //   setCurrentTime(data.time)
    // })
  }, [])
  return (      
      <main className="w-screen bg-red-600 font-sans dark:bg-black">
        <div className='mx-4 relative'>
          <NavBar />
          {/* <p>The current time is {new Date(currentTime * 1000).toLocaleString()}.</p> */}
          <div className='bg-zinc-900 p-6 rounded-tl-lg rounded-tr-lg mt-6 shadow-lg shadow-black/20 relative z-20 space-y-2'>
            <h1 className='text-4xl text-white font-bold'>Generate 🎅🏻 Secret Santa 🎄 Matches in Seconds</h1>
            <p className='text-white text-2xl italic'><span className='text-green-400 not-italic'>Just upload your guest list. The generator will randomize who gives to whom and send private emails to matches so you can focus on the fun part, the Gift giving!</span></p>
            <p className='text-xs text-slate-300 italic'>*Uses AI to randomize names and generate suggestions.</p>
          </div>
          <GeneratorSteps />

        </div>
      </main>
  );
}
