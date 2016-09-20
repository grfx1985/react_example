// import  React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component {
// //   render(){
// //     return <div>Hi Hello</div> // jsx
// //     return React.createElement('h1', null, 'Hello again!') // this is what jsx do
// //     }
// //   }

// //const App = () => <h1> hello one more time  </h1> // stateless function componnen
// //
// //
// //
// // render(){
// //     return (
// //       <div>
// //         <h1>Hello World</h1>
// //         <b>Bold</b>
// //       </div>
// //     );
// //   }

// }

// class App extends React.Component {
//   render(){
//     let txt = this.props.txt
//     let cat = this.props.cat
//     return <h1>{txt}, {cat}</h1>
//   }
// }

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
//   // static values
// }

// App.defaultProps ={
//   txt: 'this is the default txt',
//   cat: 'dose miauu'
// }


// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt: 'this is the state txt',
//       cat: 0
//     }
//   }
//   update(e){
//     this.setState({txt: e.target.value})
//   }
//   render(){
//     return (
//       <div>
//       <input type="text"
//         onChange={this.update.bind(this)} />
//       <h1>{this.state.txt}</h1>
//       </div>
//     );
//   }
//


// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { txt: ''}
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({txt: e.target.value})
//   }
//   render(){
//     return (
//       <div>
//         <Widget txt={this.state.txt} update={this.update} />
//         <Widget txt={this.state.txt} update={this.update} />
//         <Widget txt={this.state.txt} update={this.update} />
//         <Widget txt={this.state.txt} update={this.update} />
//       </div>
//     );
//   }
// }

// const Widget = (props) => {
//   return (
//       <div>
//         <input type="text"
//           onChange={props.update} />
//         <h1>{props.txt}</h1>
//       </div>
//     );
// }


// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       red: 0,
//       green: 0,
//       blue: 0
//     }
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({
//       red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//       green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
//       blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
//     })
//   }

//   render(){
//     return (
//       <div>
//         <Slider ref="red" update={this.update} />
//         {this.state.red}
//         <br />
//         <Slider ref="green" update={this.update} />
//         {this.state.green}
//         <br />
//         <Slider ref="blue" update={this.update} />
//         {this.state.blue}
//         <br />
//       </div>
//     );
//   }
// }
// class Slider extends React.Component {
//   render(){
//     return (
//         <div>
//         <input ref="inp" type="range"
//           min="0"
//           max="255"
//           onChange={this.props.update} />
//         </div>
//     );
//   }
// }
//
//


// class App extends React.Component {
//   render(){
//     return <Button>I <Heart/> React</Button>
//   }
// }

// class Button extends React.Component {
//   render(){
//     return <button>{this.props.children}</button>
//   }
// }

// const Heart = () => <span className="glyphicon glyphicon-heart"></span>

// export default App


// https://jsbin.com/fonore/edit?js,console,output
// problematic in JsBin

// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { val: 0 };
//     this.update = this.update.bind(this);
//   }
//   update(){
//     this.setState({val: this.state.val + 1 })
//   }
//   componentWillMount(){
//     console.log('mounting')
//   }
//   render(){
//     console.log('rendering!')
//     return <button onClick={this.update}>{this.state.val}</button>
//   }
//   componentDidMount(){
//     console.log('mounted')
//   }
//   componentWillUnmount(){
//     console.log('bye!')
//   }
// }

// class Wrapper extends React.Component {
//   constructor(){
//     super();
//   }
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//         <div>
//           <button onClick={this.mount.bind(this)}>Mount</button>
//           <button onClick={this.unmount.bind(this)}>Unmount</button>
//           <div id="a"></div>
//         </div>
//     )
//   }
// }


// export default Wrapper



// https://jsbin.com/geveqe/edit?js,output
// Problematic in JSBin

// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { val: 0 };
//     this.update = this.update.bind(this);
//   }
//   update(){
//     this.setState({val: this.state.val + 1 })
//   }
//   componentWillMount(){
//     this.setState({m: 2})
//   }
//   render(){
//     console.log('rendering!')
//     return (
//       <button onClick={this.update}>
//         {this.state.val * this.state.m}
//       </button>)
//   }
//   componentDidMount(){
//     this.inc = setInterval(this.update,500)
//   }
//   componentWillUnmount(){
//     clearInterval(this.inc)
//   }
// }

// class Wrapper extends React.Component {
//   constructor(){
//     super();
//   }
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//         <div>
//           <button onClick={this.mount.bind(this)}>Mount</button>
//           <button onClick={this.unmount.bind(this)}>Unmount</button>
//           <div id="a"></div>
//         </div>
//     )
//   }
// }


// export default Wrapper




// // https://jsbin.com/deliwe/edit?js,console,output

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//   constructor(){
//     super();
//     this.update = this.update.bind(this);
//     this.state = {increasing: false}
//   }
//   update(){
//     ReactDOM.render(
//       <App val={this.props.val+1} />,
//       document.getElementById('app')
//     );
//   }
//   componentWillReceiveProps(nextProps){
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.val % 5 === 0;
//   }
//   render(){
//     console.log(this.state.increasing)
//     return (
//       <button onClick={this.update}>
//         {this.props.val}
//       </button>)
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('prevProps', prevProps)
//   }
// }

// App.defaultProps = { val: 0 }

// export default App
//
//
//
//

// https://jsbin.com/boxoso/edit?js,output

// import React from 'react';

// let Mixin = InnerComponent => class extends React.Component {
//   constructor(){
//     super();
//     this.update = this.update.bind(this);
//     this.state = {val: 0}
//   }
//   update(){
//     this.setState({val: this.state.val + 1})
//   }
//   componentWillMount(){
//     console.log('will mount')
//   }
//   render(){
//     return <InnerComponent
//       update={this.update}
//       {...this.state}
//       {...this.props} />
//   }
//   componentDidMount(){
//     console.log('mounted')
//   }
// }

// const Button = (props) => <button
//                             onClick={props.update}>
//                             {props.txt} - {props.val}
//                           </button>

// const Label = (props) => <label
//                             onMouseMove={props.update}>
//                             {props.txt} - {props.val}
//                           </label>

// let ButtonMixed = Mixin(Button)
// let LabelMixed = Mixin(Label)

// class App extends React.Component {

//   render(){
//     return (
//       <div>
//         <ButtonMixed txt="Button" />
//         <LabelMixed txt="Label" />
//       </div>
//     );
//   }

// }

// export default App
//
// // https://jsbin.com/yiboxe/edit?js,output

// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       red: 0
//     }
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({
//       red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
//     })
//   }
//   render(){
//     return (
//       <div>
//         <NumInput
//           ref="red"
//           min={0}
//           max={255}
//           step={0.01}
//           val={+this.state.red}
//           label="Red"
//           update={this.update} />
//       </div>
//     );
//   }
// }

// class NumInput extends React.Component {
//   render(){
//     let label = this.props.label !== '' ?
//       <label>{this.props.label} -  {this.props.val}</label> : ''
//     return (
//         <div>
//         <input ref="inp"
//           type={this.props.type}
//           min={this.props.min}
//           max={this.props.max}
//           step={this.props.step}
//           defaultValue={this.props.val}
//           onChange={this.props.update} />
//           {label}
//         </div>
//     );
//   }
// }

// NumInput.propTypes = {
//   min: React.PropTypes.number,
//   max: React.PropTypes.number,
//   step: React.PropTypes.number,
//   val: React.PropTypes.number,
//   label: React.PropTypes.string,
//   update: React.PropTypes.func.isRequired,
//   type: React.PropTypes.oneOf(['number', 'range'])
// }

// NumInput.defaultProps = {
//   min: 0,
//   max: 0,
//   step: 1,
//   val: 0,
//   label: '',
//   type: 'range'
// }


// export default App
//
//


// https://jsbin.com/qubonu/1/edit?js,output
// import React from 'react';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {data: [
//       {id: 1, name: "Simon Bailey"},{id: 2, name: "Thomas Burleson"},
//       {id: 3, name: "Will Button"},{id: 4, name: "Ben Clinkinbeard"},
//       {id: 5, name: "Kent Dodds"},{id: 6, name: "Trevor Ewen"},
//       {id: 7, name: "Aaron Frost"},{id: 8, name: "Joel Hooks"},
//       {id: 9, name: "Jafar Husain"},{id: 10, name: "Tim Kindberg"},
//       {id: 11, name: "John Lindquist"},
//       {id: 12, name: "Joe Maddalone"},
//       {id: 13, name: "Tyler McGinnis"},{id: 14, name: "Scott Moss"},
//       {id: 15, name: "Robert Penner"},{id: 16, name: "Keith Peters"},
//       {id: 17, name: "Lukas Ruebbelke"},
//       {id: 18, name: "Brett Shollenberger"}
//     ]}
//   }
//   render(){
//     let rows = this.state.data.map( person => {
//       return <PersonRow key={person.id} data={person} />
//     })
//     return <table>
//       <tbody>{rows}</tbody>
//     </table>
//   }
// }

// const PersonRow = (props) => {
//   return <tr>
//     <td>{props.data.id}</td>
//     <td>{props.data.name}</td>
//   </tr>
// }

// export default App
//
//


// https://jsbin.com/qonaga/edit?js,output

import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
    this.update = this.update.bind(this);
  }
  update(e){
    let code = e.target.value;
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all',
          comments: true
        }).code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }

  }
  render(){
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update}
            defaultValue={this.state.input}>
            </textarea>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default App
