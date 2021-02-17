import Image from 'next/image';
import { Grid } from '@material-ui/core';
import styles from './jobcard.module.scss';

export default function JobCard(props) {

    return (
        <Grid item sm={12} md={6}>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <Image src={props.job.img}
                    height={props.job.imgHeight}
                    width={props.job.imgWidth}
                    alt="Cio Ellorin"/>
                </div>
                <div className={styles.text}>
                    <span className={styles.title}>{props.job.company}</span><br/>
                    <span className={styles.title}>{props.job.title}</span><br/>
                    <span className={styles.title}>{props.job.date}</span><br/><br/>
                    {props.job.hooks.map((hook, n) => {
                        return (<span key={n}>{hook}<br/></span>)
                    })}
                    <br/>
                    <span><u>Read more</u></span>
                </div>
            </div>
        </Grid>
    );
};