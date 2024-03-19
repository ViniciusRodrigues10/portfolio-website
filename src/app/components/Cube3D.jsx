import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/Cube3d.module.scss';
import {
    faPython,
    faJsSquare,
    faHtml5,
    faCss3,
    faGitAlt,
    faReact,
} from '@fortawesome/free-brands-svg-icons';


const CubeComponent = () => {
  return (

    <div className={styles.cubespinner}>
        <div className={styles.face1}>
            <FontAwesomeIcon icon={faPython} color="#DD0031" />
        </div>
        <div className={styles.face2}>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className={styles.face3}>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className={styles.face4}>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className={styles.face5}>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className={styles.face6}>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
    </div>

  );
};

export default CubeComponent;