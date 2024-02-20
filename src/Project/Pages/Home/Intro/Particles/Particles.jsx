// import Particles, { initParticlesEngine } from "@tsparticles/react";
import Particles from "react-tsparticles";
import {loadSlim} from 'tsparticles-slim';
import { useCallback, useMemo, useEffect, useState } from 'react';
import particleJSON from './particles.json';

const ParticlesComponent = () => {
    const options = useMemo(()=>{
        return particleJSON;
    }, []);

    const particleInit = useCallback(async (engine)=> {
        await loadSlim(engine);
    },[]);

    return <Particles init={particleInit} options={options}/>;
}

export default ParticlesComponent;