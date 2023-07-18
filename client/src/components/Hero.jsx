import brushStroke from '../assets/brushStroke.svg'

function Hero() {
	return (
		<div className="flex flex-col items-center justify-center gap-6 my-12">
			<div>
				<h1 className="mb-3 text-4xl font-extrabold text-center md:text-7xl">
					Unleash Your<div className="relative mb-1 md:mb-2">Entrepreneurial <img src={brushStroke} className='absolute w-full h-full -bottom-5 md:-bottom-9 -z-10' alt="" /> </div> Potential
				</h1>
				<p className="text-center md:text-xl">
					Learn, Connect, Unleash Your Entrepreneurial Brilliance!
				</p>
			</div>
			<button className="rounded-full btn btn-primary">Join Us</button>
			<div className='p-12 my-12 text-xl text-center md:px-48 bg-base-300'>
				We provide aspiring entrepreneurs with learning resources, networking opportunities, and mentorship to empower them on their journey to success. Through these comprehensive support systems, we equip and enable entrepreneurs to thrive in the competitive business landscape.
			</div>
		</div>
	)
}

export default Hero