import TableForm from "../../TableForm/TableForm";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getTableById } from "../../../redux/TableRedux";

const TableInfo = () => {

  const { Id } = useParams();

  const table = useSelector(state => getTableById(state, Id))

  console.log(table)
  if(!table[0]) return <Navigate to="/" />
  return(
    <div>
      {table.map(tableForm => <TableForm key={Id} {...tableForm}/>)}
    </div>
  )
};

export default TableInfo;