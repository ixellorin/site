
import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

import { useState, useEffect } from 'react';
import styles from './projects.module.scss';

function Projects(props, ref) {

    return (
        <div className={styles.projects} id="projects" ref={ref}>
            <h1>Projects</h1>
            <Grid container justify="flex-start" spacing={10}>
                {(props.projects || []).map((project, n) => {
                    return (<ProjectCard project={project} key={n}/>)
                })}
            </Grid>
        </div>
    )
}

export default React.forwardRef(Projects)