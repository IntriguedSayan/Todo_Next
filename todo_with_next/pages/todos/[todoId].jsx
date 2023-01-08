// import React from 'react'

const TodoDetails = ({data}) => {

  return (
    <>
        
       {    <div>
                <div>{data.id}</div>
                <div>{data.completed?"DONE":"NOT DONE"} </div>     
                <div>{data.title}</div>
            </div>
        }

    </>
  )
}

export default TodoDetails;

export const getServerSideProps=async(context)=>{

    const todoId=context.query.todoId;
    console.log(todoId);

const fetchedData = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then((res)=>res.json());

    return {
      props: {
        data:fetchedData,
      },
    };


}