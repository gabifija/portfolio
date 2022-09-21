import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black text-white flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/eefa2a49-7171-4ef1-bf6b-728c443e13cf' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-2xl font-bold inline border-b-4 border-pink-600'>Contact</p>
          <p className='py-4'>submit the form below or send me an email - <a href='mailto:gabrielapapier@gmail.com' className='text-pink-600 hover:text-white'>gabrielapapier@gmail.com</a></p>
        </div>
        <input className='p-2 bg-white text-black' type='text' placeholder='name' name='name' />
        <input className='my-4 p-2 bg-white text-black' type='email' placeholder='email' name='email' />
        <textarea className='p-2 bg-white text-black' placeholder='your message here' name='message' cols='30' rows='10'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>send</button>
      </form>
    </div>
  );
}

export default Contact;
