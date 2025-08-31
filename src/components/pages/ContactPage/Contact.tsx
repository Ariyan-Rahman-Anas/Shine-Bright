import ContactHeader from "@/components/modules/contact-page/ContactHeader"
import ContactPageSidebar from "@/components/modules/contact-page/Contact/ContactPageSidebar"

const Contact = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
     <ContactHeader />

      <div className='flex items-start gap-4 page-setup mt-6 '>
        <aside className="hidden md:block w-[20%] ">
          <ContactPageSidebar />
        </aside>
        <main className="w-full md:w-[80%] overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
export default Contact