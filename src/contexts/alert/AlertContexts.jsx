import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContexts = createContext();

export const AlertProvider = ({ children }) => {
	const initialState = null;
	const [state, dispatch] = useReducer(alertReducer, initialState);

	//set an alert

	const setAlert = (msg, type) => {
		dispatch({
			type: "SET_ALERT",
			payload: { msg, type },
		});

		setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
	};

	return (
		<AlertContexts.Provider value={{ alert: state, setAlert }}>
			{children}
		</AlertContexts.Provider>
	);
};
export default AlertContexts;
