import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import page1 from '../assets/images/AppScreen/page1.png';
import page2 from '../assets/images/AppScreen/page2.png';
import page3 from '../assets/images/AppScreen/page3.png';
import page4 from '../assets/images/AppScreen/page4.png';
import page5 from '../assets/images/AppScreen/page5.png';
import page6 from '../assets/images/AppScreen/page6.png';

const Gallery = () => {
    return (
        <div className='gallery'>

            {/* APP SCREENSHOTS */}
            <CCarousel controls indicators dark>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={(page1)} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={(page2)} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={(page3)} alt="slide 3" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={(page4)} alt="slide 4" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={(page5)} alt="slide 5" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={(page6)} alt="slide 6" />
                </CCarouselItem>
            </CCarousel>
        </div>
    );
}

export default Gallery;