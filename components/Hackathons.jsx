
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import HackathonCard from './HackathonCard';

import styles from './hackathons.module.scss';

export default function Hackathons(props) {

    return (
        <div className={styles.hackathons}>
            <h1>Hackathons</h1>
            <Grid container justifyContent="space-evenly" columnSpacing={10} columns={{ md: 8 }}>
                {(props.hackathons || []).map((hackathon, n) => {
                    return (
                    <Grid item md={5}>
                        <HackathonCard hackathon={hackathon} key={n}/>
                    </Grid>)
                })}
            </Grid>
        </div>
    )
}