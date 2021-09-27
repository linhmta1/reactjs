import Header from './components/Header';
import Homepage from './pages/Hompage';
import Footer from './components/Footer';
import DemoButtonComp from './demo/DemoButtonComp';
import DemoTitle from './demo/DemoTitle';
import DemoInput from './demo/DemoInput';
import DemoArticleItems from './demo/DemoArticleItems';
function App() {
  return (
    <div className="wrapper-content">

      <Header/>
      {/* <DemoButtonComp/>
      <DemoTitle/>
      <DemoInput/> */}
      <DemoArticleItems/>

      {/* <Homepage/> */}
      <div className="spacing"></div>
      <Footer/> 
    </div>
  );
}

export default App;
