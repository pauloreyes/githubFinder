import { Link } from "react-router-dom";

export default function UserItem({ user: { login, avatar_url } }) {
	return (
		<div>
			<div className='card shadow-md compact side bg-base-100'>
				<div className='flex-row items-center xpace-x-4 card-body'>
					<div className='avatar'>
						<div className='rounded-full shadow w-14 h-14'>
							<img src={avatar_url} alt='Profile' />
						</div>
					</div>
					<div className='ml-2'>
						<h2 className='card-title'>{login}</h2>
						<Link to={`user/${login}`} className='text-base-content text-opacity-40'>
							Visit Profile
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
