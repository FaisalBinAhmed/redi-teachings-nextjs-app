import { useParams } from "next/navigation";

const BlogPage = () => {
	const params = useParams();
    console.log(params);
	return <div>Blog ID : {params?.blogid}</div>;
};
export default BlogPage;
