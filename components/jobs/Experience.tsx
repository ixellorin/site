
import React, { ReactElement } from 'react';
import { Box, Heading, HStack, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import JobCard from './JobCard';

const Experience = (_props: any, ref: React.LegacyRef<HTMLDivElement> | undefined): ReactElement => {
    
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
    return (
        <VStack w={'100%'} py={'10%'} id="experience" textAlign={'center'} spacing={14} ref={ref}>
            <Heading>Work Experience</Heading>
            <Wrap w={'100%'} justify={'space-around'}>
                    {jobs.map((job, n) => {
                        return (
                            <WrapItem key={job.title}>
                                <JobCard job={job}/>
                            </WrapItem>
                        )
                    })}
            </Wrap>
        </VStack>
    )
}


export default React.forwardRef(Experience)