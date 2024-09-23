import axios from "axios";

const loginKey = process.env.REACT_APP_LOGIN_API_KEY;

const loginService = async (email, password) => {
  const response = await axios.post(
    `${loginKey}`,
    {
      email,
      password,
    },
    {
      method: 'POST', // Explicitly setting the method
      headers: {
        'Content-Type': 'application/json', // Defining content type
        'Authorization': 'Bearer your_token_here', // Example of an Authorization header, if needed
      },
    }
  );

  console.log("Response from login service:", response);
  
  return response.data;
};

export default loginService;
