import './App.css';
import styled from 'styled-components';

function App() {
  const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

  return (
    <div className="App">
      <h1>Jessica Contreras Aguilar</h1>
      <h2>Práctica de componentes</h2>
      <Button as='a' href='https://www.instagram.com/jessii_contreras/'>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
}

export default App;
