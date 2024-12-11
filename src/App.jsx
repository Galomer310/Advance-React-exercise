import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";
import NavBar from "./components/NavBar";
import PostList from "./components/PostList";
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

function App() {

  return (
    <>
      {/* <NavBar/>
      <Routes>
        <Route path="/" element={<ErrorBoundry><HomeScreen/></ErrorBoundry>}/>
        <Route path="/profile" element={<ErrorBoundry><ProfileScreen/></ErrorBoundry>}/>
        <Route path="/shop" element={<ErrorBoundry><ShopScreen/></ErrorBoundry>}/>
      </Routes>
      <PostList/> */}
      <Example1 />
      <Example2 />
      <Example3 />
    </>
  )
}

export default App
