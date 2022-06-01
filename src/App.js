import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import Container from './Component/Container';

function App() {
  const number = 5;
  return (
    <Container>
      <div>
        <Counter/>
      </div>
    </Container>
  );
}

export default App;
