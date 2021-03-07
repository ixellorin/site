
import Image from 'next/image';
import Icon from '@mdi/react';
import { Grid } from '@material-ui/core';
import styles from './landing.module.scss';
import { mdiChevronDoubleDown } from '@mdi/js';

export default function Landing(props) {
    return (
        <div className={styles.landing} id="landing">
            <Grid container alignContent="center" alignItems="center" justify="center" className={styles.landing}>
                <Grid item justify="center">
                    <div className={styles.profile}>
                        <Image src="/images/profile.jpg"
                        layout='fill'
                        alt="Cio Ellorin"/>
                    </div>
                    <div className={styles.header}>
                        <span className={styles.hello}>Hello, World! I'm</span>
                        <div className={styles.name}>
                            CIO ELLORIN
                        </div>
                        Software Developer, UI/UX Enthusiast, Star Wars fan.
                    </div>
                    <Icon path={mdiChevronDoubleDown}
                        title="Chevron Double Down"
                        className={styles.prompt} />
                </Grid>
            </Grid>
        </div>
    )
}