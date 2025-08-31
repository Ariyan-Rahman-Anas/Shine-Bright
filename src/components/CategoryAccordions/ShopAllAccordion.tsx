import { allItems } from "@/constant"
import CategoryAccordionTemplate from "../shared/CategoryAccordionTemplate"

const ShopAllAccordion = ({setMobileMenuOpen}: {setMobileMenuOpen: (open: boolean) => void}) => {
    return (
        <CategoryAccordionTemplate 
        title="SHOP ALL" 
        content=""
        description="Collections of the products our customers liked the most" 
        allItems={allItems} 
        setMobileMenuOpen={setMobileMenuOpen}
        />
    )
}
export default ShopAllAccordion