import { SignupInput } from "@nishant10oct/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type:"signup" | "signin"}) =>{
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SignupInput>({
        email:"",
        password:"",
        name: ""
    })

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin" }`,postInputs);
            const jwt = response.data;
            localStorage.setItem("token",jwt);
            navigate("/posts");
        }catch(e){
            
        }
    }
    return <div className="h-screen flex justify-center flex-col">

            <div className="flex justify-center">
                <div>
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-600">
                        {type==="signin"?"Don't have an account?":"Already have an account?"} 
                        <Link className="underline pl-2" to={type==="signin"?"/signup":"/signin"}>{type === "signin"?"Sign Up":"Login"}</Link>
                    </div> 

                    <div>
                        {type === "signup"?<LabelledInput label="Name" placeholder="Nishant" onChange={(e)=>{
                        setPostInputs(({
                            ...postInputs,
                            name:e.target.value
                        }))
                        }} />: null }
                        <LabelledInput label="Email" type={"email"} placeholder="123example@gmail.com" onChange={(e)=>{
                        setPostInputs(({
                            ...postInputs,
                            email:e.target.value
                        }))
                        }} />
                    
                        <LabelledInput label="Password" type={"password"} placeholder="password" onChange={(e)=>{
                        setPostInputs(({
                            ...postInputs,
                            password:e.target.value
                        }))
                        }} />

                        <button type="button" onClick={sendRequest} className="w-full py-2.5 px-5 me-2 mb-2 mt-5 text-sm font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-800 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 ">{type === "signup" ? "Sign Up" : "Sign In" }</button>
                    </div>
                    
                </div>

                
               
            </div>
        </div>
}

interface LabelledInputType {
    label :string,
    placeholder:string,
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void;
    type?:string
}

function LabelledInput ({ label,placeholder,type,onChange}:LabelledInputType){
    return <div>
             <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

