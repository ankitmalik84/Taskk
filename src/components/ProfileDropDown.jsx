import {useState} from "react";
import {useNavigate} from "react-router-dom";
export default function ProfileDropDown({userName}){
    const[isOpen,setIsOpen] = useState(false);
    const navigate = useNavigate();
    return(
        <>
            <div
             onClick= {()=>{
                setIsOpen(!isOpen);
             }}
             className = "bg-pink-600 w-10 h-10 text-center flex justify-center items-center rounded-full font-bold p-2 text-xl cursor-pointer mr-3" 
             >
             {userName.charAt(0)}
            </div>
            {isOpen && (
                <div
                    className="absolute top-[60px] right-0 mx-2 md:mx-8 border-2 rounded-lg"
                    >
                    <div
                    onClick={()=>{
                        localStorage.removeItem("token");
                        navigate("/signin");
                    }}
                    className="p-1 bg-gray-300 border-2 rounded-lg shadow-md cursor-pointer"
                    >
                        LogOut
                    </div>
                </div>
            )}
        </>
    )
}