
import './App.css'
import AsyncUpdateSlice from './components/AsyncUpdateSlice';
import PostSlice from './components/PostSlice';
import UserSlcie from './components/UserSlice';

function App() {

  return (
    <>
      <UserSlcie />
      <PostSlice />
      <AsyncUpdateSlice />
    </>
  )
}

export default App
