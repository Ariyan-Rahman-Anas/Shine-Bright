import { MdCheck } from "react-icons/md"
import { useSelector } from "react-redux"

interface CheckBoxProps {
    label?: string
    onClick?: () => void
    checked?: boolean
    selectedItems?: Set<string>
    productId?: string
    isCenter?: boolean
}

const CheckBox = ({ label, onClick, checked, selectedItems, productId, isCenter }: CheckBoxProps) => {
    const { selected } = useSelector((state: any) => state.category)

    return (
        <div className={`flex gap-2 ${isCenter ? "items-center" : "items-start"}`}>
            <input type="checkbox" className="sr-only" />
            <div onClick={onClick}
                className={`min-w-4 ${selectedItems?.has(productId || "") || checked && selected === "makeup" ? "check-box m-checkbox" : selectedItems?.has(productId || "") || checked && selected === "skincare" ? "check-box s-checkbox" : "check-box"}  `} >
                {checked && <MdCheck />}
            </div>
            <label onClick={onClick}>{label}</label>
        </div>
    )
}
export default CheckBox