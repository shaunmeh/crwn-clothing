import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button component/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            
        }

    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I Already Have An Account</h2>
                <span>Sign In With Your Email And Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email"
                        handleChange={ this.handleChange } 
                        value={this.state.email}
                        label="email" 
                        required 
                    />
                    

                    <FormInput 
                        name="password" 
                        type="password" 
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required 

                    />
                    
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                            {''} Sign In With Google! {''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;