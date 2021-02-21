
import { Grid } from '@material-ui/core';
import Jobs from './Jobs';
import Skills from './Skills';
import Hackathons from './Hackathons';
import { useState, useEffect } from 'react';
import styles from './experience.module.scss';

export default function Experience(props) {
    const jobs = [
        { 
            company: 'KPMG',
            title: 'Full-stack Developer',
            date: 'Feb. 2019 - Present',
            hooks: ['Data pipelines', 'Cloud services', 'Data-driven insights'],
            img: '/images/jobs/kpmg.png',
            imgWidth: 241,
            imgHeight: 100,
        },
        { 
            company: 'ATR Japan',
            title: 'Control Software Developer (Co-op)',
            date: 'Jan. 2017 - Aug. 2017',
            hooks: ['Data stream analysis', 'Utility function decision-making', 'Social robotics research'],
            img: '/images/jobs/atr.png',
            imgWidth: 217,
            imgHeight: 100,
        },
        { 
            company: 'Access to Media Education Society',
            title: 'Web Developer, Designer (Co-op)',
            date: 'May 2016 - Aug. 2016',
            hooks: ['Non-profit digital outreach', 'UI design', 'WordPress web development'],
            img: '/images/jobs/ames.png',
            imgWidth: 255,
            imgHeight: 100,
        },
        { 
            company: 'Visier',
            title: 'Software Developer (Co-op)',
            date: 'Sept. 2014 - Aug. 2015',
            hooks: ['Data analytics', 'Web app development', 'Data visualizations'],
            img: '/images/jobs/visier.jpg',
            imgWidth: 100,
            imgHeight: 100,
        },
    ]

    const hackathons = [
        {
            name: 'BizHacks 2020',
            role: 'Technical Mentor',
            img: '/images/hackathons/bizhacks.png',
            imgWidth: 150,
            imgHeight: 150,
        },
        {
            name: 'Global Game Jam 2016',
            role: 'Development, 3D Asset Development',
            img: '/images/hackathons/ggj.png',
            imgWidth: 280,
            imgHeight: 150,
        },
        {
            name: 'Global Game Jam 2015',
            role: 'Level/Gameplay Design, Development',
            img: '/images/hackathons/ggj.png',
            imgWidth: 280,
            imgHeight: 150,
        },
        {
            name: 'Think Global Hack Local 2013',
            role: 'Development',
            img: '/images/hackathons/tghl.jpg',
            imgWidth: 137,
            imgHeight: 150,
        },
    ]

    const skills = []

    return (
        <div className={styles.experience}>
            <Jobs jobs={jobs} />
            <Skills skills={skills} />
            <Hackathons hackathons={hackathons} />
        </div>
    )
}