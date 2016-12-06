import React,{Component} from 'react'

export default class Modal extends Component{
    constructor(...args){
        super(...args);
    }
    render(){
        let {title,content,showCancel,cancelText,cancelColor,confirmText,confirmColor,hidden,bindcancel,bindconfirm}=this.props;
        cancelText=cancelText.substr(0,4);
        confirmText=confirmText.substr(0,4);
        return(
            
            <div style={{display:hidden?"none":""}}>
                <div className="weui-mask" onClick={(e)=>bindcancel?bindcancel(e):""}></div>
                <div className="weui-dialog">
                    <div className="weui-dialog__hd">
                        <strong className="weui-dialog__title">{this.props.title}</strong>
                    </div>
                    <div className="weui-dialog__bd">{this.props.children}</div>
                    <div className="weui-dialog__ft">
                        {showCancel &&<a href="javascript:void(0)" onClick={(e)=>bindcancel?bindcancel(e):null} className="weui-dialog__btn weui-dialog__btn_default">{cancelText}</a>}
                        <a href="javascript:void(0)" onClick={(e)=>bindconfirm?bindconfirm(e):null} className="weui-dialog__btn weui-dialog__btn_primary">{confirmText}</a>
                    </div>
                </div>
            </div>
            )
    }
}