import { RiGraduationCapFill } from 'react-icons/ri'
function Navbar() {
	return (
		<div className='lg:mx-16 lg:my-8'>
			<div className="px-5 lg:border-2 lg:rounded-lg navbar lg:border-base-300">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
							<li><a>Home</a></li>
							<li>
								<a>Find Help</a>
								<ul className="p-2">
									<li><a>Find Teammate</a></li>
									<li><a>Find Mentor</a></li>
								</ul>
							</li>
							<li><a>Events</a></li>
							<li><a>Learn</a></li>
							<li><a>Sell/Buy</a></li>
						</ul>
					</div>
					<button className="text-base normal-case lg:text-xl btn btn-ghost"><RiGraduationCapFill className='text-xl lg:text-3xl text-primary' /> Hustler&apos;s<span className='text-primary'>Help</span></button>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="px-1 font-bold menu menu-horizontal">
						<li><a>Home</a></li>
						<li tabIndex={0}>
							<details>
								<summary>Find Help</summary>
								<ul className="p-2">
									<li><a>Find Teammate</a></li>
									<li><a>Find Mentor</a></li>
								</ul>
							</details>
						</li>
						<li><a>Events</a></li>
						<li><a>Learn</a></li>
						<li><a>Sell/Buy</a></li>
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn btn-sm lg:btn-md btn-primary text-neutral-content">Sign In</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar