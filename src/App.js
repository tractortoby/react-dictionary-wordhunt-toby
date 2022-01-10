import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`,
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div
      className='App'
      style={{
        height: '100vh',
        backgroundColor: '#282c32',
        color: 'white',
      }}
    >
      <Container
        maxWidth='md'
        style={{
          display: 'flex',
          flexDireation: 'column',
          height: '100vh',
        }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
