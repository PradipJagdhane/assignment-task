const signKey = process.env.REACT_APP_SIGN_API_KEY;

const signupService = async (signupData) => {
  const response = await fetch(`${signKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  console.log("response from sigh up seriv=ces::::");
  const data = await response.json();
  return data;
};

export default signupService;
