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
const bsedss = [
    { name: "BSEDSS 1", value: 49 },
    { name: "BSEDSS 2", value: 42 },
    { name: "BSEDSS 3", value: 50 },
    { name: "BSEDSS 4", value: 31 },
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
                    Bachelor of Secondary Education Major in Social Studies
                </div>

                {/* This is the CardComponent of Courses */}
                <CardMedia
                    component="img"
                    image="https://julieharrison6.weebly.com/uploads/8/5/2/1/85211642/social-studies_2.jpg"
                    alt="BSEDSS"
                    height="150" />

                {/* This is the course definition */}
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        It provides the student with the knowledge and skills in teaching secondary students about the complex, culturally rich world of the 21st century.
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
                            <p><h5>Young Educators Society (YES)</h5></p>
                            <p>Course Adviser:</p>
                            <p><h5>Ma’am Cheryl Joyce D. Jurado, LPT, MEM</h5></p>
                            <p>Current Course Population</p>

                            {/* This is the pie-chart of course populations */}
                            <PieChart width={450} height={350}>
                                <Legend layout="vertical" verticalAlign="bottom" align="middle" />
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={true}
                                    data={bsedss}
                                    cx="45%"
                                    cy="35%"
                                    outerRadius={80}
                                    fill="#a1051d"
                                    label
                                >
                                    {bsedss.map((entry, index) => <Cell fill={color[index % color.length]} />)}
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
