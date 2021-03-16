import React, { useState } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("red");

	let classselectedred = null;
	let classselectedgreen = null;
	let classselectedyellow = null;

	if (color == "red") {
		classselectedred = "selected";
	} else {
		if (color == "green") classselectedgreen = "selected";
		else {
			if (color == "yellow") classselectedyellow = "selected";
		}
	}

	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"red light " + classselectedred}
					onClick={() => setColor("red")}></div>
				<div
					className={"yellow light " + classselectedyellow}
					onClick={() => setColor("yellow")}></div>
				<div
					className={"green light " + classselectedgreen}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};
