import React from 'react';

class ParentChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: 'Initial Value...' };
        this.textChanged = this.textChanged.bind(this);
    }
    textChanged(e) {
        this.setState({ data: e.target.value });
    }
    render() {
        return (
            <div>            
                <Child TextValue={this.state.data} TextChangedEvent={this.textChanged} />
            </div>
        );
    }
}
class Child extends React.Component
{
    render() {
        return (
            <div>
                <input type="text" value={this.props.TextValue} onChange={this.props.TextChangedEvent} />
                <h4>{this.props.TextValue} </h4>
                </div>
            );
    }
}
export default ParentChild;