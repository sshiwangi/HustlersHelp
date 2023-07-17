import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="lg:mx-16 lg:my-8">
      <div className="flex flex-col-reverse= items-center justify-center lg:flex-row">
        <div className="p-6">
          <h1 className="text-xl font-bold lg:text-4xl">Looks like you&apos;ve found the doorway to the great nothing</h1>
          <p className="py-6">Sorry about that! Please visit our hompage to get where you need to go.</p>
          <button onClick={()=>navigate('/')} className="btn btn-primary">Go to Home</button>
        </div>
        <img src="/404.svg" className="max-w-md xl:max-w-xl" />
      </div>
    </div>
  )
}

export default NotFound