
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import JobCard from './JobCard';
import SkillRating from'./SkillRating';

import { useState, useEffect } from 'react';
import styles from './skillset.module.scss';

export default function Skills(props) {
    const max = 5
    const feSkillset = [
        { label: 'JavaScript', rating: 4 },
        { label: 'Vue.js', rating: 4 },
        { label: 'Vuetify', rating: 4 },
        { label: 'React', rating: 3 },
        { label: 'HTML', rating: 4 },
        { label: 'CSS', rating: 4 },
    ];

    const beSkillset = [
        { label: 'Node.js', rating: 3 },
        { label: 'GraphQL', rating: 2 },
        { label: 'Python', rating: 3 },
        { label: 'Flask', rating: 3 },
        { label: 'SQLAlchemy', rating: 3 },
        { label: 'SQL', rating: 3 },
    ];

    const toolSetA = [
        { label: 'Git', rating: 4 },
        { label: 'Azure Dev Ops', rating: 3 },
        { label: 'Azure Functions', rating: 2 },
        { label: 'Azure App Services', rating: 2 },
        { label: 'Adobe XD', rating: 3 },
    ];

    const toolSetB = [
        { label: 'UI Design', rating: 2 },
        { label: 'Client Engagement', rating: 2 },
        { label: 'Dev Processes/Lifecycle', rating: 3 },
        { label: 'Teamwork :)', rating: 5 },
    ];

    return (
        <div className={styles.skillset}>
            <h1>Skillset</h1>
            <Grid container className={styles.offsetter}>
                <Grid item md={1}/>
                <Grid item md={4}>
                    <div className={styles.skillsHeader}>Languages</div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={1}/>
                <Grid item md={4} className={styles.skillsetContainer}>
                    {(feSkillset || []).map((skill, n) => {
                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                    })}
                </Grid>
                <Grid item md={1}/>
                <Grid item md={1}/>
                <Grid item md={4}>
                    {(beSkillset || []).map((skill, n) => {
                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                    })}
                </Grid>
                <Grid item md={1}/>
            </Grid>
            <Grid container className={styles.offsetter}>
                <Grid item md={1}/>
                <Grid item md={4}>
                    <div className={styles.skillsHeader}>Tools and Other Skills</div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={1}/>
                <Grid item md={4} className={styles.skillsetContainer}>
                    {(toolSetA || []).map((skill, n) => {
                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                    })}
                </Grid>
                <Grid item md={1}/>
                <Grid item md={1}/>
                <Grid item md={4}>
                    {(toolSetB || []).map((skill, n) => {
                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                    })}
                </Grid>
                <Grid item md={1}/>
            </Grid>
            <Grid container justify="flex-start" className={styles.legend}>
                <Grid item xs={1}/>
                <Grid item xs={2.2}>
                    <SkillRating label={"Learning:"} rating={1} max={max} legend={true}/>
                </Grid>
                <Grid item xs={2.2} className={styles.legendratecontainer}>
                    <SkillRating label={"Experienced:"} rating={2} max={max} legend={true}/>
                </Grid>
                <Grid item xs={2.2} className={styles.legendratecontainer}>
                    <SkillRating label={"Intermediate:"} rating={3} max={max} legend={true}/>
                </Grid>
                <Grid item xs={2.2} className={styles.legendratecontainer}>
                    <SkillRating label={"Advanced:"} rating={4} max={max} legend={true}/>
                </Grid>
                <Grid item xs={2.2} className={styles.legendratecontainer}>
                    <SkillRating label={"Expert:"} rating={max} max={max} legend={true}/>
                </Grid>
            </Grid>
        </div>
    )
}