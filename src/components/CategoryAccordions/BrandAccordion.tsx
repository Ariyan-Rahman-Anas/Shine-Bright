import { allItems } from "@/constant"
import CategoryAccordionTemplate from "../shared/CategoryAccordionTemplate"

const BrandAccordion = ({setMobileMenuOpen}: {setMobileMenuOpen: (open: boolean) => void}) => {
  return (
    <CategoryAccordionTemplate 
    title="BRAND" 
    content=""
    description="Collections of the products our customers liked the most" 
    allItems={allItems}     
    setMobileMenuOpen={setMobileMenuOpen}
    />
  )
}
export default BrandAccordion