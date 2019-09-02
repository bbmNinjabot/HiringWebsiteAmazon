import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import SloganSection from '../components/SloganSection'
import WhatSection from '../components/WhatSection'
import WhoSection from '../components/WhoSection'
import WhereSection from '../components/WhereSection'

const styles = theme => ({
  root: {
    flexGrow: "1",
  },
  paper: {
    textAlign: 'center',
  },
})

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <SloganSection />
          <WhoSection />
          <WhatSection />
          <WhereSection />
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
