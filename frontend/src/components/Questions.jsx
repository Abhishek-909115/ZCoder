import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode";

export const Questions = () => {
    const jwt = localStorage.getItem("token");
    const decoded = jwtDecode(jwt);
    const userId = decoded.userId;
    const navigate = useNavigate();
    
    return <div className="flex hover:bg-blue-900 mr-6 rounded-lg">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18.8c-4.853 0-8.8 3.947-8.8 8.8s3.947 8.8 8.8 8.8 8.8-3.947 8.8-8.8-3.947-8.8-8.8-8.8zm0 15.05c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.432-3.468.572-.544 1.024-.975.962-1.821-.058-.805-.73-1.226-1.364-1.226-.709 0-1.538.527-1.538 2.013h-2.011c0-2.4 1.41-3.95 3.59-3.95 1.036 0 1.942.339 2.551.955.57.578.865 1.372.854 2.298-.018 1.383-.859 2.291-1.536 3.021z"/></svg>
        </div>
        <div className="pl-2 text-lg pr-2">
            <button onClick={(e)=>{
                e.persist();
                
                navigate("/usersquestion?id="+userId)
            }} className=" rounded-lg tracking-wider border-2 border-transparent active:border-blue-300 duration-300 active:text-white">Questions</button></div>
    </div>
}