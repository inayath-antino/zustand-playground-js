import { useShallow } from "zustand/react/shallow";
import useStore from "../store/store";

const PostSlice = () => {
    
    // useShallow is used to prevent re-renders when values other than the one being used are changed
    const { body, decLikes, incLikes, likes, setBody, setTitle, title } = useStore(useShallow(state => ({title: state.title, body: state.body, likes: state.likes,
        setTitle: state.setTitle, setBody: state.setBody, incLikes: state.incLikes, decLikes: state.decLikes
      })))


      console.log('Post Slice rendered')
    
    return (
        <>
        <h1>Post Slice</h1>
      <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)} placeholder='Enter Title' />
      <textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
      
      <p>Likes - {likes}</p>
      <button onClick={incLikes}>Increase Like</button>
      <button onClick={decLikes}>Decrease Like</button>
        </>
    );
}

export default PostSlice;