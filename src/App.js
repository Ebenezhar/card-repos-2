// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav-bar.js'
import Content from './content.js';


function App() {
  let nav_inputs ={
    name:"company Name",
    list: [
      {
        name:"Features",
        isEnable: true,
      },
      {
        name:"Enterprise",
        isEnable: true,
      },
      {
        name:"Support",
        isEnable: true,
      },
      {
        name:"Pricing",
        isEnable: true,
      }
    ],
    btn:"Sign up"
  }
  let content_inputs = 
    {
      price: "Pricing",
      content: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.",
      boxes:[
        {
          head:"Free",
          charge: 0,
          addit:[
            {
              fae: "10 users included",
            },
            {
              fae: "2 GB of storage",
            },
            {
              fae: "Email support",
            },
            {
              fae: "Help center access",
            }
          ],
          btn: "Sign up for free",
        },
        {
          head:"Pro",
          charge: 15,
          addit:[
            {
              fae: "20 users included",
            },
            {
              fae: "10 GB of storage",
            },
            {
              fae: "Priority email support",
            },
            {
              fae: "Help center access",
            }
          ],
          btn: "Get started",
        },
        {
          head:"Enterprise",
          charge: 29,
          addit:[
            {
              fae: "30 users included",
            },
            {
              fae: "15 GB of storage",
            },
            {
              fae: "Phone and email support",
            },
            {
              fae: "Help center access",
            }
          ],
          btn: "Contact us",
        }
      ]
     
    }
  
  return (
    <div>      
      <Nav data = {nav_inputs}></Nav>
      <Content data = {content_inputs}></Content>    
    </div>    
  );
}
export default App;
