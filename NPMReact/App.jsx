import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
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
                <Header headerName={this.props.headerName} />
                <table >
                    <thead>
                        <tr>
                            <th> Serial Number</th>
                            <th>Person ID</th>
                            <th>Person Name</th>
                            <th>Designation</th>
                        </tr>
                        </thead>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow index={i} key={i} per={person} />)}
                    </tbody>
                </table>
                <Footer footerName={this.props.footerName} />
            </div>
        );
    }
}
App.defaultProps = {
    headerName: "Header from props...",
    footerName: "Footer from props..."
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.per.personID}</td>
                <td>{this.props.per.Name}</td>
                <td>{this.props.per.Designation}</td>
            </tr>
        );
    }
}
export default App;
