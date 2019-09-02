import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: "1",
    textAlign: "center",
  },
  container: {
    margin: "0 auto",
    width: "65%",
  },
  sectionContainer: {
    height: '60vh',
    background: 'url("../assets/images/gearsCogs.jpg") no-repeat center center fixed',
    backgroundSize: 'cover'
  },
  slogan: {
    textAlign: 'center',
    paddingTop: '40vh',
    color: 'red',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  },
})

class SloganSection extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid item xs={12}>
        <div className={classes.sectionContainer}>
          {/* <div className={classes.container}> */}
            <Typography className={classes.slogan} variant='h2'>
              Insert Clever/Eye-Catch Slogan
            </Typography>
          {/* </div> */}
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(SloganSection)
