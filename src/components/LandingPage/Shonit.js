import React, { useEffect, useRef, useState } from 'react';

const Shonit = ({pause}) =>{
    console.log("pause shonit",pause)
    const [show,setShow] = useState(true)
    const ref=useRef()
    
    return (
        <div className="tab-pane fade show active position-relative" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <video muted className="img-fluid tab-video" ref={ref}>
            <source src="assets/video/video.mp4" type="video/mp4"/>
        </video>
        <div className="play-btn play-btn1"
            onClick={
                e => {
                    if(show){
                        setShow(false)
                        ref.current.play()
                    }
                    else{
                        setShow(true)
                        ref.current.pause()
                    }
                }
        }>
            {
            show ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>
        } </div>
    </div>
    )
}

export default Shonit;