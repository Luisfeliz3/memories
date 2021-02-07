import React, {useState} from 'react';
import useStyles from "./styles.js";
import {TextField,Button, Typography,Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
const Form = () =>{
const classes = useStyles();


const handleSubmit =() =>{

}

const clear =() =>{

}
const [postData, setPostData] = useState({
    creator : '',
    title : '',
    message : '',
    tags : '',
    selectedFile : '',

})

    return(
<Paper className = {classes.paper}>
        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'>Creating a Memory</Typography>
            <TextField  name="creator"  variant='outlined'  label='Creator'  fullWidth value ={postData.creator} onChange ={(e) => setPostData({ ...postData, creator : e.target.value})} ></TextField>
            <TextField  name="title"  variant='outlined'  label='Title'  fullWidth value ={postData.title} onChange ={(e) => setPostData({ ...postData, title : e.target.value})} ></TextField>
            <TextField  name="message"  variant='outlined'  label='Message'  fullWidth value ={postData.messages} onChange ={(e) => setPostData({ ...postData, messages : e.target.value})} ></TextField>
            <TextField  name="tags"  variant='outlined'  label='Tags'  fullWidth value ={postData.tags} onChange ={(e) => setPostData({ ...postData, tags : e.target.value})} ></TextField>
            <div className={classes.fileInput}><FileBase  type= 'file'multiple = {false}onDone ={({base64})=> setPostData({...postData, selectedFile : base64})}/></div>
            <Button className={classes.buttonSubmit} variant = 'contained' color='primary' size='large' type ='submit' fullwidth >Submit</Button>
            <Button variant = 'contained'color='secondary' size='small' onClick ={clear} fullwidth >Clear</Button>
         </form>
</Paper >

    );
}

export default Form;