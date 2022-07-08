import { useState } from "react";
import { useFirestoreDB } from "../hooks/useFirestoreDB";



const Home = () => {


  const {data, error, loading} = useFirestoreDB()

  if (loading) return(<p>loading</p>)
  if (error) return(<p>{error}</p>)

  return (
    <>
      <ul>
        {
          data.map((item)=>(
            <li key={item.id}>{item.full_name}</li>
          ))
        }
      </ul>
    </>
  );
};

export default Home;
