import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    container: {
      width: "50%",
      margin: "0 auto",
      border: "1px solid darkgrey"
    },
    expansion: {
      backgroundImage:
        'url("https://image.shutterstock.com/image-photo/beautiful-abstract-grunge-decorative-navy-260nw-539880832.jpg")',
      color: "white",
    },
    image: {
      width: "50px",
      height: "50px"
    }
  });

export const Accordion = (props) => {
    const { classes, data } = props;
    return (
        <div className={classes.container}>
            <ExpansionPanel className={classes.expansion}>
                <ExpansionPanelSummary>
                <Typography className={classes.heading}>{data.name}</Typography>
                    </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <img className={classes.image} src={data.image} alt="album cover"/>
                            <Typography>
                                {data.text}
                            </Typography>
                        </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}


Accordion.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles)(Accordion);
  