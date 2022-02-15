import Progress from "./components/Progress";
import Alert from "./components/Alert"

function App() {
  return (
    <div>
      <Progress procentage = {60} />
      <Alert type = {"danger"} >
        <h4 className>Hello</h4>
      </Alert>
  
       
   </div>
  );
}

export default App;
