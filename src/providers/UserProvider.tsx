import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";

type User = {
	name: string;
	id: number;
};

const UserContext = createContext<string>("faisal");

export const UserProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<string>("faisal");

	// useEffect(() => {
	// 	//pretend fetching
	// 	setUser({
	// 		name: "Faisal",
	// 		id: 1,
	// 	});
	// }, []);

	// const providedValue: User | null = user;

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
	const user = useContext(UserContext);

	if (!user) {
		throw new Error("useUser must be used within the context provider");
	}
	return user;
};
