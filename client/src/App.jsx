import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SignIn"
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentor/signin" element={<SignIn role={'mentor'} />} />
          <Route path="/student/signin" element={<SignIn role={'student'} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
