import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Lists = () => {
	const [listData, setListData] = useState([]);
	useEffect(() => {
		axiosWithAuth()
			
			.get("/api/tasks")
			.then(res => {
				console.log(res);
				setListData(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<ul>
				{listData.map(list => {
					return <li>{list}</li>;
				})}
			</ul>
		</div>
	);
};

export default Lists;
