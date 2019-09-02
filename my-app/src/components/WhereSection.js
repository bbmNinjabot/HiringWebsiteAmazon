import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  bkgColor: {
    backgroundColor: '#ffffff'
  },
  container: {
    paddingTop: '4vh',
    margin: "0 auto",
    width: "65%",
    marginBottom: '2vh'
  },
  titleType: {
    color: 'red'
  },
  title: {
    color: 'black'
  },
  description: {
    color: 'black'
  },
  articlePhoto: {
    maxWidth: '100%'
  },
})

class WhereSection extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid item xs={12} className={classes.bkgColor}>
        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography className={classes.titleType} variant='h5'>
                Where
              </Typography>
              <Typography className={classes.title} variant='h3'>
                Longmont, Colorado
              </Typography>
              <Typography className={classes.description} variant='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img src="../assets/images/longmontView.jpg" alt="Amazon Van" className={classes.articlePhoto} />
            </Grid>
          </Grid>
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(WhereSection)
