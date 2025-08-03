import { useEffect, useState } from "react";
import AuthenticationApi from "../utilities/API/AuthenticationApi";




const Login = () => {

  const [formData, setFormData] = useState(
    {"email" : "", "password" : ""}
  )

  const AuthenticationApiRequest = new AuthenticationApi()

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key] : value})
  }

  const handleSubmit = async () => {
    const response = await AuthenticationApiRequest.authenticate(formData)
    console.log(response.data)
  }


  return (
    <div>
      <h1>log in</h1>
      <label htmlFor='email'>
        Email:
        <input
          id='email'
          type='text'
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}>
        </input>
      </label>
      <br />
      <label htmlFor="password">Password:
        <input
          id="password"
          type="text"
          value={formData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
      </label>
      <br />
      <br />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
}

export default Login;