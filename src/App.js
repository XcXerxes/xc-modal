import React,{Component} from 'react'
import Modal from './Modal'
import "../public/css/App.css"

export default class App extends Component{
    constructor(...args){
        super(...args);
        this.state={
            hidden:true
        }
    }
    show(e){
        this.setState({
            hidden:false
        })
    }
    cancel(e){
        this.setState({
            hidden:true
        })
    }
    confirm(e){
    this.setState({
        hidden:true
    })
}
    render(){
        return(
            <div>
                <Modal title="标题" confirmText="确定" cancelText="取消" hidden={this.state.hidden} bindcancel={this.cancel.bind(this)} bindconfirm={this.confirm.bind(this)} showCancel="true">
                    这是对话框的内容。
                </Modal>
                
                <div className="app_container">
                    <button className="app_btn" onClick={this.show.bind(this)}>点我打开Modal</button>
                </div>
            </div>
        )
    }
}