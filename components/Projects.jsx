
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

import { useState, useEffect } from 'react';
import styles from './projects.module.scss';

export default function Projects(props) {

    return (
        <div className={styles.projects}>
            <h1>Projects</h1>
            <Grid container justify="flex-start" spacing={10}>
                {(props.projects || []).map((project, n) => {
                    return (<ProjectCard project={project} key={n}/>)
                })}
            </Grid>
        </div>
    )
}