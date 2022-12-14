const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export async function searchUsers(text) {
	const params = new URLSearchParams({ q: text });

	const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {});
	const { items } = await response.json();

	return items;
}
