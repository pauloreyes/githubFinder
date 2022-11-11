import React, { useContext } from "react";
import UserItem from "./UserItem";
import GithubContexts from "../../contexts/github/GithubContexts";

export default function UserResults() {
	const { users, loading } = useContext(GithubContexts);

	if (!loading) {
		return (
			<div className='grid frid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md: grid-cols-2'>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	} else {
		return <h3>Loading</h3>;
	}
}
