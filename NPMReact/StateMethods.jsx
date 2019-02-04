import React from 'react';
class StateMethods extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.setStatehandler = this.setStatehandler.bind(this);
        this.showAlertHandler = this.showAlertHandler.bind(this);
        this.clearStateHandler = this.clearStateHandler.bind(this);

    }

    setStatehandler() {
        var item = "Set State....";
        var array = this.state.data.slice();
        array.push(item);
        this.setState({ data: array });
    }
    clearStateHandler() {
        this.setState({ data: [] });
    }
    showAlertHandler() {
        alert('Alert');
    }
    render() {
        return (
            <div>
                <button onClick={this.setStatehandler}>Set State</button><br />
                <button onClick={this.showAlertHandler}>Show Alert</button>
                <button onClick={this.clearStateHandler}>Clear State</button>
                <h4>State Array : {this.state.data}</h4>
            </div>
        );
    }
}
export default StateMethods;