import { Form, Row, Col } from "react-bootstrap";


const StatusForm = ({ statusValue, onChange }) => {



  return (
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Status:
    </Form.Label>
    <Col sm={4}>
    <Form.Select
      aria-label="Default select example"
      as="select"
      value={statusValue}
      // defaultValue={statusValue}
      onChange={ onChange }>
      <option value="Free">Free</option>
      <option value="Busy">Busy</option>
      <option value="Reserved">Reserved</option>
      <option value="Cleaning">Cleaning</option>
    </Form.Select>
    </Col>
  </Form.Group>
  );
};

export default StatusForm;