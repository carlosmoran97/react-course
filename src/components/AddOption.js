import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        if(!error){
            e.target.elements.option.value = new String();
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <input type="submit" value="Add Option"/>
                </form>
            </div>
        );
    }
}