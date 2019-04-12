import React, { Component } from 'react';
import Item from './Item'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      text: ''
    }
    this.changeText = this.changeText.bind(this)
    this.addLi = this.addLi.bind(this)
    this.queryLength = this.queryLength.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  addLi() {
  const list = [...this.state.list,this.state.text]
  // list.push(this.state.text)
  // this.setState({
  //   list,
  //   text: ''
  // })
  this.setState((prev)=>({
    list,
    text:''
  }), () =>{
    console.log(this.ul.querySelectorAll("div").length) // 第二个参数，表示回调函数。完成异步执行之后调用，这里显示正常的长度
  })
  // console.log(this.ul.querySelectorAll("div").length) 显示的长度总是少1个，因为异步执行的原因
  }
  changeText(e) {
    const value = this.input.value
    // this.setState ({
    //   text: value
    // })
    this.setState((prev)=>({
      text: value
    }))
  }
  componentWillMount() {
    console.log('即将挂载...')
  }
  componentDidMount() {
    console.log('页面挂载完成')
  }
  shouldComponentUpdate() {
    console.log('before update')
    return true
  }
  componentWillUpdate() {
    console.log('那么通过shouldComponentUpdate允许更新了，所以我自动执行')
  }
  componentDidUpdate() {
    console.log('数据完成更新之后，自动调用')
  }
  render() {
    console.log('render....')
    return (
      <div className="App">
        <label htmlFor="aaa">前缀</label>
        <input 
          id="aaa" 
          type='text' 
          value={this.state.text} 
          onChange={this.changeText}
          ref={(input)=>{
            this.input = input
          }}
          />
        <button onClick={this.addLi}>加入</button>
        <button onClick={this.queryLength}>查询此时数组的个数...p</button>
        <ul ref={(ul)=>{this.ul = ul}}>
          {this.getMyItem()}
        </ul> 
      </div>
    );
  }
  queryLength() {
    console.log(this.state.list)
  }
  deleteItem(index) {
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list
    })
    console.log(index)
  }
  getMyItem() {
     return this.state.list.map((item,index)=>{
        return (
          <Item content = {item} key={item} deleteItem={this.deleteItem} index={index}/>
        )
  })
  }
}

export default App;
