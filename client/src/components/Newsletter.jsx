import newsletter from '../assets/Newsletter.svg'
import {IoMdArrowRoundForward} from 'react-icons/io'

function Newsletter() {
  return (
    <div className="flex flex-col gap-6 pb-8 mx-auto my-12 items-center rounded-lg max-w-[800px] bg-base-300">
        <img src={newsletter} alt="Newsletter" className='w-2/3' />
        <form className='flex flex-col items-center gap-3' onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor='email' className='text-2xl font-bold'>Subscribe to our newsletter</label>
            <div className='flex items-center rounded-full bg-base-100'> 
                <input type="email" className='w-full px-6 py-3 rounded-full focus:outline-none' />
                <button type='submit' className='btn btn-circle btn-primary'><IoMdArrowRoundForward className='text-3xl text-base-100'/></button>
            </div>
        </form>
    </div>
  )
}

export default Newsletter