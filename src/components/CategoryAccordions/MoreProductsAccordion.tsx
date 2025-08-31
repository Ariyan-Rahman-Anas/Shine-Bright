import CategoryAccordionTemplate from "../shared/CategoryAccordionTemplate"
import { allItems } from "@/constant"

const MoreProductsAccordion = ({setMobileMenuOpen}: {setMobileMenuOpen: (open: boolean) => void}) => {
  return (
    <CategoryAccordionTemplate 
    title="MORE PRODUCTS" 
    content=""
    description="Collections of the products our customers liked the most" 
    allItems={allItems} 
    setMobileMenuOpen={setMobileMenuOpen}
    />
  )
}

export default MoreProductsAccordion