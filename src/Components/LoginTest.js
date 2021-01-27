import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));


function LoginTest() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container maxWidth='xs'>


                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                    <Link to="/dashboard"> Link </Link>
                </Typography>
            </Container>
        </>
    );

}

export default LoginTest
