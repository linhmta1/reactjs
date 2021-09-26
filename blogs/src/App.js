import Header from './components/Header';
import Homepage from './pages/Hompage';
import Footer from './components/Footer';
import DemoButtonComp from './demo/DemoButtonComp';
import DemoTitle from './demo/DemoTitle';
function App() {
  return (
    <div className="wrapper-content">
      <DemoTitle/>
      <Header/>
      <Homepage/>
      <div className="spacing"></div>
      <Footer/> 
    </div>
  );
}

export default App;
