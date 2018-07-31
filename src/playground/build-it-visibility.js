let app = {
    visible: false
};

const appRoot = document.querySelector("#app");

const toggleVisibility = () => {
    app.visible = !app.visible;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{app.visible ? "Hide details" : "Show details"}</button>
            {app.visible && <p>Hey. These are some details you can now see!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();