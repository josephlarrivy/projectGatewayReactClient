import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthenticationApi from "../utilities/API/AuthenticationApi";

const EnterEmailVerificationCode = () => {

  const { emailAddress, code } = useParams(); // Retrieve the optional code parameter
  const [email, setEmail] = useState(emailAddress || "")
  const [verificationCode, setVerificationCode] = useState(code || ""); // Initialize with the code if present

  const AuthenticationApiRequest = new AuthenticationApi();

  useEffect(() => {
    if (code) {
      setVerificationCode(code); // Set the code from the URL if it exists
    }
    if (emailAddress) {
      setEmail(emailAddress); // Set email from the URL if it exists
    }
  }, [code]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleCodeSubmit = async () => {

    const response = await AuthenticationApiRequest.checkVerificationCode(email, verificationCode);

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
      <h1>enter email verification code</h1>
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
      <label htmlFor="verificationCode">Code:
        <input
          id="verificationCode"
          type="text"
          value={verificationCode}
          onChange={(e) => handleCodeChange(e)}
        />
      </label>
      <br />
      <br />
      <button onClick={handleCodeSubmit}>Submit</button>
    </div>
  );
};

export default EnterEmailVerificationCode;
