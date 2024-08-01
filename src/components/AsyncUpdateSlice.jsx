import useStore from "../store/store";

const AsyncUpdateSlice = () => {
    
    const { randomNum, fetchRandomNum } = useStore(state => state.asyncUpdateSlice);
    
    console.log('Async Update Slice rendered')

    return (
        <>
        <h1>Async Update Slice</h1>
        <p>Random Number - {randomNum}</p>
        <button onClick={fetchRandomNum}>Fetch Random Number</button>
        </>
    );
}

export default AsyncUpdateSlice;