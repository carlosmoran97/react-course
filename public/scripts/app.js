"use strict";

var app = {
    visible: false
};

var appRoot = document.querySelector("#app");

var toggleVisibility = function toggleVisibility() {
    app.visible = !app.visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleVisibility },
            app.visible ? "Hide details" : "Show details"
        ),
        app.visible && React.createElement(
            "p",
            null,
            "Hey. These are some details you can now see!"
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
