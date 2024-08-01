import useStore from "../store/store";

const UserSlcie = () => {
    
    const email = useStore(state => state.email);
  const name = useStore(state => state.name);

  const setEmail = useStore(state => state.setEmail);
  const setName = useStore(state => state.setName);


  console.log('User Slice rendered')
    
    return (
        <>
            <h1>User Slice</h1>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email' />
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Name' />
    
        </>
    );
}

export default UserSlcie;