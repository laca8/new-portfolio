import React from 'react'

const Experience = () => {
  return (
    <div class="py-10 bg-[#232325]" id='experience'>
        <h2 className='mb-8 text-3xl text-white text-center'>My <span>Education</span> & <span>Experience</span></h2>
        <div class="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
            
           <p className='text-gray-500'>(2019 - 2022)</p>
            <p className='text-gray-500'>
            Bachelor of {" "}<span>Computer Science</span>{" "}
Helwan Is University<br/>


            </p>

        </div>
        <div class="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>

        <div class="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
            <p className='text-gray-400'>(2021 - 2022)</p>
            <p className='text-gray-500'>
            Full Stack Developer 

    {" "}<span>Vision Group</span>
            </p>
            
            
        </div>

        

        </div>
        
  )
}

export default Experience