import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'

export default function TryUseMutation() {
    const [title, setTitle] = useState('');
    const queryClient=useQueryClient();

 const {mutation:newPosting,isPending,isError,error}=useMutation({mutationFn:async(newPost)=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/todos",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
    })

      const data=await res.json()
      return data;
    },
    onSuccess:()=>{
       queryClient.invalidateQueries("posts")   // Invalidate the 'posts' query to refetch the posts and 'posts' is set as useQuery({queryKey:["posts"] in post dispalying page.
    },
    onError: (error) => {
        console.error('Error creating new todo:', error);
      },
});


    const handleSubmit = (event) => {
        event.preventDefault();
        newPosting({ title });   // Calling mutate with the new todo object
      };

  return (
   
    <div>
   
   <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Todo"
      />
      <button type="submit" disabled={isPending}>
        Add Todo
      </button>
      {isPending && <p>Loading...</p>}
      {isError && <p>An error occurred: {error.message}</p>}
    </form>
 

    </div>
  )
}
