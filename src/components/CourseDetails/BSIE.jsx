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
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

// this is the data of every course//
const bsie = [
    { name: "BSIE 1", value: 59 },
    { name: "BSIE 2", value: 31 },
    { name: "BSIE 3", value: 45 },
    { name: "BSIE 4", value: 43 },
]

const color = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

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
                    Bachelor of Science in Industrial Engineering
                </div>
                {/* This is the CardComponent of Courses */}
                <CardMedia
                    component="img"
                    image="https://d2n4wb9orp1vta.cloudfront.net/cms/brand/pm/2022-pm/0121-pm-ayb-gettyimages-1263390703.jpg"
                    alt="BSIE"
                    height="150" />

                {/* This is the course definition */}
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        It provides the students with knowledge and skills needed for designing, installing, managing, and maintaining production/manufacturing systems.
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
                            <p>Organization:</p>
                            <p><h5>Philippine Institute of Industrial Engineers (PIIE)</h5></p>
                            <p>Course Adviser:</p>
                            <p><h5>Engr. Christopher Mira</h5></p>
                            <p>Current Course Population</p>

                            {/* This is the pie-chart of course populations */}
                            <PieChart width={450} height={350}>
                                <Legend layout="vertical" verticalAlign="bottom" align="middle" />
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={true}
                                    data={bsie}
                                    cx="45%"
                                    cy="35%"
                                    outerRadius={80}
                                    fill="#a1051d"
                                    label
                                >
                                    {bsie.map((entry, index) => <Cell fill={color[index % color.length]} />)}
                                </Pie>

                                <Tooltip />
                            </PieChart>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}
