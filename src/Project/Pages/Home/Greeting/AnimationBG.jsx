import { useRef, useEffect, useState } from "react";
import Rive, { useRive, useStateMachineInput, Layout, Fit, Alignment, RiveRef } from "@rive-app/react-canvas";
import canvas from '../../../../assets/rive/greetingCanvas.riv';
import canvas2 from '../../../../assets/rive/greetingNew.riv';

export default ()=> {
    const stateMorning = "MorningState";
    const stateAfternoon = "AfternoonState";
    const ARTBOARD = "MainArtboard";
    const {rive, RiveComponent} = useRive({
        src: canvas2,
        stateMachines: stateAfternoon,
        artboard: ARTBOARD,
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.TopCenter,
        })
    });

    const [intersect, setIntersect] = useState();
    
    const fireMe = useStateMachineInput(rive, stateMorning,);
    
    const options = {
            rootMargin: '-10% 0px -85% 0px',
            threshold: 0,
        }

        const refCanvas = useRef();
        const refRive = useRef(RiveRef);

    const riveInstance = useRive({
        src: canvas,
        stateMachines: stateMorning,
        autoplay: false,
    });

    useEffect(()=>{
        
        const observer = new IntersectionObserver((blocks)=>{
            blocks.forEach(block => {
                if(block.isIntersecting) {
                    // riveInstance.play();
                    // console.log(riveInstance);
                    // // rive.fire();
                    // console.log(fireMe);
                    // console.log(Rive);
                    setIntersect(true);
                    // useStateMachineInput(rive, STATE_MACHINE_NAME);
                }
            });

        }, options);
          observer.observe(refCanvas.current);

          
    }, [refCanvas]);
    

    return (<>
                <div className={`greeting__bg`} ref={refCanvas}>
                    <RiveComponent />
                </div> 
        </>);
};