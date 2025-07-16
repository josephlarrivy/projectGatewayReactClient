import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthenticationApi from "../utilities/API/AuthenticationApi";

const EnterLoginCode = () => {

  const { emailAddress, code } = useParams(); // Retrieve the optional code parameter
  const [email, setEmail] = useState(emailAddress || "")
  const [loginCode, setLoginCode] = useState(code || ""); // Initialize with the code if present

  const AuthenticationApiRequest = new AuthenticationApi();

  useEffect(() => {
    if (code) {
      setLoginCode(code); // Set the code from the URL if it exists
    }
    if (emailAddress) {
      setEmail(emailAddress); // Set email from the URL if it exists
    }
  }, [code]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCodeChange = (e) => {
    setLoginCode(e.target.value);
  };

  const handleCodeSubmit = async () => {

    const response = await AuthenticationApiRequest.checkLoginCode(email, loginCode);

    console.log(response.status);

    if (response.status === 403) {
      console.warn(response);
    } else if (response.status === 200) {
      console.warn("200");
      console.log(response)
    } else {
      console.warn(response);
    }

  };

  return (
    <div>
      <h1>enter login code</h1>
      <label htmlFor='email'>
        Email:
        <input
          id='email'
          type='text'
          value={email}
          onChange={(e) => handleEmailChange(e)}>
        </input>
      </label>
      <br />
      <label htmlFor="loginCode">Code:
        <input
          id="loginCode"
          type="text"
          value={loginCode}
          onChange={(e) => handleCodeChange(e)}
        />
      </label>
      <br />
      <br />
      <button onClick={handleCodeSubmit}>Submit</button>
    </div>
  );
};

export default EnterLoginCode;
