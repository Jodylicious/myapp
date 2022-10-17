import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CourseCard() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="cardsss">
            <Card style={{ maxWidth: '100' }}>
                {/* This is the CardComponent Header (title: {Course Program}) */}
                <div className="cardHeader">
                    Bachelor of Science in Psychology
                </div>
                {/* This is the CardComponent of Courses */}
                <CardMedia
                    component="img"
                    image="https://www.mooc.org/hubfs/psych-fields-jpg.jpeg"
                    alt="BSPSY"
                    height="150" />
                {/* This is the course definition */}
          
                  {/* This is the course definition */}
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                   It is designed to prepare students towards a scientific understanding of human behavior. Students will have the experiences in psychological evaluation, research work and community involvement. It also prepares the student for graduate work.
                    </Typography>

                </CardContent>
                {/* This is other information section (collapsed) */}
                <CardActions disableSpacing >
                    <h5 className='moreInfo'>Other Information</h5>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography className="courseInfo">
                            <div className='maintenance'>
                            <h4>Sorry this course page is under construction. We apologize for the inconvenience.</h4>
                            </div>
                        </Typography>
                    </CardContent>
                </Collapse>

            </Card>
        </div>
    );
}
