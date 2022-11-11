import React, { useState, useContext } from "react";
import GitHubContexts from "../../contexts/github/GithubContexts";
import AlertContexts from "../../contexts/alert/AlertContexts";
import { searchUsers } from "../../contexts/github/GithubActions";

export default function UserSearch() {
	const [text, setText] = useState("");

	const { users, clearUsers, dispatch } = useContext(GitHubContexts);
	const { setAlert } = useContext(AlertContexts);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (text === "") {
			setAlert("Please enter something", "error");
		} else {
			dispatch({ type: "SET_LOADING" });
			const users = await searchUsers(text);
			dispatch({ type: "GET_USERS", payload: users });
			setText("");
		}
	};

	return (
		<div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
			<div>
				<form className='form-control' onSubmit={handleSubmit}>
					<div className='relative'>
						<input
							type='text'
							className='w-full pr-40 bg-gray-200 input input-lg text-black'
							placeholder='Search'
							value={text}
							onChange={handleChange}
						/>
						<button
							type='submit'
							className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
						>
							Go
						</button>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button className='btn btn-ghost btn-lg' onClick={clearUsers}>
						Clear
					</button>
				</div>
			)}
		</div>
	);
}
