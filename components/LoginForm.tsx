// components/LoginForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Ensure you're importing from next/navigation
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

// Define types for the API response
interface ApiResponse {
  message: string;
  role: string;
}

const LoginForm = () => {
  // Initialize state with default values
  const [email, setEmail] = useState<string>("hospital@example.com");
  const [password, setPassword] = useState<string>("hospital123");
  const router = useRouter();

  // Function to handle login
  const handleLogin = async () => {
    const apiEndpoint = "https://69as86o6hg.execute-api.eu-north-1.amazonaws.com/parent"; // Your API Gateway URL

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if the response is ok
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed"); // Use the message from the API if available
      }

      const data: ApiResponse = await response.json(); // Specify the type of the data
      console.log("API Response:", data); // Log the response to check its structure

      // Parse the body to get the role
      const parsedBody = JSON.parse(data.body);
      const role = parsedBody.role;

      // Redirect based on role
      switch (role) {
        case "hospital":
          router.push("pages/hospital/Inventory");
          break;
        case "lab":
          router.push("pages/Labs/Inventory");
          break;
        case "manufacturer":
          router.push("pages/manufacturer/Inventory");
          break;
        case "pharmacy":
          router.push("pages/pharmacies/Inventory");
          break;
        default:
          alert("Role not recognized");
      }
    } catch (error: unknown) { // Specify the type as unknown
      console.error("Login error:", error); // Log the error for debugging
      alert((error as Error).message); // Cast to Error to access the message property
    }
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="pb-10 self-center">Login</h1>
      <div className="flex justify-center">
        <div className="flex flex-col gap-3">
          <CustomInput
            placeholder={"Email"}
            mainClassName={"w-full justify-center"}
            className={"w-[23rem]"}
            type={"text"}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} // Specify the type of event
          />
          <CustomInput
            placeholder={"Password"}
            mainClassName={"w-full justify-center"}
            className={"w-[23rem]"}
            type={"password"}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} // Specify the type of event
          />
          <a className="cursor-pointer self-end" onClick={() => alert("Forgot Password clicked")}>
            Forgot Password
          </a>
          <CustomButton className="p-2 rounded-full w-full" onClick={handleLogin}>
            Login
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
