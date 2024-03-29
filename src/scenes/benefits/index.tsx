import Htext from "@/shared/Htext";
import { BenefitTypes, SelectedPage } from "@/shared/types"
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitTypes> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art facilities",
        description: "Neque adi kola ia s bor , wetin dey happen sef "
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "State of the Art Studio",
        description: "Neque adi kola ia s bor , wetin dey happen sef "
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro voice Trainers",
        description: "Neque adi kola ia s bor , wetin dey happen sef "
    },
]
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    },
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits"
            className="mx-auto min-h-full w-5/6 py-20 "
        >
            <motion.div
                onViewportEnter={() => { setSelectedPage(SelectedPage.Benefits) }}
            >
                {/* HEADER */}
                <motion.div className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}

                >
                    <Htext>MORE THAN JUST A STUDIO.</Htext>
                    <p className="my-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.  quam vel placeat maiores blanditiis, explicabo repellat, assumenda exercitationem cumque dolores.</p>

                </motion.div>

                {/* BENEFITS */}
                <motion.div className="mt-5 items-center justify-between gap-8 m"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitTypes) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}

                        />
                    ))}

                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex " >
                    {/* GRAPHIC */}
                    <img className="mx-auto " alt="benefit-page-graphic" src={BenefitsPageGraphic} />

                    {/*DESCRIPTION*/}
                    <div>
                        {/*TITTLE*/}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves ">

                                <motion.div initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }} >
                                    <Htext>MILLIONS OF HAPPY MEMBERS GETTING GOOD{" "} <span className="text-primary-500" >SOUND</span> </Htext>
                                </motion.div>
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{delay:0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}>
                            <p className="my-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, praesentium.</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Magnam,</p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16" >
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles" >
                                <ActionButton setSelectedPage={setSelectedPage}>Join

                                </ActionButton>

                            </div>

                        </div>
                    </div>
                </div>


            </motion.div>
        </section>
    )
}

export default Benefits