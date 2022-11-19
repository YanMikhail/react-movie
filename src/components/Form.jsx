import React, {useState} from 'react';
import {Button, Container, TextField} from "@mui/material";
import propTypes from "prop-types";




const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <Container component="main" maxWidth="xs">
            <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </Button>
        </Container>
    );
};
Form.propTypes = {
    title: propTypes.string,
    handleClick: propTypes.func
}
export default Form;