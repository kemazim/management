import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getData, getOneTenantData, putData } from "../redux/dataSlice";

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

export const useGetHook = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();

    const getHook = async() => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8092/getAllRecord`)
            if(res.status !== 200){
                throw new Error(data.Error)
            }
            const data = await res.json()
            dispatch(getData(data));
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }

    return {getHook , loading}

}

export const useGetOneTenantHook = () => {
    const [oneloading, setOneLoading] = useState(false)
    const dispatch = useDispatch();

    const getOneTenantHook = async(unitNo) => {
        setOneLoading(true);
        try {

            const res = await fetch(`http://localhost:8092/record?unitNo=${unitNo}`)
            if(res.status !== 200){
                throw new Error(data.Error)
            }
            const data = await res.json()
            dispatch(getOneTenantData(data));
        } catch (error) {
            toast.error(error.message)
        }finally{
            setOneLoading(false);
        }
    }

    return {getOneTenantHook , oneloading}

}

export const useDeleteHook = () => {
    const [deleteLoading, setDeleteLoading] = useState(false)
    const deleteHook = async(tenant) => {
        setDeleteLoading(true);
        try {
            const res = await fetch(`http://localhost:8092/deleterecord?unitNo=${tenant.unitNo}&icno=${tenant.icno}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if(res.status !== 200){
                throw new Error(data.Error)
            }
const data = await res
            toast.success("Delete Success", {id: "delete data"})
        } catch (error) {
            toast.error(error.message)
        }finally{
            setDeleteLoading(false);
        }
    }

    return {deleteHook , deleteLoading}

}

