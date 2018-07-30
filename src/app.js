const template = (
    <div>
        <h1>Indecision App</h1>
        <p>Put your life in the hands of a computer</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
let count = 0;

const addOne = () => {
    console.log("addOne");
};

const minusOne = () => {
    console.log("minusOne");
};

const reset = () => {
    console.log("reset");
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

//Challenge
// -1 button - setup minusOne function and register click handler than log's "minusOne"
// reset button "reset" - reset function log "reset"
const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);