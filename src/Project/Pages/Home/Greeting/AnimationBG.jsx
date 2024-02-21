import { useRef, useEffect, useState } from "react";
import Rive, { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import canvas from '../../../../assets/rive/greetingCanvas.riv';

export default ()=> {
    const {rive, RiveComponent} = useRive({
        src: canvas,
        stateMachines: "State1",
        autoplay: true,
    });

    // console.log(rive);
    const {intersect, setIntersect} = useState(false);
    
    const options = {
            rootMargin: '-10% 0px -85% 0px',
            threshold: 0,
        }

    const refCanvas = useRef();

    // console.log(refCanvas.current);

    useEffect(()=>{
        // to be implemented
        const observer = new IntersectionObserver((blocks)=>{
            blocks.forEach(block => {
                if(block.isIntersecting) {
                console.log(block.target);
                // setIntersect(true); 
                }
            })
        }, options);
    
        // refCanvas.forEach(element=>{
          observer.observe(refCanvas.current);
        // })
    }, [])

    return (<>
                <div className="greeting__bg" ref={refCanvas}>
                <RiveComponent /> 
                </div>
        </>);
};