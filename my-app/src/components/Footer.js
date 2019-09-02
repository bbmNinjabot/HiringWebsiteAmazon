import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  bkgColor: {
    backgroundColor: '#c4c4c4',
    height: '35vh'
  },
  container: {
    paddingTop: '3vh',
    margin: "0 auto",
    width: "65%",
    textAlign: 'center'
  },
  titleType: {
    color: 'red'
  },
  title: {
    color: 'black'
  },
})

class Footer extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid item xs={12} className={classes.bkgColor}>
        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography className={classes.titleType} variant='h5'>
                Footer Column 1
              </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography className={classes.titleType} variant='h5'>
                Footer Column 2
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(Footer)
