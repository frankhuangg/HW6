import { Component } from "react";

class ToDoInput extends Component{
    constructor(){
        super()
        this.state={
            todo: '',
        }
    }
    handleInputChange(e){
        this.setState({
            todo: e.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit(this.state)
        }
        this.setState({todo: ''})
    }
    render(){
        return(
            <div className='todoinputcontainter'>
                <input className='todoinput'
                value={this.state.todo}
                onChange={this.handleInputChange.bind(this)}
                ref={input=>this.input=input}>
                </input>
                <p className='input_btn'
                onClick={this.handleSubmit.bind(this)}>add
                </p>
            </div>
        )
    }
}
export default ToDoInput;