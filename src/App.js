import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTables } from "./redux/TableRedux";
import Home from "./components/Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import TableInfo from "./components/Pages/TableInfo/TableInfo";
import Loading from "./components/comon/Loading/Loading";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import Footer from "./components/comon/Footer/Footer";

function App() {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => dispatch(fetchTables(setIsLoading)), [dispatch]);

  console.log(isLoading)
  if(isLoading === true) return (
  <Container >
   <NavBar/>
   <Loading />
  </Container>
  );
  return (
    <div>
      <Container >
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/table/:Id" element={<TableInfo />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
