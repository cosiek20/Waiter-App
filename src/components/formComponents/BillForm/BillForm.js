import { Form, Row, Col } from "react-bootstrap"

const BillForm = props => {

  return (
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Bill:
        </Form.Label>
        <Col as={Row} sm={3}>
          <Form.Label column sm={1}>
            $
          </Form.Label>
          <Col sm={3}>
            <Form.Control
            value={props.value}
            onChange={props.onChange}
            type="text"  />
          </Col>
        </Col>
    </Form.Group>
  )
};

export default BillForm;