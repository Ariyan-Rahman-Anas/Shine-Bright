const InputFieldLabel = ({ label, isRequired = false}: { label: string, isRequired?:boolean}) => {
  return (
    <div className={`flex items-center ${isRequired ? "" : "mt-1"}`}>
      <label htmlFor="address" className="text-sm font-medium">
        {label}
      </label>
      {isRequired && <span className="text-error">*</span>}
    </div>
  )
}
export default InputFieldLabel