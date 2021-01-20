import React from "react";

function EmployeeDetails(props) {
    return (
        // <div className="text-center">
        //     <img alt={props.picture} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }} />
        //     <h3>First Name: {props.firstName}</h3>
        //     <h3>Last Name: {props.lastName}</h3>
        //     <h3>Phone: {props.phone}</h3>
        //     <h3>Email: {props.email}</h3>
        //     <h3>DOB: {props.dob}</h3>
        // </div>


        <tr>
            <td>
                <img
                    alt={props.picture}
                    className="img-fluid"
                    src={props.picture}
                    style={{ margin: "0 auto" }}
                />
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>

    );
}

export default EmployeeDetails;
