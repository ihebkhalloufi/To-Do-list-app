import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { ListGroup } from 'react-bootstrap';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import MainNavbar from './components/MainNvbar';
function App() {
  return (
    <div className="App ">
      <div className='TOdotask'>
      <MainNavbar/> 
      <div className='divinp'><TodoInput/></div>
      
      <div className='divone'> 
       
        <TodoList/>
        </div>
    </div>
  </div>
  );
}

export default App;
