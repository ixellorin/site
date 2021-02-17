
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
                <Grid item container className={styles.listings} xs={12} lg={10} justify="space-between">
                    {props.jobs.map((job, n) => {
                        return (<JobCard job={job} key={n}/>)
                    })}
                </Grid>
            </Grid>
        </div>
    )
}