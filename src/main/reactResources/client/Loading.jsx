import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

class Loading extends Component {

  constructor(props){
    super(props)
  }

  render = () =>
    <div style={style.fora}>
      <div className="loading" style={style.centro}></div>
    </div>

}

const style = {
  fora : {
    position : 'relative',
    height : '50px'
  },
  centro : {
    height : '100%',
    display: 'block',
    width : '100%',
    position : 'absolute',
    top :'50%',
    left : '50%'
  }
}

export default Loading
