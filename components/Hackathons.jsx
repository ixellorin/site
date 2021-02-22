
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import HackathonCard from './HackathonCard';

import { useState, useEffect } from 'react';
import styles from './hackathons.module.scss';

export default function Hackathons(props) {

    return (
        <div className={styles.hackathons}>
            <h1>Hackathons</h1>
            <Grid container justify="center">
                {(props.hackathons || []).map((hackathon, n) => {
                    return (
                    <>
                        <Grid item xs={1} />
                        <HackathonCard hackathon={hackathon} key={n}/>
                        <Grid item xs={1} />
                    </>)
                })}
            </Grid>
        </div>
    )
}