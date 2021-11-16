
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import JobCard from './JobCard';

import { useState, useEffect } from 'react';
import styles from './jobs.module.scss';

export default function Jobs(props) {

    return (
        <div className={styles.jobs}>
            <h1>Work Experience</h1>
            <Grid container justify="center">
                    {props.jobs.map((job, n) => {
                        return (
                            <>
                                <Grid item xs={1} />
                                <JobCard job={job} key={n}/>
                            </>
                        )
                    })}
            </Grid>
        </div>
    )
}