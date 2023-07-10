import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Col,
  Row,
  Alert,
} from "react-bootstrap";

var api_url = process.env.REACT_APP_API_URL;
var api_key = process.env.REACT_APP_API_KEY;

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.age}</td>
    <td>{props.record.email}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>      
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);
    
  useEffect(() => {
    async function getRecords() {

        try {
            //const response = await fetch(`${process.env.API_URL}/record/all`);
            let url = `${api_url}user/all`;
            const response = await fetch(url, {
              method: "GET",
              Accept: "application/json",
              headers: {
                "api-key": api_key
              },
            });
            console.log(response);
            
            if (!response.ok) {
                const message = '';//`An error occurred: ${response.statusText}`;
                console.log(response);
                return;
            }

            const records = await response.json();
            setRecords(records);            
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {

    if (!window.confirm("Are you sure you want to delete the record?")) {
        return false;
    }

    try {
        
        let url = `${api_url}user/delete/${id}`;
        const response = await fetch(url, {
            method: "DELETE",
            Accept: "application/json",
            headers: {
                "api-key": api_key,
            },
        });

        console.log(response);
        if (!response.ok) {
            const message = "An error has occurred"; //`An error occurred: ${response.statusText}`;
            console.log(response);
            window.alert(message);
            return;
        }
        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);        
    } catch (error) {
        console.log("Error: ", error);
    }    
    
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <Container>
        <div className="border border-3 border-primary"></div>
        <Card className="shadow">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-uppercase ">Record List</h2>
              <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Level</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{recordList()}</tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
