
import Image from 'next/image';
import { Grid, Box } from '@material-ui/core';
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
        { label: 'GraphQL', rating: 2 },
        { label: 'Python', rating: 3 },
        { label: 'Flask', rating: 3 },
        { label: 'SQLAlchemy', rating: 3 },
        { label: 'SQL', rating: 3 },
    ];

    const toolSetA = [
        { label: 'Azure DevOps', rating: 3 },
        { label: 'Azure Functions', rating: 2 },
        { label: 'Azure Portal', rating: 2 },
        { label: 'Adobe XD', rating: 3 },
        { label: 'Figma', rating: 3 },
    ];

    const toolSetB = [
        { label: 'UI Design', rating: 2 },
        { label: 'Client Engagement', rating: 2 },
        { label: 'Development Processes & Lifecycle', rating: 3 },
        { label: 'Leadership', rating: 3 },
        { label: 'Teamwork :)', rating: 5 },
    ];

    return (
        <div className={styles.skillset}>
            <h1>Skillset</h1>
            <Grid container className={styles.offsetter} justifyContent="space-evenly" spacing={10} columns={{ md: 10 }}>
                <Grid item md={8}>
                    <div className={styles["skills__header"]}>Languages & Libraries</div>
                </Grid>
                <Box component={Grid} item md={2} display={{ xs: "none", md: "block" }}>
                </Box>
            </Grid>
            <Grid container justifyContent="space-evenly" spacing={10} columns={{ md: 10 }}>
                <Grid item md={5} className={styles["ratings"]}>
                    {(feSkillset || []).map((skill, n) => {
                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                    })}
                </Grid>
                <Grid item md={5} className={styles["ratings"]}>
                    {(beSkillset || []).map((skill, n) => {
                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                    })}
                </Grid>
            </Grid>
            <Grid container className={styles.offsetter} justifyContent="space-evenly" spacing={10} columns={{ md: 10 }}>
                <Grid item md={8}>
                    <div className={styles["skills__header"]}>Tools and Other Skills</div>
                </Grid>
                <Box component={Grid} item md={2} display={{ xs: "none", md: "block" }}>
                </Box>
            </Grid>
            <Grid container justifyContent="space-evenly" spacing={10} columns={{ md: 10 }}>
                <Grid item md={5} className={styles["ratings"]}>
                    {(toolSetA || []).map((skill, n) => {
                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                    })}
                </Grid>
                <Grid item md={5}>
                    {(toolSetB || []).map((skill, n) => {
                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                    })}
                </Grid>
            </Grid>
            <Grid container className={styles.legend} justifyContent="space-evenly">
                <Grid item xs={1}/>
                <Grid item xs={2.2} className={styles["legend__item--first"]}>
                    <SkillRating label={"Learning:"} rating={1} max={max} legend={true}/>
                </Grid>
                <Grid item xs={2.2} className={styles["legend__item"]}>
                    <SkillRating label={"Experienced:"} rating={2} max={max} legend={true}/>
                </Grid>
                <Grid item xs={2.2} className={styles["legend__item"]}>
                    <SkillRating label={"Intermediate:"} rating={3} max={max} legend={true}/>
                </Grid>
                <Grid item xs={2.2} className={styles["legend__item"]}>
                    <SkillRating label={"Advanced:"} rating={4} max={max} legend={true}/>
                </Grid>
                <Grid item xs={2.2} className={styles["legend__item"]}>
                    <SkillRating label={"Expert:"} rating={max} max={max} legend={true}/>
                </Grid>
            </Grid>
        </div>
    )
}