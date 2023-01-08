import React from 'react'
import styles from "../../styles/Home.module.css";
import Link from 'next/link';

const Users = ({data}) => {
  return (
    <div className={styles.grid}>

        {
            data.map((elem)=>(

                <div className={styles.card} key={elem.id}>
                        <Link href={`/users/${elem.id}`}>
                            <div>{elem.id}</div>
                            <div>{elem.username} </div>     
                            <div>{elem.email}</div>
                        </Link>
                </div>

            ))
        }

    </div>
  )
}

export default Users;

export const getServerSideProps=async()=>{

const data = await fetch(`https://jsonplaceholder.typicode.com/users?_page=1&_limit=20`).then((res)=>res.json());

    return{
        props:{
            data:data,
        }
    };


}