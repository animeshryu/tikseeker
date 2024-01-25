import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='flex bg-black'>

    <h3 className='text-slate-50'>Tik Seeker</h3>

    <div className='justify-end text-slate-50'>
      <Link href="/Tos">Tos</Link>
      <Link  href="/Privacy">Privacy Policy</Link>
    </div>

    </div>
    </>
  )
}

export default page
