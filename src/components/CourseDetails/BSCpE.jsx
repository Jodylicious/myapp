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
const bscpe = [
    { name: "BSCpE 1", value: 47 },
    { name: "BSCpE 2", value: 28 },
    { name: "BSCpE 3", value: 52 },
    { name: "BSCpE 4", value: 45 },
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
                Bachelor of Science in Computer Engineering
            </div>

            {/* This is the CardComponent of Courses */}
            <CardMedia
                component="img"
                image="https://mdbf.atlas.edu.tr/uploads/bolumler/bilgisayar-muhendisligi-688471.jpg"
                alt="BSCpE"
                height="150" />

            {/* This is the course definition */}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    It is a program that embodies the science and technology of design, development, implementation, maintenance, and integration of software and hardware.
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
                        <p><h5>Association of Computer Engineering Students (ACES)</h5></p>
                        <p>Course Adviser:</p>
                        <p><h5>Sir Gerino Abelida Jr.</h5></p>
                        <p>Current Course Population</p>

                        {/* This is the pie-chart of course populations */}
                        <PieChart width={450} height={350}>
                                <Legend layout="vertical" verticalAlign="bottom" align="middle" />
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={true}
                                    data={bscpe}
                                    cx="45%"
                                    cy="35%"
                                    outerRadius={80}
                                    fill="#a1051d"
                                    label
                            >
                                {bscpe.map((entry, index) => <Cell fill={color[index % color.length]} />)}
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
