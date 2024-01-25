import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant={
    hidden:{opacity:1,scale:0.9}
}



type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
        <motion.div
        variants={childVariant}
         className='mt-5 rounded-md border-2 border-gray-50' >
            <div className='mb-4 flex justify-center' >
                <div className='rounded-full border-2 border-gray-100'>{icon}</div>

            </div>
            <h4 className='font-bold' >{title}</h4>
            <p className='my-3'>{description}</p>
            <AnchorLink className="text-sm font-bold text-primary-500 underline " onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#{SelectedPage.ContactUs}`}>
                <p>Learn More</p>
            </AnchorLink>
        </motion.div>

    )
}

export default Benefit