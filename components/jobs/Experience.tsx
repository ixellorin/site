
import React, { ReactElement } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import JobCard from './JobCard';

const Experience = (_props: any, ref: React.LegacyRef<HTMLDivElement> | undefined): ReactElement => {
    
    const jobs = [
        { 
            company: 'KPMG',
            title: 'Full-stack Developer',
            date: 'Feb. 2019 - Present',
            techStack: 'Type/JavaScript, React, VueJS, Python, SQL, Azure Cloud Services, Adobe XD, Figma',
            hooks: (
                    <Accordion w={'100%'} defaultIndex={[]}>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        Web Development & Cloud Solutions
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                Develop <b>responsive</b> web applications that leverage <b>Azure Cloud Services</b> such as <b>Functions, Blob Storage, and Batch</b>, to create <b>data and deployment pipelines</b>, and interfaces that assist clients in making <b>data-driven decisions</b>.
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        Team Leadership
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                Gained <b>leadership experience</b> on smaller projects through <b>making decisions and providing guidance</b> on software design, <b>managing work assignment</b>, and handling other project administration tasks such as <b>security and risk approvals.</b>
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        Client Engagement
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                Engage clients directly through <b>brainstorming sessions</b>, walking through <b>wireframes and prototypes</b> created in Adobe XD and/or Figma, regular <b>demos</b>, and <b>project close-out.</b>
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                   ),
            img: '/images/jobs/kpmg.png',
            imgWidth: 241,
            imgHeight: 100,
        },
        { 
            company: 'ATR Japan',
            title: 'Control Software Developer (Co-op)',
            date: 'Jan. 2017 - Aug. 2017',
            techStack: 'Java, Google Speech-to-Text',
            hooks: (
                    <Accordion w={'100%'} defaultIndex={[]}>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        Data stream analysis
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                Convert <b>audio data</b> captured from <b>Speech-to-Text</b> into motion instructions to create more natural human-robot engagements.
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        Utility function design
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                Design <b>utility function</b> based on current audio <b>data streams</b> and <b>historical data</b> to mimic <b>decision making</b> and natural conversation flow.
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        Social robotics research
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                <b>Assist researchers</b> in setting up and conducting <b>human-robot interaction</b> experiments, as well as <b>developing tools</b> used during experiments.
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                   ),
            img: '/images/jobs/atr.png',
            imgWidth: 217,
            imgHeight: 100,
        },
        { 
            company: 'Access to Media Education Society',
            title: 'Web Developer, Designer (Co-op)',
            date: 'May 2016 - Aug. 2016',
            techStack: 'WordPress, HTML, CSS, Adobe Illustrator',
            hooks: (
                    <Accordion w={'100%'} defaultIndex={[]}>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        WordPress web development
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                <b>Develop and deploy</b> new company website through <b>WordPress website builder</b>, creating <b>custom plugins and HTML,</b> and <b>tracking website analytics</b>.
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        UI design
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                <b>Design</b> a new, <b>modernized</b> look for the company website through Adobe Illustrator, and <b>present designs to stakeholders</b>.
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        Digital outreach
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                Assist in <b>communications</b>, as well as <b>photographing events</b>.
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                   ),
            img: '/images/jobs/ames.png',
            imgWidth: 255,
            imgHeight: 100,
        },
        { 
            company: 'Visier',
            title: 'Software Developer (Co-op)',
            date: 'Sept. 2014 - Aug. 2015',
            techStack: 'ActionScript, XML',
            hooks: (
                    <Accordion w={'100%'} defaultIndex={[]}>
                        <AccordionItem >
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        Web app development
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                Create/improve application features such as <b>app-wide search functions</b>, <b>authentication</b> and <b>navigation</b>.
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        Data analytics
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                Develop features to provide insights based on <b>HR data</b> and <b>benchmarking.</b>
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Heading>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                        Data Visualization
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4} bg={'rgba(255,255,255,.4)'} borderWidth={'1px'} borderStyle={'solid'} borderColor={'primary.blue.100'}>
                            <Box w={'100%'} textAlign={'left'}>
                                Leverage data to create <b>data visualizations</b> of many different chart types to assist clients in making <b>data-driven decisions</b>.
                            </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    ),
            img: '/images/jobs/visier.jpg',
            imgWidth: 100,
            imgHeight: 100,
        },
    ]
    return (
        <VStack w={'100%'} py={'10%'} id="experience" textAlign={'center'} spacing={14} ref={ref}>
            <Heading>Work Experience</Heading>
            <Wrap w={'100%'} justify={'space-evenly'} spacing={2}>
                    {jobs.map((job, n) => {
                        return (
                            <WrapItem key={job.title}>
                                <JobCard job={job}>
                                    {job.hooks}
                                </JobCard>
                            </WrapItem>
                        )
                    })}
            </Wrap>
        </VStack>
    )
}


export default React.forwardRef(Experience)