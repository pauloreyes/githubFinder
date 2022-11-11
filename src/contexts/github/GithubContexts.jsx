import React, { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContexts = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const clearUsers = () => {
		dispatch({
			type: "CLEAR_RESULTS",
		});
	};

	const clearUser = () => {
		dispatch({
			type: "CLEAR_USER",
		});
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);

	async function getUser(login) {
		const setLoading = () => dispatch({ type: "SET_LOADING" });
		setLoading();

		const response = await fetch(`${GITHUB_URL}/users/${login}`, {});

		if (response.status === 404) {
			window.location = "/notfound";
		} else {
			const data = await response.json();
			dispatch({
				type: "GET_USER",
				payload: data,
			});
		}
	}

	async function getRepos(login) {
		const setLoading = () => dispatch({ type: "SET_LOADING" });
		setLoading();

		const params = new URLSearchParams({ sort: "created", per_page: 10 });

		const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {});
		const data = await response.json();

		dispatch({
			type: "GET_REPOS",
			payload: data,
		});
	}

	const value = {
		...state,
		dispatch,
		clearUsers,
		getUser,
		clearUser,
		getRepos,
	};

	return <GithubContexts.Provider value={value}>{children}</GithubContexts.Provider>;
};

export default GithubContexts;
