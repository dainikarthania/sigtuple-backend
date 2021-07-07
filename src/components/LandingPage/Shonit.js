import React, { useEffect, useRef, useState } from 'react';

const Shonit = ({pause}) =>{
    console.log("pause shonit",pause)
    const [show,setShow] = useState(true)
    const ref=useRef()
    
    return (
        <div class="tab-pane fade show active position-relative" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <video muted class="img-fluid tab-video" ref={ref}>
            <source src="assets/video/video.mp4" type="video/mp4"/>
        </video>
        <div class="play-btn play-btn1"
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
            show ? <i class="bi bi-play-fill"></i> : <i class="bi bi-pause-fill"></i>
        } </div>
    </div>
    )
}

export default Shonit;