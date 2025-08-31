import AboutHeader from "@/components/modules/about-page/AboutHeader"
import AboutUs from "@/components/modules/about-page/AboutUs"
import AuthorizedPartner from "@/components/modules/about-page/AuthorizedPartner"
import MeetOurTeam from "@/components/modules/about-page/MeetOurTeam"

const About = () => {
    return (
        <div className="w-full mt-10 mb-20 md:mb-36 space-y-20 md:space-y-36 ">
            <AboutHeader />
            <AboutUs />
            <MeetOurTeam />
            <AuthorizedPartner />
        </div>
    )
}
export default About