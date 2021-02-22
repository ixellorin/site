import Icon from '@mdi/react';
import Tooltip from '@material-ui/core/Tooltip';
import { Grid } from '@material-ui/core';
import { mdiGithub } from '@mdi/js';
import { mdiOpenInNew } from '@mdi/js';
import styles from './projectcard.module.scss';


export default function ProjectCard (props) {
    const links = []

    if (props.project.gitHubURL && props.project.gitHubURL !== '') {
        links.push(
            <Tooltip arrow title="View source code on GitHub">
                <a href={props.project.gitHubURL} target="_blank">
                    <Icon path={mdiGithub}
                        title='Code'
                        key="0"
                        size={1.5}/>
                </a>
            </Tooltip>)
    }

    if (props.project.externalURL && props.project.externalURL !== '') {
        links.push(
            <Tooltip arrow title="View project">
                <a href={props.project.externalURL} target="_blank">
                    <Icon path={mdiOpenInNew}
                        title='Link'
                        key="1"
                        size={1.5}/>
                </a>
            </Tooltip>)
    }

    return (
        <Grid item sm={12} md={4} className={styles.projectcard}>
            <div className={styles.container}>
                <div className={styles.profile}>
                    {props.project.icon}
                </div>
                <div className={styles.text}>
                    <span className={styles.title}>{props.project.title}</span><br/>
                    <span>{props.project.languages}</span><br/>
                    <div className={styles.description}>{props.project.description}</div>
                </div>
                <div className={styles.links}>
                    {(links || []).map((link) => {
                        return(link)
                    })}
                </div>
            </div>
        </Grid>
    );
};