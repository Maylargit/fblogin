import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background: ${props => props.primary ? "#1877f2" : "#66cc00"};
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
    box-shadow: none;
    font-size: 1em;
    border: none;
    width: ${props => props.primary ? "100%" : "85%"};
    display: block;
    white-space: none;
`
export default Button;