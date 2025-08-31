import { cn } from "@/lib/utils";
import Image from "next/image";
import { useSelector } from "react-redux";

interface SecondaryButtonProps {
    bType?: "button" | "submit" | "reset";
    title: string | React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    icon?: any;
}
const SecondaryButton = ({
    bType = "button",
    title,
    style,
    className,
    onClick,
    disabled,
    icon }: SecondaryButtonProps) => {

    const { selected } = useSelector((state: any) => state.category)


    return (
        <button
            type={bType}
            onClick={onClick}
            disabled={disabled}
            style={style}
            className={cn(
                "rounded text-sm font-medium px-2 py-1 transition-all duration-300 flex items-center justify-center gap-2 ",
                selected === "makeup" ? "mBtn" : "sBtn",
                disabled && "cursor-not-allowed",
                className
            )}
        >
            {typeof icon === "string" ? <Image src={icon} alt={title as string} className="w-6 h-6" width={24} height={24} /> : icon || null}
            {typeof title === "string" ? <span>{title}</span> : title}
        </button>
    );
};
export default SecondaryButton;