import { useParams } from "next/navigation";
import { useEffect } from "react";

const BlogPage = () => {
	const params = useParams();


    const fetchData = async () => {
        const res = await fetch('/api/hello');
        const data = await res.json();
        console.log(data);
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

	return <div>Blog ID : {params?.blogid}</div>;
};
export default BlogPage;
