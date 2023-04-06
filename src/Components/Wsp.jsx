import React from 'react'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Wsp = () => {
  return (
    <div className="fixed z-10 bottom-8 right-8">
      <a href="https://wa.me/56951004035" target="_blank">
        <div className="w-14 h-14 bg-[#25D366] border-4 border-white rounded-full flex items-center justify-center">
          <AiOutlineWhatsApp fontSize={30} color='#fff' />
        </div>
      </a>
    </div>
  )
}

export default Wsp
