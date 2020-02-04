import React,{Component} from 'react'

import { connect } from 'react-redux';

class InitializeComponent extends Component { 
  
    constructor(props) {
        super(props);
        console.log(props);
      }
      componentDidMount(){
        console.log(this.props.ping);
      }
    render(){
        return <div>test {this.props.test}</div>
    }
}

const mapStateToProps = state => {
    console.log('state')
    const { config, data, context ,ping,test} = state;
    return {
      data,
      config,
      context,
      ping,
      test
    };
};

export default connect(mapStateToProps)(InitializeComponent);