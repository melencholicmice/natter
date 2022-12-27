import './App.sass';
import { Route} from 'react-router-dom';
import Homepage from '../src/pages/Homepage';
import ChatPage from '../src/pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Homepage} exact/>
      <Route path='/chats'  component={ChatPage}/>
    </div> 
  );
}

export default App;
