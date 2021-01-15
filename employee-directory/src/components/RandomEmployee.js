import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
// import SearchForm from "./SearchForm";
import EmployeeDetails from "./EmployeeDetails";
import API from "../utils/API";

API.getUsers()
    .then(res =>
        console.log(res.data.results)
    )


class RandomEmployees extends Component {
    state = {
        result: {},
    };

    componentDidMount() {
        this.getRandomEmployees();
    }

    getRandomEmployees = () => {
        API.getUsers()
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchMovies(this.state.search);
    // };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                        <Card
                            heading={this.state.result.Title || "Search for a Movie to Begin"}
                        >
                            {this.state.result.Title ? (
                                <EmployeeDetails
                                    name={this.state.result[0].name.first}
                                    phone={this.state.result[0].phone}
                                    email={this.state.result[0].email}
                                    dob={this.state.result[0].dob.date}
                                />
                            ) : (
                                    <h3>No Results to Display</h3>
                                )
                            }
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
        );
    }
}

export default RandomEmployees;