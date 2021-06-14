import React from 'react';
import styled from 'styled-components';
import Input from './components/input'
import Button from './components/button'


const Form = styled.form`
    width: 100%;
    max-width: 350px;
    background: white;
    border: 3px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 10px;
`

function Loginform () {
    return ( 
        <div> 
            <Form>
                <Input username="email, number" type="text" placeholder="Email address or Phone number"  />
                <Input password="password" type="password" placeholder="Password"/>
                <Button primary>Log In</Button>
                <div style={{marginLeft: '90px', marginTop: '10px', marginBottom: '20px'}}><a href=" "> Forgotten password?</a> </div>

                <hr />

                <div style={{marginTop: '20px', marginLeft: '60px'}}>
                <Button>Create New Account</Button>
                </div>
            
            </Form>

            <div style={{marginLeft: '30px', marginTop: '20px', marginBottom: '20px'}}><a href=" "> Create a Page </a> for a celebrity, band or business.</div>

        </div>
    );
};

export default Loginform;