import React,{useState, useCallback} from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import NewsPage from "./pages/NewsPage";
import Categories from "./components/Categories";
import { Route,Routes,Router, BrowserRouter } from "../node_modules/react-router-dom/index";

const App=()=>{
  // const [category,setCategory]=useState('all');
  // const onSelect = useCallback(category=>setCategory(category),[]);

  // return(
  //   <>
  //   <Categories category={category} onSelect={onSelect}/>
  //   <NewsList category={category}/>
  //   </>
  // )

  return(
  <>
    <Routes><Route path="/:category?" element={NewsPage}/></Routes>
  </>
  );
  
};

export default App;