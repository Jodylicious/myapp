import React from 'react';
import BSIT from '../components/CourseDetails/BSIT';
import BSEDSS from '../components/CourseDetails/BSEDSS';
import BSEDEN from '../components/CourseDetails/BSEDEN';
import BEED from '../components/CourseDetails/BEED';
import BSCpE from '../components/CourseDetails/BSCpE';
import BSIE from '../components/CourseDetails/BSIE';
import BSA from '../components/CourseDetails/BSA';
import BSBA from '../components/CourseDetails/BSBA';
import DICT from '../components/CourseDetails/DICT';
import DCET from '../components/CourseDetails/DCET';
import BSPSY from '../components/CourseDetails/BSPSY';

const Courses = () => {
    return (
        <div >
            {/* COURSES */}
            <div class="row">
                <header><h4 className='pageHeader'>BACHELOR AND DIPLOMA COURSES</h4> </header>
                <p><h4> As of October 2022 - January 2023: </h4></p>
                <div class="col-courses">
                    <div class="card"> <BSIT /></div>
                </div>

                <div class="col-courses">
                    <div class="card"> <BSCpE /></div>
                </div>

                <div class="col-courses">
                    <div class="card"> <DCET /></div>
                </div>

                <div class="col-courses">
                    <div class="card"> <DICT /></div>
                </div>

                <div class="col-courses">
                    <div class="card"> <BSIE /></div>
                </div>

                <div class="col-courses">
                    <div class="card"> <BEED /></div>
                </div>

                <div class="col-courses">
                    <div class="card"> <BSEDSS /></div>
                </div>

                <div class="col-courses">
                    <div class="card"> <BSEDEN /></div>
                </div>

                <div class="col-courses">
                    <div class="card"> <BSA /></div>
                </div>

                <div class="col-courses">
                    <div class="card"> <BSBA /></div>
                </div>

                <div class="col-courses">
                    <div class="card"> <BSPSY /></div>
                </div>

            </div>
        </div>

    );
};

export default Courses;