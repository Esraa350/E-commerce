import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import"./Form.css";
class LoginForm extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className='form-container mb-3'>
              <div className='form-content-left'>
                <img className='form-img' src='img/book lover.svg' alt='spaceship' />
              </div>
              <Login  {...this.props} />
            </div>
            
          </>
         );
    }
}
 
export default LoginForm;