import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';




interface CarouselProps {



}


const Carousel = (props: CarouselProps) => {
    return(
        <div className="carousel rounded-box">
            <div className="carousel-item">
                
            <Button variant="contained">Hello Carousel</Button>
                
            </div>

        </div>
    )
}


export default Carousel