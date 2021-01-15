import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import Wrapper from "../Wrapper";
import SearchForm from "../SearchForm";
import EmployeeDetails from "../EmployeeDetails";
import API from "../../utils/API";

class RandomEmployees extends Component {
    state = {
        employees: [],
        search: '',
        sort: ''
    };

    componentDidMount() {
        this.getRandomEmployees();
    }

    getRandomEmployees = () => {
        API.getUsers()
            .then((res) => {
                console.log(res.data.results);
                this.setState({
                    employees: res.data.results.map((e, i) => ({
                        name: e.name.first + " " + e.name.last,
                        picture: e.picture.large,
                        email: e.email,
                        phone: e.phone,
                        dob: e.dob.date,
                        key: i,
                    })),
                });
            })
            .catch((err) => console.log(err));
    };

    sortByName = () => {
        console.log("sort button clicked");
        console.log(this.state.employees);
        const sortedList = this.state.employees.name.sort();
        console.log(sortedList);
        this.setState({ employees: sortedList });

        // this.state.employees.sort();
    };


    searchEmployee = (filter) => {
        console.log('Search', filter);
        const filteredList = this.state.employees.filter((employee) => {
            let values = Object.values(employee).join('').toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ employees: filteredList });
        console.log(filteredList);
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        });
        console.log('Handle ', this.state.search);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('Button Clicked', this.state.search, event);
        this.searchEmployee(this.state.search);
    };

    render() {
        return (
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <Col size="md-4">
                            <SearchForm
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Col>
                    </div>
                    <Container>
                        <Row>
                            <Col size="md-12">
                                <Card>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Photo</th>
                                                <th><button onClick={this.sortByName}>Name</button></th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>DOB</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[...this.state.employees].map((item) => (
                                                <EmployeeDetails
                                                    picture={item.picture}
                                                    name={item.name}
                                                    email={item.email}
                                                    phone={item.phone}
                                                    dob={item.dob}
                                                    key={item.key}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Wrapper>
        );
    }
}

export default RandomEmployees;
