import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";

interface PrimaryButtonProps {
  bType?: "button" | "submit" | "reset";
  title: string;
  to?: string;
  icon?: React.ReactNode;
  imgIcon?: string;
  isNewTab?: boolean;
  style?: React.CSSProperties;
  className?: string; 
  disabled?: boolean
  onClick?: () => void
}
const PrimaryButton = ({
  bType = "button",
  title,
  to = "",
  icon,
  imgIcon,
  isNewTab = false,
  style,
  className, disabled = false,
  onClick
}: PrimaryButtonProps) => {

  const { selected } = useSelector((state: any) => state.category)

  return (
    <Link href={to} target={isNewTab ? "_blank" : "_self"} className={`w-full ${disabled ? "cursor-not-allowed opacity-50" : ""} `} >
      <button
        type={bType}
        style={style}
        className={cn(
          "rounded text-sm font-medium px-2 py-1 transition-all duration-500 flex items-center justify-center gap-2 ",
          selected === "makeup" ? "mBtn" : "sBtn",
          className,
          disabled && "cursor-not-allowed"
        )}
        onClick={onClick}
      >
        {icon && icon}
        {imgIcon && <Image src={imgIcon} alt={title} />}
        {title}
      </button>
    </Link>
  );
};
export default PrimaryButton;


