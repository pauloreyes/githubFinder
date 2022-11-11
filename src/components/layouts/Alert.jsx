import React, { useContext } from "react";
import AlertContexts from "../../contexts/alert/AlertContexts";

export default function Alert() {
	const { alert } = useContext(AlertContexts);

	return (
		alert != null && (
			<p className='flex items-start mb-4 space-x-2'>
				<div>
					<div className='font-bold capitalize'>
						{alert.type}: <span className='normal-case font-normal'>{alert.msg}</span>
					</div>
				</div>
			</p>
		)
	);
}
