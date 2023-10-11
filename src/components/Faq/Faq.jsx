import React, { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

const Faq = ({ title, description }) => {
  const [show, setShow] = useState(false);

  return (
    <div onClick={() => setShow(!show)} className='mx-auto flex-col py-[2px] px-2 sm:max-w-screen-md cursor-pointer'>
      <div className='sm:px6 my-[2px] flex justify-between bg-[#303030] py-4 px-[20px] sm:py-5 hover:bg-[#4E4E4E]'>
        <h1  className='text-lg sm:text-2xl '>{title}</h1>
        {show ? (
          <AiOutlineClose className='h-8 w-8 cursor-pointer' />
        ) : (
          <AiOutlinePlus className='h-8 w-8 cursor-pointer' />
        )}
      </div>
      {show && (
        <div className='bg-[#303030]'>
          <p className='sm:px6 px-3 py-4 text-lg sm:py-6 sm:px-6 sm:text-2xl'>{description}</p>
         
          
        </div>
      )}
    </div>
    
  );
};

export default Faq;
