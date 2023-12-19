import { getAllTables } from "../../redux/TableRedux";
import Table from "../Table/Table";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TableList = () => {

  const tables = useSelector(state => getAllTables(state));

  console.log(tables)
  
  return(
    <div>
      <section>
        {tables.map(table => <Table key={table.id} {...table} />)}
      </section>
    </div>
  )
};

export default TableList;