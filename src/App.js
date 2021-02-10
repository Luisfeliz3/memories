import React , {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import {getPosts} from './actions/posts';
import Posts from "./component/Posts/Posts.js";
import Form from "./component/Form/Form.js";
import useStyles from "./styles";
import {useDispatch} from 'react-redux';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

     useEffect(() => {
     dispatch(getPosts());
    }, [currentId,dispatch])

    
  return (
    <Container maxwidth="lg">
      <AppBar className ={classes.AppBar} position="static" color="inherit">
        <Typography className ={classes.heading}  variant="h2" align="center">
          memories
          <img className ={classes.image}  src={memories} alt="memories" height="60" />
        </Typography>
        
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className = {classes.mainContainer}
            container justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId = {currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
