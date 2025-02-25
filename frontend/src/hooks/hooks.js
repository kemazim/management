import { useState } from "react";
import toast from "react-hot-toast";

export const usePostHook = () => {
    const [loading, setLoading] = useState(false)

    const postHook = async(payload) => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8092/record", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })
            if(res.status !== 200){
                throw new Error(data.Error)
            }
            const data = await res.json()
            toast.success("Record Created",{id:"postSuccess"})
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }

    return {postHook , loading}

}
