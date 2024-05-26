import React from 'react'
import { useQuery } from "@tanstack/react-query"

export default function TryUseQuery() {

 const {data:todoDatas,error,isLoading}=useQuery({queryKey:["todos"],
queryFn:async()=>{
const res=await fetch("https://jsonplaceholder.typicode.com/todos")
const data=await res.json()
console.log(data);
return data;
},

staleTime: 5000, //For the next 5 seconds (staleTime), the data is considered fresh. During this period, if the component re-renders or if you navigate away and back to this component, it will use the cached data without making a new network request.
                 //After 5 seconds, if you access the todos again, it will refetch the data from the API to ensure you have the latest information.
});

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
