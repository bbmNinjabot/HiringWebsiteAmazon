import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: "1",
    textAlign: "center"
  },
  container: {
    margin: "0 auto",
    width: "65%",
  },
  paper: {
    textAlign: 'center',
  },
})
class Info extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs = {12}>
              {/* Paper is the white 'container' I have everything group within */}
              <Paper>
                <Typography>
                  Info
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Info)
