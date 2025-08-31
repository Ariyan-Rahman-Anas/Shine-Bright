interface InputFieldProps {
    type?: string;
    id?: string;
    placeholder?: string;
    register?: any;
    name?: string;
    className?: string;
    value?: string;
    defaultValue?: string;
    readOnly?: boolean;
    isRequired?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    type = "text",
    id,
    placeholder,
    register,
    name,
    className = "",
    value,
    defaultValue,
    readOnly,
    isRequired
}) => {
    return (
        <div className="flex flex-col items-start gap-0.5 w-full">
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={`input-field border-bColor2 ${className}`}
                {...register(name)}
                value={value}
                defaultValue={defaultValue}
                readOnly={readOnly}
                required={isRequired}
            />
        </div>
    );
};
export default InputField;  