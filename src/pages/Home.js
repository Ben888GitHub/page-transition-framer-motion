import React from 'react';
import { motion } from 'framer-motion';
function Home() {
	return (
		<motion.div
			className="container text-center  bg-black"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 3 }}
		>
			<motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }}>
				Home page
			</motion.h1>
			<motion.p initial={{ scale: 0 }} animate={{ scale: 1.5 }}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, qui.
				Hic animi distinctio et maiores, ab nostrum at neque. Iusto minus
				perspiciatis vitae unde? In quibusdam nulla perspiciatis laboriosam ex.
			</motion.p>
		</motion.div>
	);
}

export default Home;
