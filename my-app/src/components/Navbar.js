import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "0 auto"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none",
  },
  logo: {
    maxWidth: 160,
  },
  rightJustify: {
    marginLeft: "auto",
  },
  appbarColor: {
    background: '#595959',
  },
  navContainer: {
    margin: "0 auto",
    width: "90%",
  },
  paper: {
    position: 'absolute',
    // Centers the Modal
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // left: 0,
    // right: 0,
    // Attempt #2 - which works correctly (top, left, transform)
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    width: 400,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3)
  },
  linkButtons: {
    fontSize: '16px'
  }
})

const homeLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/" {...props} />
))
const infoLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/info" {...props} />
))
const applyLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/apply" {...props} />
))

class Navbar extends Component {
  state = {
    open: false
  }

  handleOpen() {
    this.setState({
      open: true
    })
  }

  handleClose() {
    this.setState({
      open: false
    })
  }  
  
  render() {
    const { classes } = this.props
    // const img = <img style={{marginTop: 10}}src={process.env.PUBLIC_URL + '/assets/images/potentialLogo1_v1.png'} />
  
    return (
      <div>
        <AppBar position="static" className={classes.appbarColor}>
          <div className={classes.navContainer}>
            <Toolbar>
              {/* <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton> */}
              <img src="../assets/images/potentialLogo1_v1.png" alt="Ninja Logistics" className={classes.logo} />
              <Typography variant="h3" className={classes.title} component={homeLink}>
                Ninja Logistics
              </Typography>
              <div className={classes.rightJustify}>
                <Button className={classes.linkButtons} color="inherit" id="info-button" component={infoLink}>FAQ</Button>
                <Button className={classes.linkButtons} color="inherit" id="apply-button" component={applyLink}>Apply Now</Button>
                <Button className={classes.linkButtons} color="inherit" id="call-button" onClick={this.handleOpen.bind(this)}>Schedule a Callback</Button>
              </div>
            </Toolbar>
          </div>
        </AppBar>
        <Modal
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
        >
          <Paper className={classes.paper}>
            <Typography variant="h6">
              Modal Test
            </Typography>
          </Paper>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
