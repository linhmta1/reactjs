import Header from './components/Header';
import Homepage from './pages/Hompage';
import Footer from './components/Footer';
import DemoButtonComp from './demo/DemoButtonComp';
function App() {
  return (
    <div className="wrapper-content">
      <DemoButtonComp/>
      <Header/>
      <Homepage/>
      <div className="spacing"></div>
      <Footer/> 
    </div>
  );
}

export default App;
