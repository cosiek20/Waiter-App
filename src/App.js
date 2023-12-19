import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTables } from "./redux/TableRedux";
import Home from "./components/Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import TableInfo from "./components/Pages/TableInfo/TableInfo";

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>
      <Container >
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/table/:Id" element={<TableInfo />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
