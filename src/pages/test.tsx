import { useUser } from "@/providers/UserProvider";
import { useContext } from "react";

const TestPage = () => {
	const user = useUser();

	return <div>Redi: {user}</div>;
};

export default TestPage;
