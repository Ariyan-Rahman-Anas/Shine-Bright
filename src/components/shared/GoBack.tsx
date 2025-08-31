"use client"

import { useRouter } from "next/navigation";
import { FiChevronLeft } from "react-icons/fi";

const GoBack = () => {
  const router = useRouter()
  
  return (
    <button onClick={()=>router.back()} className="flex items-center gap-0.5">
      <FiChevronLeft size={20} /> 
      <p className="text-base font-medium">Back</p>
    </button>
  )
}
export default GoBack