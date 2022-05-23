import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
import AddUserForm from './components/AddUserForm';
import { removeUser } from './redux/slice/Slice';

export default function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  async function handleRemoveUser(id) {
    dispatch(removeUser(id))
  }
  return (
    <div className='App'>
    <h1>Redux app</h1>
    
    <hr/>
    <AddUserForm/>
    <div className='users-container'>
      {user.users.map((user, i) => (
        <div key={i} className="user-card">
            <img src={user.avatar} alt="avatar" className='avatar'/>
            <h2>{user.name}</h2>
            <p>{user.city}</p>
            <button onClick={() => handleRemoveUser(user.id)}>remover</button>
        </div>
      ))}
    </div>
    </div>
  );
}

