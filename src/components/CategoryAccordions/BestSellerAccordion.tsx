import CategoryAccordionTemplate from "../shared/CategoryAccordionTemplate"
import { allItems } from "@/constant"

const BestSellerAccordion = ({setMobileMenuOpen}: {setMobileMenuOpen: (open: boolean) => void}) => {
  return (
    <CategoryAccordionTemplate 
    title="BEST SELLER" 
    content=""
    description="Collections of the products our customers liked the most" 
    allItems={allItems} 
    setMobileMenuOpen={setMobileMenuOpen}
    />
  )
}
export default BestSellerAccordion