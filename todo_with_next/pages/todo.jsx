// import React, { useEffect, useState } from 'react'


export default function Todo({data}){

    //     const [data,setData]=useState([]);
    
    //   useEffect(()=>{
    
    //     fetch (`https://jsonplaceholder.typicode.com/photos?_page=7&_limit=20`)
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    //     .catch((err)=>console.log(err))
    
    
    //   },[])  
    
    
      return (
        <div>
            {
                data?.map((photos)=>(
                   <div key={photos.id}>
                        <div>{photos.id}</div>
                        <img src={photos.thumbnailUrl} />       
                        <div>{photos.title}</div>
                   </div>
                ))
            }
        </div>
      )
     
}

export const getServerSideProps = async () =>{

    const photos = await fetch (`https://jsonplaceholder.typicode.com/photos?_page=7&_limit=20`).then((res)=>res.json());
  
    console.log(photos);
  
    return{
        props:{
            data: photos,
        },
    };
  
  }
    
    
    