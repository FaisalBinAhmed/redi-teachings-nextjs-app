import { AnotherCounter } from "@/components/AnotherCounter";
import { useCounter } from "@/hooks/useCounter";
import { useUser } from "@/providers/UserProvider";
import { useContext } from "react";

const Redi = () => {
	const user = useUser();
	const { counter, increment, decrement } = useCounter();

	return (
		<div>
			Redi: {user}
			<div>{counter}</div>
			<button type="button" onClick={increment}>
				Increment
			</button>
			<AnotherCounter />
		</div>
	);
};

export default Redi;
