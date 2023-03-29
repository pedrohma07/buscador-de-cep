import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import particlesConfig from "../config/particles-config"

import '../styles/particles.css'

const ParticleBackground = () => {

    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);

    return(
        <Particles 
            options={particlesConfig}
            init={particlesInit}
        />
    )   
}


export default ParticleBackground