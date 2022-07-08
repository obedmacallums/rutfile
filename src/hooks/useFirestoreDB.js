import { useEffect, useState } from "react"
import {db} from "../firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore/lite"


export const useFirestoreDB = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    useEffect((()=>{
        console.log("getData")
        getData()
        

    }), [])

    const getData = async()=>{
        try {
        setLoading(true)

        const rutsRef = collection(db, "ruts")
        const q = query(rutsRef, where("rut", "==", "25907391-K"))
        const querySnapshot = await getDocs(q);
        const dataDB = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
        setData(dataDB)

        console.log(dataDB)
            
        } catch (error) {
            console.log(error)
            setError(error.message)
            
            
        }finally{
            setLoading(false)


        }

    }


  return {data, error, loading}
}