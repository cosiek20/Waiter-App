import { Form, Row, Col } from "react-bootstrap"

const PeopleForm = ({ peopleAmountValue, setPeopleAmount, maxPeopleAmountValue, setMaxPeopleAmount }) => {


  return (
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          People:
        </Form.Label>
        <Col as={Row} sm={3}>
          <Col sm={3}>
            <Form.Control 
            value={peopleAmountValue}
            onChange={e => {setPeopleAmount(e.target.value)}}
            type="text"  />
          </Col>
          <Form.Label column sm={1}>
            /
          </Form.Label>
          <Col sm={3}>
            <Form.Control 
            value={maxPeopleAmountValue}
            onChange={e => {setMaxPeopleAmount(e.target.value)}}
            type="text"  />
          </Col>
        </Col>
    </Form.Group>
  )
};

export default PeopleForm;