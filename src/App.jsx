import { useState } from 'react';
import { Header } from './components';
import { Todos } from './containers';

function App() {

  return (
    <div className='container'>
      <Header />
      <Todos />
    </div>
  )
}

export default App;
