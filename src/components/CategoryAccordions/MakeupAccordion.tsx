import CategoryAccordionTemplate from "../shared/CategoryAccordionTemplate"
import { allItems } from "@/constant"

const MakeupAccordion = ({setMobileMenuOpen}: {setMobileMenuOpen: (open: boolean) => void}) => {
  return (
    <CategoryAccordionTemplate 
    title="MAKEUP" 
    content=""
    description="Collections of the products our customers liked the most" 
    allItems={allItems}     
    setMobileMenuOpen={setMobileMenuOpen}
    />
  )
}
export default MakeupAccordion