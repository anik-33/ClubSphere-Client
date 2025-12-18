
import { motion } from 'framer-motion';

const AboutClub = () => {
    return (
        <motion.section
            className="about-club-section mt-20 max-w-full mx-auto my-10 p-6 bg-base-100 rounded shadow text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <motion.h2
                className="text-3xl font-bold mb-4 text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                About Clubs at ClubSphere
            </motion.h2>
            <motion.p
                className="text-lg text-gray-700 mb-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                Clubs are the heart of our community at ClubSphere. Whether you’re passionate about sports, arts, technology, volunteering, or anything in between, there’s a club for you! Joining a club is a great way to meet like-minded people, develop new skills, and make lasting memories.
            </motion.p>
            <motion.ul
                className="list-disc list-inside text-left text-gray-600 mb-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <li>Discover clubs that match your interests and hobbies</li>
                <li>Participate in exclusive events, workshops, and competitions</li>
                <li>Connect with members and grow your network</li>
                <li>Start your own club and lead a community</li>
            </motion.ul>
            <motion.p
                className="text-md text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                Ready to explore? Browse our clubs or create your own to start your journey today!
            </motion.p>
        </motion.section>
    );
};

export default AboutClub;