import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll";



type Props = {
    setSelectedPage: (SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")


    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <div className=" md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5">




                    {/* HEADINGS */}
                    <div className="md:-mt-20 ">
                        <div className="">
                            <div><img alt="home-page-text" src={HomePageText} /></div>

                        </div>
                        <p>Unrivaled music .Unparalled vocalists and singing classes , studi recording to get your vocals in shape that you dream of.....Get that body Now</p>

                    </div>
                </div>
                {/* ACTIONS */}
                <div>
                    <ActionButton setSelectedPage={setSelectedPage} > Join Now</ActionButton>

                    <AnchorLink className="text-sm font-bold text-primary-500 underline " onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#{SelectedPage.ContactUs}`}>
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
                {/* IMAGE */}
                <div>
                    <img alt="home-pageGraphics" src={HomePageGraphic} />
                </div>
            </div>
            {/* SPONSORS */}
            {isAboveMediumScreens && (
                <div>
                    <div>
                        <div>
                            <img alt="red-bullSponsor" src={SponsorRedBull} />
                            <img alt="forbes-Sponsor" src={SponsorForbes} />
                            <img alt="Fortune-Sponsor" src={SponsorFortune} />

                        </div>

                    </div>

                </div>
            )}


        </section>
    )
}
export default Home;