const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const appRoot = document.getElementById("app");

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push( option );
        e.target.elements.option.value = new String();
        renderApp();
    }
};


const removeAll = () => {
    app.options = [];
    renderApp();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNum]);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle&&<p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {app.options.map((option, index) => <li key={index}>{option}</li> )}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
