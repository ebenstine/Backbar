import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        display: 'flex',
        margin: '0 1.5em',
        width: 650,
        justifyContent: 'center',
        background: 'linear-gradient(to right,  #b6e6ab 0%,#f6f6f6 100%)',
        marginTop: '5em',
        marginBottom: '6em',
        color: '#1f4400',
        border: '1px solid #2e6103'
    },
    text: {
        margin: '0, auto',
        textIndent: 40,
        width: 500,
        lineHeight: '1.8em',
        fontSize: 14.5,
        padding: '1em 0',
        borderBottom: "1.6px solid #2e6103"
    },
    title: {
        paddingTop: '1em',
        fontSize: 25.5,
        borderBottom: "1.6px solid #2e6103"

    },

    first: {
        color:'#1f4400'
    },
    second: {
        color:"#2e6103"
    },
    third: {
        color:'#b6e6ab'
    }



}));

const AboutPage = () => {
    const { card, text, root, title, first, second, third } = useStyles();

    return (
        <div className='formSpacer' >
            <div className="container">
                <div className={root}>
                    <Card className={card} raised={true} >
                        <CardContent >
                            <Typography 
                              variant="overline" 
                              component="h5" 
                              align="center"  
                              className={title} 
                            >
                            
                              &nbsp;&nbsp;
                              <span className={first}>//</span>
                                <span className={second}>////</span>
                                  <span className={third}>////</span>
                                    backbar
                            
                                      <span className={third}>////</span>
                                        <span className={second}>////</span>
                                          <span className={first}>//</span>
                            </Typography>
                            
                            <Typography 
                            
                              variant="body2" 
                              component="p" 
                              className={text} 
                              paragraph={true}
                            >
                                
                                <p>
                                    
                                        &nbsp;This app could easily be used by anyone, but it is meant as a creativity-fostering 
                                        tool for experienced bartenders and other hospitality professionals.  It allows users to select from a 
                                        deep menu of pre-provided spirits and mixers to create new drinks, while also allowing them to add their own
                                        custom ingredients of any kind with which to experiment.  Sometimes the turnkey to authoring a new drink can 
                                        be as simple as laying out all the options with an end result in mind. 
                                        
                                </p>
                               
                                
                                <p>
                                    

                                        &nbsp;Users can keep track of drinks they're working on and adjust their recipes as needed, as well as submit 
                                        a finished product to their library of cocktails.  Cocktails kept in either location can be shared for review with other users,
                                        providing an opportunity for critical feedback.
                                        
                                </p>
                                
                                
                                
                            </Typography>

                            
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
};

export default AboutPage;
