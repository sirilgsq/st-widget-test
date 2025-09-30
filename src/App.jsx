import React from "react";
import IframeWidget from "./pages/irame";
import { Calendar } from "./pages/calender";

const App = () => {
  const habdleLogin = () => {
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "st_gsq8078+4@yopmail.com",
        password: "Test@12345",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      {/* <button onClick={habdleLogin}>Login</button> */}
      <IframeWidget />
      {/* <Calendar /> */}
    </>
  );
};

export default App;
