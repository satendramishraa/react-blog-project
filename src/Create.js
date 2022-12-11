import { useState } from "react";
import { useHistory  } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1)  <--- redirecting user to one page back
            history.push('/')
        })

        
    }
    
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                type="text"
                required 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                />
                <label>Blog body: </label>
                <textarea
                required
                value={body}
                onChange={(event) => setBody(event.target.value)}
                ></textarea>
                <label>Blog author: </label>
                <select
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Submit Blog</button> }
                { isPending && <button disabled>adding blog...</button> }
                <div className="output">
                    <p>{ title }</p>
                    <p>{ body }</p>
                    <p>{ author }</p>
                </div>
            </form>
        </div>
     );
}
 
export default Create;