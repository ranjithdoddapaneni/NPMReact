import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    personID: 100,
                    Name: "Ranjith",
                    Designation: "software developer"
                },
                {
                    personID: 101,
                    Name: "Doddapaneni",
                    Designation: "software developer"
                },
                {
                    personID: 102,
                    Name: "kumar",
                    Designation: "software developer"
                }]
        }
    }
    render() {
        return (
            <div>
                <Header name="This is my header" />
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
                <Footer name="this is my footer" />
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.personID}</td>
                <td>{this.props.data.Name}</td>
                <td>{this.props.data.Designation}</td>
            </tr>
        );
    }
}
export default App;
