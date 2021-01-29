import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Container, Typography, CssBaseline, Button, Paper, TextField, Divider, Grid, Avatar, FormControlLabel, Checkbox, FormControl, TableRow, TableCell, TableContainer, Table, TableHead } from '@material-ui/core'
import React, { useState, useEffect,useRef } from 'react';
import TableBody from '@material-ui/core/TableBody';
import { Link } from 'react-router-dom';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Height } from '@material-ui/icons';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import loadingImg from '../assets/loading.gif';

const paperStyle = {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
    // padding: 20, 
    // height: '60vh', 
    // width: 300, 
    // margin: '40px auto' 
    background: 'white',
    display: 'flex',
    height: '60vh',
    width: '80%',
    background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)',
    borderRadius: '1rem',

}

const gridStyle = {

    minHeight: '100vh',
    background: 'linear-gradient(to right top,#65dfc9, #6cddeb)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
const avatarStyle = { backgroundColor: '#1a151b' }
const btnStyle = { margin: '60px 0px 0px 0px' }

const dashboard = { alignItems: 'center' }
const user = { alignItems: 'center' }
const links = {}
const link = {}
const formStyle = {
    // margin: '17px 300px 0px'

}
const logoStyle = {
    padding: '30px',
    padding: '40px',
    width: '60%',
    margin: '0px 50px'
}
const logo = {
    margin: "0 50px 0 0"
}

const dashboardStyle = {

    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)',
    borderRadius: '2rem',
    textAlign: 'center',

}

const tableStyle = {

    flex: '4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: '4rem',
    background: 'linear-gradient(to left bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2)',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '2px 3px 20px',
    justifyContent: 'space-between'


}
const titleStyle = {
    color: 'blue'
}
const DashScreen = () => {

    const stateData = useRef('');
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

    //  loadData();
    stateData.current.focus();
    }, []);

    const loadData = async () => {

        

       // console.log(result.data);
       // setList(result.data);


    }

                                                                                                                                                         
    const SubmitBUtton = async () =>{

        const header ={ "Content-Type": "application/json" };

        let json = {
            input: stateData.current.value
        }
        console.log(json)

        const result = await axios.post("https://cors-anywhere.herokuapp.com/http://screen-data.herokuapp.com/api/process",{header},{ withCredentials: true });

        setLoading(true);

        result(json).then(res=>{
          console.log(res)
          
          if(res.status===200){
            alert(res.status);
            setList(res.list);
            setLoading(false);

          }
          else{
            alert("Error Occurred")
          }
        })

    }
    
    //   110A101110202000000009009009


    return (
        <>

            <Grid style={gridStyle}>

                <Paper elevation={8} style={paperStyle}>

                    <div style={dashboardStyle}>
                        <AccountCircleIcon fontSize='large' />
                        <FormControl variant="outlined">
                            <TextField id="standard-basic" label="State Data table"  inputRef={stateData} inputProps={{ maxLength: 28 }} />

                        </FormControl>


                        <Button variant="contained" size="small" color="primary" onClick={SubmitBUtton}>Show Data</Button>
                    </div>

                    <div style={tableStyle}>
                        <div style={titleStyle}>
                            <h1> Screen Data</h1>
                        </div>
                        
                        

                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sr.No</TableCell>
                                        <TableCell>Contents</TableCell>
                                        <TableCell>Description</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {loading && <img src={loadingImg} />}
                                    {list.map((item, index) => (
                                        <TableRow key={index} selected="false">
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.contents}</TableCell>
                                            <TableCell>{item.des}</TableCell>
                                        </TableRow>))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>


                </Paper>



            </Grid>


        </>
    )
}

export default DashScreen
