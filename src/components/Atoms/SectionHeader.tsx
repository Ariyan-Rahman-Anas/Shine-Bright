import { cn } from "@/lib/utils"

const SectionHeader = ({
    title,
    description,
}: {
    title: string,
    description?: string,
}) => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className={cn("text-2xl md:text-4xl font-semibold uppercase")}>{title}</h1>
                <p className={cn("text-black40")}>{description}</p>
            </div>
        </div>
    )
}
export default SectionHeader