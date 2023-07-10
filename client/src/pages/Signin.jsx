import logo from '../assets/Graduation Cap.png'
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';
export default function Example() {

  const { user, setUser } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    if (data.role === 'mentor') {
      const response = await axios.post('http://localhost:5000/api/auth/mentor/login', data);
      if (response.status === 200) {
        setUser(response.data);
      }
    }
    else if (data.role === 'entrepreneur') {
      const response = await axios.post('http://localhost:5000/api/auth/entrepreneur/login', data);
      if (response.status === 200) {
        setUser(response.data);
      }
    }
    else {
      alert('Please select a role');
    }
    reset();
  };





  return (<>
    <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="w-auto h-10 mx-auto" src={logo} alt="Your Company" />
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
          <div>
            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input {...register('email')} id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block px-3 text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input  {...register('password')} id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
          <select {...register('role')} id="countries" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option selected>Sign in as</option>
            <option value="mentor">Mentor</option>
            <option value="entrepreneur">Entrepreneur</option>
          </select>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}


