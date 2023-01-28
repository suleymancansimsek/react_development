import './App.css';

const Person = (props) =>{
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h1>LastName: {props.lastName}</h1>
    <h2>Age: 30</h2>
    </>
  )
}
const App = () => {
  return (
      <div className="App">
      <Person name = {'Suleyman'} lastName = {'Simsek'} / >
      <Person name = {'Matt'} lastName = {'Damon'} / >
      <Person name = {'Nicholas'} lastName = {'Blabla'} / >
    </div>
  );
}

export default App;
