import React from 'react'
import Header from './Header'
import Body from './Body'

class TaskApp extends React.Component {
  render() {
    return (
      <div className="main__container">
        <Header />
        <Body />
      </div>
      
    )
  }
}
export default TaskApp