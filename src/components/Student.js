import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Student() {
    return (
        <Grid container>
            <Grid items xs={4} sm={4} md={4} lg={4} xl={4}>

            </Grid>
            <Grid items xs={4} sm={4} md={4} lg={4} xl={4}>
            <div>
            <Typography>Student App</Typography>
          <TextField 
          type="text"
          variant="outlined"
          label="Name"
          fullWidth
          required
          margin="normal"
          />  
          <TextField 
          type="text"
          variant="outlined"
          label="Admn no"
          fullWidth
          required
          margin="normal"
          />  
          <TextField 
          type="text"
          variant="outlined"
          label="Roll no"
          fullWidth
          required
          margin="normal"
          />  
          <TextField 
          type="text"
          variant="outlined"
          label="College"
          fullWidth
          required
          margin="normal"
          />  
          <TextField 
          type="Date"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          />  
          <TextField 
          type="number"
          variant="outlined"
          label="Mobile no"
          fullWidth
          required
          margin="normal"
          />  
          <TextField 
          type="mail"
          variant="outlined"
          label="Email"
          fullWidth
          required
          margin="normal"
          />  
          <TextField 
          type="password"
          variant="outlined"
          label="Password"
          fullWidth
          required
          margin="normal"
          />  
          <TextField 
          type="password"
          variant="outlined"
          label="Confirm Password"
          fullWidth
          required
          margin="normal"
          />  
          <TextField 
          type="text"
          variant="outlined"
          label="Name"
          fullWidth
          required
          margin="normal"
          /> 
        
          <Button variant="contained" color="secondary"
            fullWidth
            required
            margin="normal"
            type="submit">Submit</Button>
            
        </div>

            </Grid>
            <Grid items xs={4} sm={4} md={4} lg={4} xl={4}>

            </Grid>
        </Grid>
    )
}
