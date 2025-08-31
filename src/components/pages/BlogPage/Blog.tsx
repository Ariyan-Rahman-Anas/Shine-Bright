"use client"

import BlogCard from "@/components/modules/blog-page/BlogCard"
import BlogPageSidebar from "@/components/modules/blog-page/BlogPageSidebar"
import FloatingThemeBtn from "@/components/shared/FloatingThemeBtn"
import GoBack from "@/components/shared/GoBack"
import { blogsData } from "@/constant/data/blogs"
import { useState } from "react"

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("Makeup");

    // Filter blogs based on selected category
    const filteredBlogs = blogsData.filter(blog =>
        selectedCategory ? blog.category === selectedCategory : true
    );
    return (
        <div className="w-full">
            <div>
                <FloatingThemeBtn />
            </div>

            <div className="w-full mt-6 mb-14 " >
                <GoBack />
                <h1 className="text-2xl uppercase font-semibold mt-3 ">taupe notch Blogs</h1>

                <div className="flex flex-col md:flex-row items-start justify-between gap-6 mt-6">
                    <div id="aside" className="w-full md:max-w-[20%]">
                        <BlogPageSidebar
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />
                    </div>
                    <div id="main" className="w-full md:max-w-[80%]">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                            {filteredBlogs.map((blog, index) => (
                                <BlogCard key={index} blog={blog} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog