
const getResult = () => {
    return 4 + 4;
};

export const FirstApp = () => {
    const newMessage = 'Giovanni Rodriguez';
    const newMessage2 = [1,2,3,4,5,6,7,8,9];
    
    return (
        <>
            <h1>{ newMessage }</h1>
            <h1>{ newMessage2 }</h1>
            <h1>{ getResult() }</h1>
            <p>Algo</p>
        </>
    );
};