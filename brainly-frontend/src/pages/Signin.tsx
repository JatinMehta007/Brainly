import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin (){
    const usernameRef =  useRef<HTMLInputElement>();
    const passwordRef =  useRef<HTMLInputElement>();
    const navigate = useNavigate();

     async function signin(){
         const username = usernameRef.current?.value;
         const password = passwordRef.current?.value;
        const responses = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
                username,
                password
         })
        const jwt = responses.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");

    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl  border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username"></Input>
            <Input reference={passwordRef} placeholder="Password"></Input>
            <div className="flex justify-center items-center">
            <Button onClick={signin} loading={false} variant="primary" text="Signin" fullWidth={true }/>
            </div>
        </div>

    </div>
} 