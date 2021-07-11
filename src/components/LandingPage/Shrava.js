import React, { useEffect, useRef, useState } from 'react';

const Shrava = ({pause}) =>{
    const [show,setShow] = useState(true)
    const ref=useRef()
    
    return (
        <div className="tab-pane fade position-relative" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <video muted className="img-fluid tab-video2" ref={ref}>
            <source src="assets/video/video.mp4" type="video/mp4"/>
        </video>
        <div className="play-btn play-btn2" onClick={(e=>{
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
            show ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>
        } </div>
    </div>
    )
}

export default Shrava;