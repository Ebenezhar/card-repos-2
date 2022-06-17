// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav-bar.js'
import Content from './content.js';
import Footer from './bottom.js';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
