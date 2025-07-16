import { useNavigate } from "react-router-dom";



const DevNavbar = () => {

  const navigateTo = useNavigate()

  return (
    <div>
      <button onClick={() => navigateTo('/')}>home</button>
      <button onClick={() => navigateTo('/register')}>register</button>
      <button onClick={() => navigateTo('/enterLoginCode')}>enter login code</button>
      <button onClick={() => navigateTo('/login')}>log in</button>
      <hr/>
    </div>
  )
}

export default DevNavbar;