"use client"

import { useParams } from 'next/navigation';
import React from 'react'

const BlogDetailsPage = () => {
    const { slug } = useParams();
    console.log({slug});
  return (
    <div>
        <h1>{slug}</h1>
    </div>
  )
}

export default BlogDetailsPage