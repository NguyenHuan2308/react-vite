import "./styles.css";

const MyComponent = () => {
    // const variable = "String";
    // const variable = 25;
    // const variable = true;
    // const variable = undefined;
    // const variable = null;
    // const variable = [1,2,3];
    const variable = {
        name: "Huon",
        age: 22,
    };

    return (
        <>
            <div> {JSON.stringify(variable)} and Content in Component 1</div>
            <div>{console.log("Huon")}</div>
            <div className="child" style={{ borderRadius: "10px" }}>
                Content in Component 2
            </div>
        </>
    );
};

export default MyComponent;
