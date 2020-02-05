import React,{ReactDOM} from 'react';

class LikeButton extends React.Component {
    constructor(){
      super();
      this.state = {
                    val: 0,
                    tag: 'Like'
                   }
      this.update = this.update.bind(this)
    } 
    update(){
          this.setState({
            val:  this.state.val === 0 ? 1 : this.state.val -1 ,
            tag: this.state.val === 0 ? 'Unlike' : 'Like'  
          })
      }
     render(){
       return  <div>
                <button onClick={this.update}>{this.state.tag}</button>
                <p> Likes: {this.state.val}</p>
               </div>
   }
  }
  

export default LikeButton;