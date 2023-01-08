import styles from "../../styles/Home.module.css";

const UserDetails = ({data}) => {

  return (
    <div>

                <div >
                       
                            <div>{data.id}</div>
                            <div>{data.username}</div>     
                            <div>{data.email}</div>
                       
                </div>

    </div>
  )
}

export default UserDetails;

export const getServerSideProps = async (context)=>{

    const id = context.query.userId;

const users = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>res.json());

    return {
          props: {
            data: users,
          }
        };
    

}