// import React, { useEffect, useState } from 'react'
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Todos({data}){

    //     const [data,setData]=useState([]);
    
    //   useEffect(()=>{
    
    //     fetch (`https://jsonplaceholder.typicode.com/elem?_page=7&_limit=20`)
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    //     .catch((err)=>console.log(err))
    
    
    //   },[])  
    
    console.log(data);
      return (
        <div className={styles.grid}>
            {
                data?.map((elem)=>(
                   <div className={styles.card} key={elem.id}>
                        <Link href={`/todos/${elem.id}`}>
                            <div>{elem.id}</div>
                            <div>{elem.completed?"DONE":"NOT DONE"} </div>     
                            <div>{elem.title}</div>
                        </Link>
                   </div>
                ))
            }
        </div>
      )
     
}

export const getServerSideProps = async () =>{

    const elem = await fetch (`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=20`).then((res)=>res.json());
  
    console.log(elem);
  
    return{
        props:{
            data: elem,
        },
    };
  
  }
    
    
    