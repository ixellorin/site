
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
            <div className={styles.credit}>
                <small>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a>, <a href="https://www.freepik.com" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a>, and <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small>
            </div>
            <br/>
            <br/>
            <br/>
            This site is still under construction - more coming soon! Visit my old site at <a href="https://site-ixellorin.vercel.app/" title="old site">here</a>.
        </div>
    )
}

export default React.forwardRef(Projects)