import { Outlet, Link } from "react-router-dom";
import Header from "../components/header"
import Footer from "../components/footer"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Layout = () => {
  return (
    <>
   <div class="container-fluid" margin="auto"> 
  <div class="row">
    <div class="col align-self-start">
    
    <Header></Header>
    </div>
    <div class="col align-self-end">
  		<Navbar bg="warning" variant="light" expand="xxl">  
 		   <Nav variant="pills" className="me-auto" justify="true">
      			<Nav.Link href="/">Home</Nav.Link>
      			<Nav.Link href="/products">Products</Nav.Link>
      			<Nav.Link href="/blogs">Blogs</Nav.Link>
      			<Nav.Link href="/contact">Contact</Nav.Link>
    		</Nav>
    
  </Navbar>
  </div>
  <div class="row">
      <Outlet />
      <Footer></Footer>
      </div>
      </div>
      </div>
    </>
  )
};

export default Layout;