// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[
        {
          "id":1,
          "name":"Foo",
          "age":20
        },
        {
          "id":2,
          "name":"Bar",
          "age":30
        },
        {
          "id":3,
          "name":"qwe",
          "age":40
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <Header/> 
        <table>
          <tbody>
            {this.state.data.map((person,i) =><TableRow key={i} data={person}/>)}
          </tbody>
        </table>

      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return(
      <div>
        <h1>Header</h1>
      </div>
    )
  }

}

class Content extends React.Component {

  render(){
    return(
      <div>
        <h1>Content</h1>
        <p>This is para</p>
      </div>
    )
  }
}

class TableRow extends React.Component {
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>

      </tr>
    )
  }
}

export default App;