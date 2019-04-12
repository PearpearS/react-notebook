import React, {Component}from 'react'

class Item extends Component {
  constructor(props) {
    super(props)
    this.childDelete = this.childDelete.bind(this)
  }
  render() {
    const {content} = this.props
    return (
      <div onClick={this.childDelete}>{content}......</div>
    )
  }
  childDelete() {
    const {index} =this.props 
    this.props.deleteItem(index)
  }
  componentWillReceiveProps() {
    console.log('我是子组件的receiveProps函数')
  }
}
export default Item;
