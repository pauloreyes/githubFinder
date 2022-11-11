import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
			<div className='container mx-auto'>
				<div className='flex-none px-2 mx-2'>
					<FaGithub className='inline pr-2 text-3xl' />
					<Link to='/' className='text-lg font-bold align-middle'>
						Github Finder
					</Link>
				</div>
			</div>
			<div className='flex-1 px-2 mx-2'>
				<Link to='/' className='btn btn-ghost btn-sm rounded-btn mx-1'>
					Home
				</Link>
				<Link to='/about' className='btn btn-ghost btn-sm rounded-btn mx-1'>
					About
				</Link>
			</div>
		</div>
	);
}
