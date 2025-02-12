import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphics from "@/assets/BenefitsPageGraphic.png";
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Gym Facilities",
        description: "Discover a wide range of premium gym facilities, including state-of-the-art equipment, spacious workout zones, and dedicated areas for strength and cardio training. Enjoy access to group fitness classes, personal training, and recovery lounges."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Classes Structure",
        description: "Explore 100s of diverse classes designed to suit every fitness level and goal. From high-energy cardio and strength sessions to calming yoga and Pilates, there’s something for everyone. Led by expert instructors, our classes will keep you motivated and inspired!"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert Trainers",
        description: "Work with expert trainers dedicated to helping you achieve your fitness goals. With personalized guidance, professional expertise, and a focus on your progress, our trainers are here to support every step of your journey. Experience training tailored just for you!"
    }
];

const containter = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

                {/* HEADER SECTION */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        Its your ultimate wellness destination. Experience top-notch equipment, expert-led classes, and personalized training designed for all fitness levels. Our vibrant community and supportive environment will keep you motivated every step of the way. Redefine your fitness journey with us today!
                    </p>
                </motion.div>

                {/* BENEFITS SECTION */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containter}
                >
                    {benefits.map((benefits: BenefitType) => (
                        <Benefit
                            key={benefits.title}
                            title={benefits.title}
                            icon={benefits.icon}
                            description={benefits.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-25 md:flex">
                    {/* GRAPHIC */}
                    <img className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphics}
                    />
                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 40 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <HText>MILLIONS OF HAPPY MEMBERS ARE GETTING{" "}
                                        <span className="text-orange-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* DESCROPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 40 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <p className="my-5">
                                Join the millions of happy members transforming their lives through fitness! Our community is built on shared goals, supportive connections, and a commitment to health and wellness. Whether you're a beginner or an experienced athlete, you'll find the motivation, resources, and encouragement you need to succeed. Experience the joy of achieving your fitness milestones in a vibrant and uplifting environment!
                            </p>
                            <p className="mb-5">
                                We take pride in helping millions of members feel stronger, healthier, and more confident. With world-class facilities, expert trainers, and diverse classes, there's something for everyone. Our focus is not just on fitness but on building a lifestyle you will love. Be a part of a community where every member's success story inspires the next!
                            </p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div
                                className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>

                        </div>

                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits;