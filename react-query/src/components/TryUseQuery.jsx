import React from 'react'
import { useQuery } from "@tanstack/react-query"

export default function TryUseQuery() {

 const {data:todoDatas,error,isLoading}=useQuery({queryKey:["todos"],
queryFn:async()=>{
const res=await fetch("https://jsonplaceholder.typicode.com/todos")
const data=await res.json()
console.log(data);
return data;
}})

 if(error){
  return <div>there is an erorr</div>
 }

 if(isLoading){
  return <div>Data is loading...</div>
 }

 return (
    <>

<div>
  {todoDatas && todoDatas.map((item,index) => {
    return <li key={index}>{item.title}</li>;
  })}
</div>



    </>
  )
}
