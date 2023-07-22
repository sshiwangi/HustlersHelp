import PropType from 'prop-types'
import signinImage from '../assets/signin.svg'
import googleIcon from '../assets/google.svg'
function SignIn({ role }) {
    return (
        <div className='flex flex-col flex-1 lg:mx-16'>
            <div className='flex flex-col items-center justify-center gap-6 my-12 lg:flex-row '>
                <div className='flex flex-col items-center justify-center w-full'>
                    <form className='flex flex-col gap-8' onSubmit={(e)=>{e.preventDefault()}} >
                        <h1 className='text-xl font-bold md:text-3xl text-primary'>Sign In as {role === 'student' ? 'Student' : 'Mentor'}</h1>
                        <div className="w-full max-w-xs form-control">
                            <label className="label" htmlFor='email'>
                                <span className="text-lg label-text ">Enter Your Email</span>
                            </label>
                            <input id='email' type="email" placeholder="john.doe@gmail.com" className="w-full max-w-xs input input-bordered" />
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label" htmlFor='password'>
                                <span className="text-lg label-text">Enter Your Password</span>
                            </label>
                            <input id='password' type="password" placeholder="Password" className="w-full max-w-xs input input-bordered" />
                            <label className="justify-end label">
                                <a className="link link-primary">Forgot Password?</a>
                            </label>
                        </div>
                        <button className="capitalize btn btn-outline btn-primary" type='submit' >Sign In</button>
                        <button className="btn" type='button'><img src={googleIcon} width={24} alt="" className='mr-3'/>Sign In with Google</button>
                    </form>
                </div>
                <div className='flex items-center justify-center w-full p-12'>
                    <img src={signinImage} alt="figure 1" width={'75%'} className='duration-500 hover:scale-110 hover:drop-shadow-[0_10px_35px_rgba(87,13,248,0.25)] drop-shadow-[0_10px_10px_rgba(87,13,248,0.15)]' />
                </div>
            </div>
        </div>

    )
}

SignIn.propTypes = {
    role: PropType.string
}

export default SignIn