import React from 'react'
import axios from 'axios'
import { useNavigate} from "react-router-dom"

const CreatePost = () => {
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()

    const formData=new FormData(e.target)

    axios.post("http://localhost:3000/create-post",formData)
    .then((res)=>{
      // console.log(res);
      navigate("/feed")
      
    })
    .catch((err)=>{
      console.log(err);
      alert("Error creating post")
      
    })



  }
  return (
    <div className='flex flex-col items-center  ' >
        <h1 className='text-black'>Create Post Section</h1>

        <form onSubmit={handleSubmit} className='border border-black m-3 p-3 flex flex-col gap-3 items-center bg-zinc-500 text-sm h-25 rounded-lg' >
            <input className='cursor-pointer border border-black rounded-lg  ' type="file" name="image" accept='image/*'/>
            <input className='border border-black rounded-lg outline-none w-full' type="text" name='caption' required placeholder='Write Something here' />
            <button className='p-2 bg-blue-500 rounded-2xl m-3 border border-black w-30 ' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreatePost