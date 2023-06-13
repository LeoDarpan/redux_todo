import { useEffect } from 'react';
import { Header, Form } from './components';
import { Todos } from './containers';
import { useDispatch } from 'react-redux';
import { getTodos } from './actions/todos';
import { TEST } from './actionConstants';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos);
  }, [])
  
  return (
    <>
      <Header />
      <Form />
      <Todos />
    </>
  )
}

export default App;
