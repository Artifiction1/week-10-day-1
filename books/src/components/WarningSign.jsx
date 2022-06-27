import "bootstrap/dist/css/bootstrap.min.css"
import Alert from 'react-bootstrap/Alert';
import {Component} from "react"


class WarningSign extends Component{
render(){
    return (
        <>
          {
            <Alert key='error' variant='danger'>
             {this.props.text}
            </Alert>
          }
        </>
      );
}
}

export default WarningSign