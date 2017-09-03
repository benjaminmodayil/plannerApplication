import React, { Component } from 'react'

class ListItem extends Component {
  inputCheckRef = event => {}

  inputCheck = event => {
    const status = this.inputStatus.checked
    console.log(status)
  }

  render() {
    const { title } = this.props
    const { description } = this.props
    const { status } = this.props
    const { data_id } = this.props

    return (
      <li className="list__item" data-id={data_id}>
        <article>
          <div className="list__item__info">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{status}</p>
            <small>{data_id}</small>
          </div>
          <div className="list__item__meta">
            <input
              id="checkBox"
              type="checkbox"
              value="done"
              onClick={this.inputCheck}
              ref={input => (this.inputStatus = input)}
            />
            <button onClick={this.props.clickHandler}>x</button>
          </div>
        </article>
      </li>
    )
  }
}

export default ListItem
