import { RiGraduationCapFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
	// const dispatch = useDispatch();
	const { firstName, lastName, token, role, isLoggedIn } = useSelector(state => state.auth);
	console.log(firstName, lastName, token, role, isLoggedIn);
	const navigate = useNavigate();
	return (
		<div className='lg:mx-16 lg:my-8'>
			<div className="px-5 lg:border-2 lg:rounded-lg navbar lg:border-neutral-400">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
							<li onClick={() => navigate('/')}><a>Home</a></li>
							<li>
								<a>Find Help</a>
								<ul className="p-2">
									<li onClick={() => navigate('/teammates')}><a>Find Teammate</a></li>
									<li onClick={() => navigate('/mentors')}><a>Find Mentor</a></li>
								</ul>
							</li>
							<li onClick={() => navigate('/events')}><a>Events</a></li>
							<li onClick={() => navigate('/courses')}><a>Learn</a></li>
							<li onClick={() => navigate('/shop')}><a>Sell/Buy</a></li>
						</ul>
					</div>
					<button className="text-base normal-case lg:text-xl btn btn-ghost"><RiGraduationCapFill className='text-xl lg:text-3xl text-primary' /> Hustler&apos;s<span className='text-primary'>Help</span></button>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="px-1 font-bold menu menu-horizontal">
						<li onClick={() => navigate('/')}><a>Home</a></li>
						<li tabIndex={0}>
							<details>
								<summary>Find Help</summary>
								<ul className="p-2">
									<li onClick={() => navigate('/teammates')}><a>Find Teammate</a></li>
									<li onClick={() => navigate('/mentors')}><a>Find Mentor</a></li>
								</ul>
							</details>
						</li>
						<li onClick={() => navigate('/events')}><a>Events</a></li>
						<li onClick={() => navigate('/courses')}><a>Learn</a></li>
						<li onClick={() => navigate('/shop')}><a>Sell/Buy</a></li>
					</ul>
				</div>
				{
					isLoggedIn
						?
						<div className="gap-2 navbar-end">
							<div className="dropdown dropdown-end">
								<label tabIndex={0} className="btn btn-ghost btn-circle">
									<div className="indicator">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
										<span className="badge badge-sm indicator-item">0</span>
									</div>
								</label>
								<div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
									<div className="card-body">
										<span className="text-lg font-bold">8 Items</span>
										<span className="text-info">Subtotal: $999</span>
										<div className="card-actions">
											<button className="btn btn-primary btn-block">View cart</button>
										</div>
									</div>
								</div>
							</div>
							<div className="dropdown dropdown-end">
								<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
									<div className="w-10 rounded-full">
										<img src="https://i.pravatar.cc/50" alt="AVATAR" />
									</div>
								</label>
								<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
									<li>
										<a className="justify-between">
											Profile
											<span className="badge">New</span>
										</a>
									</li>
									<li><a>Settings</a></li>
									{/* TODO: handle logout */}
									<li><a onClick={() => { }} >Logout</a></li>
								</ul>
							</div>
						</div>
						:
						<div className="navbar-end">
							{/* TODO: handle sign in */}

							<div className="dropdown dropdown-end">
								<label tabIndex={0}>
									<a className="btn btn-sm lg:btn-md btn-primary text-neutral-content">Sign In</a>
								</label>
								<div tabIndex={0} className="dropdown-content card shadow z-[1] card-compact p-2 bg-base-100 rounded-box w-64 mt-3">
									<div className="items-center text-center card-body">
										<h2 className="card-title">Sign in as</h2>
										<div className="card-actions flex-nowrap">
											<button onClick={() => navigate('/mentor/signin')} className="btn btn-primary">Mentor</button>
											<button onClick={() => navigate('/student/signin')} className="btn btn-primary">Student</button>
										</div>
									</div>
								</div>
							</div>
						</div>
				}
			</div>
		</div>
	)
}

export default Navbar