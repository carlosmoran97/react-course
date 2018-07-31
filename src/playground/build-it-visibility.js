class VisibilityApp extends React.Component {
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }
    toggleVisibility(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible?"Hide me":"Show me"}</button>
                {this.state.visible && <p>Hey. This is some text that you now see.</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityApp />, document.getElementById("app"));