
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Title from '../comon/Title/Title';
import BillForm from '../formComponents/BillForm/BillForm';
import PeopleForm from '../formComponents/PeopleForm/PeopleForm';
import StatusForm from '../formComponents/StatusForm/StatusForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeTableSettings, changeTables } from '../../redux/TableRedux';

const TableForm = ({ id, status, bill, peopleAmount, maxPeopleAmount }) => {

  const dispatch = useDispatch();
const navigate = useNavigate();
const [statusValue, setStatusValue] = useState(status);
const [peopleAmountValue, setPeopleAmount] = useState(peopleAmount);
const [maxPeopleAmountValue, setMaxPeopleAmount] = useState(maxPeopleAmount);
const [billValue, setBillValue] = useState(bill);

const handleSubmit = e => {
  e.preventDefault();
  navigate("/");
  dispatch(changeTables(
    id,
    statusValue,
    peopleAmountValue,
    maxPeopleAmountValue,
    billValue
  ));
  
  // dispatch(addList({ title,description }));
}

useEffect(() => {
  if(peopleAmountValue < 0){
  setPeopleAmount(0)
  } else if (peopleAmountValue >= maxPeopleAmountValue){
    setPeopleAmount(maxPeopleAmountValue)
  } 
}, [peopleAmountValue, maxPeopleAmountValue, peopleAmount]);

useEffect(() => {
  if(maxPeopleAmountValue < 0){
  setMaxPeopleAmount(0)
  } else if (maxPeopleAmountValue > 10){
    setMaxPeopleAmount(10)
  }
}, [maxPeopleAmountValue, maxPeopleAmount]);

useEffect(() => {
  if(statusValue === 'Free' || statusValue === 'Cleaning'){
    setPeopleAmount(0)
  }
}, [statusValue])

  return (
    <Form onSubmit={handleSubmit} >
      <Title>Table {id}</Title>
      <StatusForm statusValue={statusValue} onChange={e => {
        setStatusValue(e.target.value); setBillValue(0)}} />
      <PeopleForm peopleAmountValue={peopleAmountValue} setPeopleAmount={setPeopleAmount} maxPeopleAmountValue={maxPeopleAmountValue} setMaxPeopleAmount={setMaxPeopleAmount} />

      {statusValue === 'Busy' ? <BillForm value={billValue} onChange={e => {setBillValue(e.target.value)}} /> : ''}
      
      <Button type="submit" >Update</Button>
    </Form>
  )
};

export default TableForm;