import { useRef, useEffect, useState } from "react";
import Rive, { useRive, useStateMachineInput, Layout, Fit, Alignment, RiveRef } from "@rive-app/react-canvas";
// import rive from '@rive-app/react-canvas';
import canvas from "../../../../assets/rive/greetinghour.riv";

export default ({currentTime})=> {
    
    const state = {
        "pause": "PauseState",
        "morning": "MorningState",
        "afternoon": "AfternoonState",
        "evening": "EveningState",
    }

    const {rive, RiveComponent } = useRive({
        src: canvas,
        stateMachines: state['pause'],
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.TopCenter,
        })
    });
    
    const refCanvas = useRef();

    useEffect(()=>{
        if(rive) {             
            rive.play(state[currentTime]);

            const observer = new IntersectionObserver((blocks)=>{
                blocks.forEach(block => {
                    if(block.isIntersecting) {
                        rive.play(state[currentTime]);
                    }  else {
                        rive.pause(state[currentTime]);
                    }
                });
            }, {rootMargin: '-10% 0px -85% 0px', threshold: 0,});

            observer.observe(refCanvas.current);
        }

    }, [rive]);
    

    return (<>
                <div className={`greeting__bg`} ref={refCanvas} data-attribute="Image by pikisuperstar on Freepik">
                    <RiveComponent />
                </div> 
        </>);
};