import './styles.css';

const MyComponent = () => {
    return (
        <>
            <div> Content in Component 1</div>
            <div className='child' style={{borderRadius: "10px"}}> Content in Component 2</div>
        </>
    );
};

export default MyComponent;
