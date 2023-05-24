import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

function App() {
  const [uni, setUni] = useState();

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=United+States")
      .then((res) => {
        setUni(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="App">
      <h1>Data List Of Universities</h1>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Country</th>
            <th>Alpha_two_code</th>
            <th>Name</th>
            <th>Domains</th>
            <th>Web_pages</th>
          </tr>
        </thead>
        <tbody>
          {uni &&
            uni.slice(0, 10).map((record, id) => (
              <tr key={id}>
                <td>{record.country}</td>
                <td>{record.alpha_two_code}</td>
                <td>{record.name}</td>
                <td>{record.domains}</td>
                <td>{record.web_pages}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
