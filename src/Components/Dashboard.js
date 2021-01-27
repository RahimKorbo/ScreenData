import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Container, Typography, CssBaseline, Button, Paper, TextField, Divider, Grid, Avatar, FormControlLabel, Checkbox } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        flexWrap: 'wrap',

        '& > *': {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
            width: '400px',
            height: '500px',
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& .MuiIcon-fontSizeLarge': {
            fontSize: '4.1875rem'
        }

    },

    form: {
        display: 'inline-block',
        textAlign: 'center',
        marginTop: '50px'
    },
    button: {
        margin: theme.spacing(3),
    }
}));
const paperStyle = { background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', padding: 20, height: '60vh', width: 300, margin: '40px auto' }
const avatarStyle = { backgroundColor: '#1a151b' }
const btnStyle = { margin: '15px 0'}

function Dashboard() {
    const classes = useStyles();

    return (
        <>
            {/* <CssBaseline />
            <Container maxWidth='xs'>


                <Typography component="div" style={{ height: '100vh' }}>


                    <div className={classes.root}>
                        <Paper elevation={12}>


                            <form noValidate className={classes.form} autoComplete="off">

                                <Divider variant="middle" />
                                 <AccountCircleIcon fontSize='large' />
                                    <TextField id="outlined-basic" label="Login Id" variant="outlined" />
                                
                                    <AccountCircleIcon fontSize='large' />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                    />
                             
                                <div className={classes.button}>
                                    <Button variant="contained" color="primary">Submit</Button>


                                </div>
                                <div>
                                    <Link href="#">Sign Up</Link>
                                </div>


                            </form>

                        </Paper>

                    </div>
                </Typography>


            </Container> */}
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>

                        <Avatar style={avatarStyle}><LockOpenIcon /></Avatar>
                        <h2>Sign in</h2>
                    </Grid>
                    <TextField style={btnStyle}  id="outlined-basic" label="Login Id" variant="outlined" fullWidth required />
                    <TextField
                    style={btnStyle} 
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember Me"
                    />

                    <Button variant="contained" color="primary" style={btnStyle} fullWidth><Link to="/dash"> Submit </Link></Button>

                    <Typography> Do You Have An Account ? 
                        <Link href="#">
                            Sign Up
                        </Link>
                    </Typography>

                </Paper>
            </Grid>

        </>
    )
}

export default Dashboard
