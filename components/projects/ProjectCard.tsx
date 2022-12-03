
import Image from 'next/image';
import MDIIcon from '../icons/MDIIcon';
import { Box, HStack, Tooltip, VStack } from '@chakra-ui/react'
import { mdiGithub } from '@mdi/js';
import { mdiOpenInNew } from '@mdi/js';
import { IProject } from '../../types';

interface IProjectCardProps {
    project: IProject
}

const ProjectCard = ({ project }: IProjectCardProps) => {
    const links = []

    if (project.gitHubURL && project.gitHubURL !== '') {
        links.push(
            <Tooltip label="View source code on GitHub" hasArrow={true} bg={'primary.blue.100'} color={'white'} key={`${project.title}-1`}>
                <a href={project.gitHubURL} target="_blank" rel="noreferrer">
                    <MDIIcon icon={mdiGithub} boxSize={8}/>
                </a>
            </Tooltip>)
    }

    if (project.externalURL && project.externalURL !== '') {
        links.push(
            <Tooltip label="Visit project" hasArrow={true} bg={'primary.blue.100'} color={'white'} key={`${project.title}-2`}>
                <a href={project.externalURL} target="_blank" rel="noreferrer">
                    <MDIIcon icon={mdiOpenInNew} boxSize={8}/>
                </a>
            </Tooltip>)
    }

    return (
        <VStack maxW={'300px'}>
            <VStack spacing={2}>
                <Image src={project.icon}
                width={100} height={100}
                alt={project.title}/>
                <Box fontWeight={'bold'} fontSize={'1.2em'}>{project.title}</Box>
                <Box fontWeight={'bold'}>{project.languages}</Box>
                <Box textAlign={'left'}>{project.description}</Box>
            </VStack>
            <HStack align={'start'} w={'100%'}>
                {(links || []).map((link) => {
                    return(link)
                })}
            </HStack>
        </VStack>
    );
};

export default ProjectCard