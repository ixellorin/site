import SkillRating from'./SkillRating';

import { ReactElement } from 'react';
import { Box, Heading, VStack, Wrap, WrapItem,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Hide,
    Show, } from '@chakra-ui/react';
import Head from 'next/head';

const Skills = (): ReactElement => {
    const max = 5
    const feSkillset = [
        { label: 'JavaScript', rating: 4 },
        { label: 'Vue.js', rating: 3 },
        { label: 'React', rating: 3 },
        { label: 'HTML', rating: 4 },
        { label: 'CSS', rating: 3 },
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
        { label: 'Azure Cloud', rating: 2 },
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
        <VStack py={'10%'} spacing={14}>
            <Heading>Skillset</Heading>
            <Wrap w={['100%', '100%', '75%']} justify={'space-between'} spacing={[10, 14]}>
                <WrapItem>
                    <VStack textAlign={'left'}>
                        <Box alignItems={'start'} w={'100%'} mb={'8px'}>
                            <Heading size={'md'}>Languages & Libraries</Heading>
                        </Box>
                        <Wrap spacing={[10, 10, 10, 24]}>
                            <WrapItem>
                                <VStack alignContent={'start'}>
                                    {(feSkillset || []).map((skill, n) => {
                                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                                    })}
                                </VStack>
                            </WrapItem>
                            <WrapItem>
                                <VStack alignContent={'start'}>
                                    {(beSkillset || []).map((skill, n) => {
                                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                                    })}
                                </VStack>
                            </WrapItem>
                        </Wrap>
                    </VStack>
                </WrapItem>
                <WrapItem>
                    <VStack textAlign={'left'}>
                        <Box alignItems={'start'} w={'100%'} mb={'8px'}>
                            <Heading size={'md'}>Tools and Other Skills</Heading>
                        </Box>
                        <Wrap spacing={[10, 10, 10, 24]}>
                            <WrapItem>
                                <VStack>
                                    {(toolSetA || []).map((skill, n) => {
                                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                                    })}
                                </VStack>
                            </WrapItem>
                            <WrapItem>
                                <VStack alignContent={'start'}>
                                    {(toolSetB || []).map((skill, n) => {
                                        return(<SkillRating key={n} label={skill.label} rating={skill.rating} max={max}/>)
                                    })}
                                </VStack>
                            </WrapItem>
                        </Wrap>
                    </VStack>
                </WrapItem>
            </Wrap>
            <Hide above={'md'}>
                <Accordion w={'100%'} defaultIndex={[]} allowMultiple>
                    <AccordionItem>
                        <Heading>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Legend
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                            <Wrap justify={'space-evenly'} pt={[8, 8, 8, 24]} spacing={14}>
                                <WrapItem >
                                    <SkillRating label={"Learning:"} rating={1} max={max} legend={true}/>
                                </WrapItem>
                                <WrapItem >
                                    <SkillRating label={"Experienced:"} rating={2} max={max} legend={true}/>
                                </WrapItem>
                                <WrapItem >
                                    <SkillRating label={"Intermediate:"} rating={3} max={max} legend={true}/>
                                </WrapItem>
                                <WrapItem >
                                    <SkillRating label={"Advanced:"} rating={4} max={max} legend={true}/>
                                </WrapItem>
                                <WrapItem >
                                    <SkillRating label={"Expert:"} rating={max} max={max} legend={true}/>
                                </WrapItem>
                            </Wrap>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Hide>
            <Show above={'lg'}>
                <Wrap justify={'space-evenly'} pt={[8, 8, 8, 24]} spacing={14}>
                    <WrapItem >
                        <SkillRating label={"Learning:"} rating={1} max={max} legend={true}/>
                    </WrapItem>
                    <WrapItem >
                        <SkillRating label={"Experienced:"} rating={2} max={max} legend={true}/>
                    </WrapItem>
                    <WrapItem >
                        <SkillRating label={"Intermediate:"} rating={3} max={max} legend={true}/>
                    </WrapItem>
                    <WrapItem >
                        <SkillRating label={"Advanced:"} rating={4} max={max} legend={true}/>
                    </WrapItem>
                    <WrapItem >
                        <SkillRating label={"Expert:"} rating={max} max={max} legend={true}/>
                    </WrapItem>
                </Wrap>
            </Show>
        </VStack>
    )
}

export default Skills