import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Form,
  Button,
  Container,
  Card,
  Col,
  Row,
  Alert,
} from "react-bootstrap";

var api_url = process.env.REACT_APP_API_URL;
var api_key = process.env.REACT_APP_API_KEY;

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    position: "",
    level: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    try {
        //const response = await fetch(`${process.env.API_URL}/record/all`);
        let url = `${api_url}user`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": api_key,
          },
          body: JSON.stringify(newPerson),
        });

        if (!response.ok) {
            const message = ""; //`An error occurred: ${response.statusText}`;
            console.log(response);
            window.alert(message);
            return;
        }

        setForm({ name: "", age: "", position: "", level: "" });
        navigate("/");
    } catch (error) {
        console.log("Error: ", error);
    }    
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <h3>Create New Record</h3>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={form.name}
                      onChange={(e) => updateForm({ name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="position">Age</label>
                    <input
                      type="text"
                      className="form-control"
                      id="age"
                      value={form.age}
                      onChange={(e) => updateForm({ age: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input
                      type="text"
                      className="form-control"
                      id="position"
                      value={form.position}
                      onChange={(e) => updateForm({ position: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="positionOptions"
                        id="positionIntern"
                        value="Intern"
                        checked={form.level === "Intern"}
                        onChange={(e) => updateForm({ level: e.target.value })}
                      />
                      <label
                        htmlFor="positionIntern"
                        className="form-check-label"
                      >
                        Intern
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="positionOptions"
                        id="positionJunior"
                        value="Junior"
                        checked={form.level === "Junior"}
                        onChange={(e) => updateForm({ level: e.target.value })}
                      />
                      <label
                        htmlFor="positionJunior"
                        className="form-check-label"
                      >
                        Junior
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="positionOptions"
                        id="positionSenior"
                        value="Senior"
                        checked={form.level === "Senior"}
                        onChange={(e) => updateForm({ level: e.target.value })}
                      />
                      <label
                        htmlFor="positionSenior"
                        className="form-check-label"
                      >
                        Senior
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Create person"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </Card.Body>              
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
