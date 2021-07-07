import React, { useState } from 'react';
import Slider from "react-slick";
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';

const BlogContents= [
    {
        id:1,
        title:"Top 10 companies",
        description:"here is some of top 10 company like,google,fb,amazon..",
        duration:"2 min",
        date:"Jan 2.02021"
    },
    {
        id:2,
        title:`Winner of India’s biggest AI solution`,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"2 min",
        date:"Jan 2.02021"
    },
    {
        id:3,
        title:"SigTuple CEO says",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"1 min",
        date:"Jan 2.02021"
    },
    {
        id:4,
        title:"top 20 medicine",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"2 min",
        date:"Jan 2.02021"
    },
    {
        id:5,
        title:"what to do in covid 19",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"1 min",
        date:"Jan 2.02021"
    }
]

const Blogs = () =>{
    const [showBlog,setBlogShow]= useState(null)

    let blog_next = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color:"black",
        width:"66px",
        height:"66px",
        position: "absolute",

        opacity: "0.5",
        border: "3px solid rgb(112, 112, 112)",
        boxSizing: "border-box",
        borderRadius: "41px",
        left: "1070px"
    }

    let blog_prev = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color:"black",
        width:"66px",
        height:"66px",
        position: "absolute",

        opacity: "0.5",
        border: "3px solid rgb(112, 112, 112)",
        boxSizing: "border-box",
        borderRadius: "41px",

        left:"-60px"
    }

    const settings_blog = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow blogNext={blog_next}/>,
        prevArrow: <PrevArrow blogPrev={blog_prev}/>

    };

    const renderItems=BlogContents.map(b=>{
        if(b.id==showBlog){
            return(
                <div class="p-3" key={b.id}>
                <div class="lab-card position-relative">
                    <img src="assets/img/lab-1.png" class="img-fluid"/>
                    <div class="lab-text">
                        <span>{b.duration} read</span>
                        <h3 class="text-sub mb-1" onMouseOver={(e=>{
                            setBlogShow(b.id)
                        })}>{b.title}</h3>
                         <div className='description-blog-show'>
                        <span class="text-70 fw-normal d-block">
                            {b.description}
                        </span>
                        <span class="text-70 fw-light d-block mt-2 mb-3">
                            {b.date}
                        </span>
                        <a href="" class="text-decoration-none text-danger fw-bold text-fwb">Read More
                            <i class="bi bi-arrow-right-short"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            )   
        }
        else{
            return(
                <div class="p-3" key={b.id}>
                <div class="lab-card position-relative">
                    <img src="assets/img/lab-1.png" class="img-fluid"/>
                    <div class="lab-text">
                        <span>{b.duration} read</span>
                        <h3 class="text-sub mb-1" onMouseOver={(e=>{
                            setBlogShow(b.id)
                        })}>{b.title}</h3>
                         <div className='description-blog-hide'>
                        <span class="text-70 fw-normal d-block">
                            {b.description}
                        </span>
                        <span class="text-70 fw-light d-block mt-2 mb-3">
                            {b.date}
                        </span>
                        <a href="" class="text-decoration-none text-danger fw-bold text-fwb">Read More
                            <i class="bi bi-arrow-right-short"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            )
        }
        
    })



    return (
        <div>
 <Slider {...settings_blog}>
     {renderItems}
 </Slider>
        </div>
    )
}

export default Blogs;