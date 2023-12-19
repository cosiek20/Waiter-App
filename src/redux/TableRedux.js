import { API_URL } from "../config";

// selectors
export const getAllTables = state => state.tables;

export const getTableById = ({ tables }, id) => 
  tables.filter(table => table.id === id);

// actions
const createActionName = actionName => `app/table/${actionName}`;
const CHANGE_TABLE_SETTINGS = createActionName('CHANGE_TABLE_SETTINGS');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//action creators
export const changeTableSettings = payload => ({ type: CHANGE_TABLE_SETTINGS, payload });
export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const fetchTables = (setIsLoading) => {
  console.log(setIsLoading)
  setIsLoading(true)
  return (dispatch) => {
    
    fetch(`${API_URL}/api/tables`)
      .then(response => response.json())
      // .then(tables => dispatch(updateTables(tables)),
      // setIsLoading(false))
      .then(tables => {
        dispatch(updateTables(tables));
        setIsLoading(false);
      })
  }
  
};
export const changeTables = (payload, setIsLoading) => {
  console.log(setIsLoading)
  return (dispatch) => {
    setIsLoading(true)
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...payload
      }),
    };
    console.log(payload)
    fetch(`${API_URL}/tables/${payload.id}`, options)
      .then(console.log('sent'))
      .then(dispatch(changeTableSettings(payload)),
      setIsLoading(false))
  }
};


const tableChange = (statePart = [], action) => {
  switch(action.type) {
    case CHANGE_TABLE_SETTINGS:
      return statePart.map((table) => (table.id === action.payload.id) ?  { ...table, ...action.payload} : table);
      case UPDATE_TABLES:
        return [...action.payload];
    default:
      return statePart;
  }
};

export default tableChange;