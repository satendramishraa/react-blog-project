import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* null evaluates to false */}
            
            { error && <div>{ error }</div> }
            { isPending && <div>loading...</div> }
            { blogs && <BlogList blogs={ blogs } title="All Blogs!" /> }

            {/* it will filter out yoshi's blog blog.author return false for yoshi's blog */}
            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" /> */}
        </div>
    );
}
 
export default Home;
