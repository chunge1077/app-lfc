import React from 'react';
import './app.css'
@dev
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        123
      </div>
    )
  }
}
function dev(target){
  console.log(target)
}
export default App