import { Card, ListGroup } from 'react-bootstrap';
import './App.css';
import Description from './components/Description';
import Name from './components/Name';
import Navigation from './components/Navigation';
import Price from './components/Price';
import Image from './components/Image';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <h1 style={{ textShadow: '2px 2px 5px red',textAlign:"center" }}>hello, Imen</h1>
      <Card style={{ width: '18rem',padding:"1%",marginLeft:'auto',marginRight:"auto"}}>
      <Card.Header><Image/></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> <Name/></ListGroup.Item>
        <ListGroup.Item><Description/></ListGroup.Item>
        <ListGroup.Item><Price/></ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );
}

export default App;
