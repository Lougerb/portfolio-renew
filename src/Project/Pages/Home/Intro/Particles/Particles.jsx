import Particles, { initParticlesEngine } from "@tsparticles/react";
import {loadSlim} from '@tsparticles/slim';
import { loadAll } from "@tsparticles/all";
import { loadFull } from "tsparticles";
import { useCallback, useMemo, useEffect, useState } from 'react';
import particleJSON from './particles.json';

const ParticlesComponent = () => {
    const options = useMemo(()=>{
        return particleJSON;
    }, []);


  const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
        //   await loadAll(engine);
        //   await loadFull(engine);
          await loadSlim(engine);
          //await loadBasic(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);

    // const particleInit = useCallback((engine)=> {
    //     loadSlim(engine);
    // },[]);

    return <Particles options={options}/>;
}

export default ParticlesComponent;