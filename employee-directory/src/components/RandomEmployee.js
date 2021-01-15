import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import Wrapper from "./Wrapper";
import SearchForm from "./SearchForm";
import EmployeeDetails from "./EmployeeDetails";
import API from "../utils/API";

class RandomEmployees extends Component {
    state = {
        employees: [],
        search: ''
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


    searchEmployee = (filter) => {
        console.log('Search', filter);
        const filteredList = this.state.employees.filter((employee) => {
            let values = Object.values(employee).join('').toLowerCase();
            console.log(values);
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ employees: filteredList });
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };

    render() {
        return (
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <Col size="md-4">
                            <h2>Employee Directory</h2>
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
                                                <th>Name</th>
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
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </Card>
                            </Col>
                            {/* <Col size="md-4">
                        <Card heading="Search">
                            <SearchForm
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col> */}
                        </Row>
                    </Container>
                </div>
            </Wrapper>
        );
    }
}

export default RandomEmployees;
