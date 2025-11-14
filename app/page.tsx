'use client'

import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react';
import GeneratorSteps from './components/GeneratorSteps';
import GenerateDialogPopup from './components/GenerateDialogPopup';

export default function Home() {

  const [currentTime, setCurrentTime] = useState(0);
  const [isDialogGenerateOpen, setIsDialogGenerateOpen] = useState(false);

  const handleOpenGenerateDialog = () => {
    setIsDialogGenerateOpen(true);
  };

  const handleCloseGenerateDialog = () => {
    setIsDialogGenerateOpen(false);
  };

  return (      
      <main className="flex flex-row justify-center w-screen bg-red-600 font-sans dark:bg-black">
        <div className='mx-4 relative'>
          <NavBar />
          {/* <p>The current time is {new Date(currentTime * 1000).toLocaleString()}.</p> */}
          <div className='bg-zinc-900 p-6 rounded-tl-lg rounded-tr-lg mt-6 shadow-lg shadow-black/20 relative z-20 space-y-2'>
            <h1 className='lg:text-4xl sm:text-3xl relative w-[max-content] text-white font-bold before:absolute before:inset-0 before:animate-typewriter before:bg-zinc-900 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white'>Generate 🎅🏻 Secret Santa 🎄 Matches in Seconds</h1>
            <p className='text-white lg:text-2xl sm:text-lg italic'><span className='text-green-400 not-italic'>Just upload your guest list. The generator will randomize who gives to whom and send private emails to matches so you can focus on the fun part, the Gift giving!</span></p>
            <p className='text-xs text-slate-300 italic'>*HolidayBot uses AI to randomize names and generate suggestions.</p>
          </div>
          <GeneratorSteps isGenerateOpen={handleOpenGenerateDialog} />
          <GenerateDialogPopup isOpen={isDialogGenerateOpen} onClose={handleCloseGenerateDialog} />

        </div>
      </main>
  );
}
