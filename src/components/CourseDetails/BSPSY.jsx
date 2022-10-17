import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


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
          
               
            </Card>
        </div>
    );
}
