import React, { Component } from 'react'
import ListItem from './ListItem'

class Body extends Component {
  constructor() {
    super()
    this.state = {
      listItems: [],
      deletedItems: []
    }
  }

  componentDidUpdate() {
    // console.log(this.state.deletedItems)
  }

  addTitle = event => {
    const titleText = this.inputTitle.value.trim()
    const descriptionText = this.inputDescription.value.trim()
    // const statusText = this.inputStatus.value.trim()

    if (titleText || descriptionText) {
      this.inputTitle.value = ''
      this.inputDescription.value = ''
    }
    this.inputTitle.focus()

    const newItem = {
      title: titleText,
      description: descriptionText,
      status: false
    }

    const newItems = this.state.listItems
    newItems.push(newItem)
    this.setState({ listItems: newItems })
    event.preventDefault()
  }

  removeItem = event => {
    var items = this.state.listItems

    var index = event.target.parentNode.parentNode.parentNode.getAttribute('data-id')

    if (index === null) {
    } else {
      const removed = items.splice(index, 1)

      var deletedItems = [...this.state.deletedItems]
      deletedItems.push(...removed)

      this.setState({
        listItems: items,
        deletedItems: deletedItems
      })
    }
  }

  render() {
    const itemList = this.state.listItems
    {
      // if (itemList.length <= 0) {
      //   return (
      //     <div>
      //       {' '}
      //       You have nothing todo. How sad. <span>😢</span>{' '}
      //     </div>
      //   )
      // } else {
      return (
        <section className="container">
          <div className="container__inner">
            <div className="container__input">
              <form onSubmit={this.addTitle}>
                <input type="text" ref={input => (this.inputTitle = input)} />
                <input type="text" ref={input => (this.inputDescription = input)} />
                <button type="submit">add</button>
              </form>
            </div>

            <ul className="todo__items">
              {itemList.map((item, index) => {
                if (item.title === null) {
                  return <div> nothing </div>
                } else {
                  return (
                    <ListItem
                      key={index}
                      data_id={index}
                      title={item.title}
                      description={item.description}
                      status={`${item.status}`}
                      tags={item.tags}
                      clickHandler={this.removeItem}
                    />
                  )
                }
              })}
            </ul>
          </div>
        </section>
      )
    }
  }
}
// }

export default Body
