import React, { useEffect, useRef, useState } from 'react';

const Shrava = ({pause}) =>{
    const [show,setShow] = useState(true)
    const ref=useRef()
    
    return (
        <div class="tab-pane fade position-relative" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <video muted class="img-fluid tab-video2" ref={ref}>
            <source src="assets/video/video.mp4" type="video/mp4"/>
        </video>
        <div class="play-btn play-btn2" onClick={(e=>{
            console.log(ref)
            if(show){
                setShow(false)
                ref.current.play()
            }
            else{
                setShow(true)
                ref.current.pause()
            }
        })}>
        {
            show ? <i class="bi bi-play-fill"></i> : <i class="bi bi-pause-fill"></i>
        } </div>
    </div>
    )
}

export default Shrava;