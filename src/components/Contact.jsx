import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-white text-black flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/eefa2a49-7171-4ef1-bf6b-728c443e13cf' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-2xl font-bold inline text-white bg-[#9fb9ac] p-2'>contact</p>
          <p className='py-4'>submit the form below or send me an email - <a href='mailto:gabrielapapier@gmail.com'>gabrielapapier@gmail.com</a></p>
        </div>
        <input className='p-2 bg-[#e5e7eb] text-black focus:outline focus:outline-black' type='text' placeholder='name' name='name' />
        <input className='my-4 p-2 bg-[#e5e7eb] text-black focus:outline focus:outline-black' type='email' placeholder='email' name='email' />
        <textarea className='p-2 bg-[#e5e7eb] text-black focus:outline focus:outline-black' placeholder='your message here' name='message' cols='30' rows='10'></textarea>
        <button className='text-black bg-white border rounded-3xl border-black hover:bg-[#327364] hover:border-[#327364] hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>send</button>
      </form>
    </div>
  );
}

export default Contact;
