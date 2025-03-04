import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Greeting from './Greeting';
import Hora from './Hora';
import CustomButton from './CustomButton';
import Title from './title';
import CardContainer from './CardContainer';
import NavBar from './NavBar';


function App() {

  return (
    <>
      <Title/>
      <NavBar/>
      {/* <Hora/> */}
      {/* <Greeting name='Diego' /> */}
      <CardContainer/>
      <CustomButton contenido={'Mas informacion'}/>
      
    </>
  )
}

export default App
