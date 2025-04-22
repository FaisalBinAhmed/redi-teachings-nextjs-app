import { useCounter } from "@/hooks/useCounter";

export const AnotherCounter = () => {
	const { counter, increment, decrement } = useCounter();

	return (
		<div>
			Another Counter
			<div>{counter}</div>
			<button type="button" onClick={increment}>
				Increment
			</button>
		</div>
	);
};
