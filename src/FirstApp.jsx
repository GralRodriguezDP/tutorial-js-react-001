
const getResult = () => {
    return 4 + 4;
};

export const FirstApp = ( { title, subTitle } ) => {
    const newMessage = 'Giovanni Rodriguez';
    const newMessage2 = [1,2,3,4,5,6,7,8,9];
    
    return (
        <>
            <h1>{ newMessage }</h1>
            <h1>{ newMessage2 }</h1>
            <h1>{ getResult() }</h1>
            <h1>{ title }</h1>
            <h1>{ subTitle }</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem vitae adipisci et soluta, dolorum temporibus consectetur commodi accusantium aut iure dicta, omnis sequi exercitationem architecto molestias dolore voluptate asperiores minus?</p>
        </>
    );
};