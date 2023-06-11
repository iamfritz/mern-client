import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

var api_url = process.env.REACT_APP_API_URL;
var api_key = process.env.REACT_APP_API_KEY;

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
        const id = params.id.toString();

        try {
            //const response = await fetch(`${process.env.API_URL}/record/all`);
            let url = `${api_url}user/${params.id.toString()}`;
            const response = await fetch(url, {
                method: "GET",
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

            const record = await response.json();
            if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
            }

            setForm(record);

        } catch (error) {
          console.log("Error: ", error);
        }
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    
    const editedPerson = {
      name: form.name,
      age: form.age,
      position: form.position,
      level: form.level,
    };

    // This will send a post request to update the data in the database.
    try {
      let url = `${api_url}user/update/${params.id}`;
      const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(editedPerson),
        Accept: "application/json",
        headers: {
          "Content-Type": "application/json",
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
      
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
    }    
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={form.age}
            onChange={(e) => updateForm({ age: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position: </label>
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
            <label htmlFor="positionIntern" className="form-check-label">
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
            <label htmlFor="positionJunior" className="form-check-label">
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
            <label htmlFor="positionSenior" className="form-check-label">
              Senior
            </label>
          </div>
        </div>
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}