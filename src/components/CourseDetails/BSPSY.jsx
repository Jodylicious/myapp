import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function CourseCard() {
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
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                   It is designed to prepare students towards a scientific understanding of human behavior. Students will have the experiences in psychological evaluation, research work and community involvement. It also prepares the student for graduate work.
                    </Typography>

                </CardContent>
               
            </Card>
        </div>
    );
}
