import React, { useState,useEffect } from 'react'
import axios from 'axios'


const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://ik.imagekit.io/vnxj06oxbe/image_Rk_CpjuDi.jpg",
            caption:"Beautiful Flower"
        }
    ])

    useEffect(() => {
      axios.get("http://localhost:3000/posts")
      .then((res)=>{
        // console.log(res.data);
        setPosts(res.data.post)
        
      })
        
    }, [])
    

  return (
    <section className='feed-section gap-3'>
  {
    posts.length > 0 ? (
      posts.map((post) => (
        <div key={post._id} className='post-card '>
          <img src={post.image} alt={post.caption} className='post-image'/>
          <p className='text-black p-3 '>{post.caption}</p>
        </div>
      ))
    ) : (
      <h1>No posts available</h1>
    )
  }
</section>
  )
}

export default Feed