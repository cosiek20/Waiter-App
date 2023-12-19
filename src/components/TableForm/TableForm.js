
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Title from '../comon/Title/Title';
import BillForm from '../formComponents/BillForm/BillForm';
import PeopleForm from '../formComponents/PeopleForm/PeopleForm';
import StatusForm from '../formComponents/StatusForm/StatusForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeTables } from '../../redux/TableRedux';
import Loading from '../comon/Loading/Loading';

const TableForm = props => {

const id = props.id;
const dispatch = useDispatch();
const navigate = useNavigate();
const [status, setStatusValue] = useState(props.status);
const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
const [bill, setBillValue] = useState(props.bill);
const [IsLoading, setIsLoading] = useState(false)

const handleSubmit = e => {
  e.preventDefault();
  navigate("/");
  dispatch(changeTables({
    id,
    status,
    peopleAmount,
    maxPeopleAmount,
    bill
  }, setIsLoading));
  
  // dispatch(addList({ title,description }));
}

useEffect(() => {
  if(peopleAmount < 0){
  setPeopleAmount(0)
  } else if (peopleAmount >= maxPeopleAmount){
    setPeopleAmount(maxPeopleAmount)
  } 
}, [peopleAmount, maxPeopleAmount, props.peopleAmount]);

useEffect(() => {
  if(maxPeopleAmount < 0){
  setMaxPeopleAmount(0)
  } else if (maxPeopleAmount > 10){
    setMaxPeopleAmount(10)
  }
}, [maxPeopleAmount, props.maxPeopleAmount]);

useEffect(() => {
  if(status === 'Free' || status === 'Cleaning'){
    setPeopleAmount(0)
  }
}, [status])

  if(IsLoading === true) return (<Loading/>)
  return (
    <Form onSubmit={handleSubmit} >
      <Title>Table {id}</Title>
      <StatusForm statusValue={status} onChange={e => {
        setStatusValue(e.target.value); setBillValue(0)}} />
      <PeopleForm peopleAmountValue={peopleAmount} setPeopleAmount={setPeopleAmount} maxPeopleAmountValue={maxPeopleAmount} setMaxPeopleAmount={setMaxPeopleAmount} />

      {status === 'Busy' ? <BillForm value={bill} onChange={e => {setBillValue(e.target.value)}} /> : ''}
      
      <Button type="submit" >Update</Button>
    </Form>
  )
};

export default TableForm;