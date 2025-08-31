import PrimaryButton from "@/components/shared/PrimaryButton"
import Image from "next/image"
import { FaRegCommentDots } from "react-icons/fa"
import { IoCalendarOutline } from "react-icons/io5"
import { useSelector } from "react-redux"

const BlogCard = ({ blog }: any) => {
    const { selected } = useSelector((state: any) => state.category)
    const { img, date, comments, title, slug } = blog || {}
    return (
        <div>
            <div>
                <Image src={img} alt="Blog image" className="w-full h-full" loading="lazy" />
            </div>
            <div className="flex items-center gap-4 text-sm text-bColor4 my-2 ">
                <div className="flex items-center gap-0.5">
                    <IoCalendarOutline />
                    <p>{date}</p>
                </div>
                <div className="flex items-center gap-0.5">
                    <FaRegCommentDots />
                    <p>{comments}</p>
                </div>
            </div>
            <h1 className="text-sm font-semibold my-2" >{title}</h1>
            <PrimaryButton to={`/blog/${slug}`} title="Read more" className={`py-2 w-full font-semibold uppercase ${selected === "makeup"
                // ? "bg-mColor3/80"
                ? "bg-mBtn"
                // : "text-whiteCustom bg-gradient-to-r from-sColorBase to-sColor8"
                : "text-whiteCustom bg-sBtn gradient-to-r from-sColorBase to-sColor8"
                }`} />
        </div>
    )
}
export default BlogCard