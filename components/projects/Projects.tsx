
import React, { ReactElement } from 'react';
import ProjectCard from './ProjectCard';

import { Box, Heading, VStack, Wrap, WrapItem } from '@chakra-ui/react'

const Projects = (_props: any, ref: React.LegacyRef<HTMLDivElement> | undefined): ReactElement => {
    
    const projects = [
        {
          title: 'Website',
          languages: 'Next.js, HTML, CSS',
          description: 'An ongoing work, designed and prototyped in Adobe XD, developed from the ground-up in Next.JS, and deployed to GitHub Pages to serve as a personal website. Getting in some practice with React/Next.JS.',
          icon: '/icons/project_icons/website.svg',
        },
        {
          title: 'My Pokémon App',
          languages: 'React, HTML, CSS',
          description: 'Simple app made for use as a visual companion with live-streaming. Getting in some practice with React. Add Pokémon to your  collection and your party to help viewers keep track of your game status.',
          icon: '/icons/project_icons/pokemon.svg',
          gitHubURL: 'https://github.com/ixellorin/Pokemon-React-App',
          externalURL: 'https://ixellorin.github.io/Pokemon-React-App/',
        },
        {
          title: 'TF-IDF on Enron Emails',
          languages: 'Python',
          description: 'Python playground; running term frequency-inverse document frequency on the released Enron emails dataset.',
          icon: '/icons/project_icons/email_search.svg',
          gitHubURL: 'https://github.com/ixellorin/Enron',
        },
        {
          title: 'Kapow! Comic Collaboration',
          languages: 'TypeScript, Fabric.js, AngularJS',
          description: 'Collaborate to create comics and add comments to your art. Leveraging a RESTful API, Fabric.js for drawing and image insertion. School Project.',
          icon: '/icons/project_icons/comic.svg',
          gitHubURL: 'https://github.com/ixellorin/Team3',
        },
        {
          title: 'Source, a side-scroller',
          languages: 'Blender, Unity, C#',
          description: 'Part of the 2016 Global Game Jam. Led design, and tried my hand at 3D asset modeling while contributing to development.',
          icon: '/icons/project_icons/controller.svg',
          gitHubURL: 'https://github.com/ixellorin/GGJ2016',
          externalURL: 'https://globalgamejam.org/2016/games/source',
        },
        {
          title: 'Freeze Frame!',
          languages: 'Unity, C#',
          description: 'Probably the project I\'m most proud of; part of the 2015 Global Game Jam. Led gameplay and level design, coordinated and participated in development. Ask me about this, and I\'ll have a story for you.',
          icon: '/icons/project_icons/controller.svg',
          gitHubURL: 'https://github.com/ixellorin/FreezeFrame',
          externalURL: 'https://globalgamejam.org/2015/games/freeze-frame',
        },
        {
          title: 'Pokémon Database',
          languages: 'SQL, PHP',
          description: 'Search through a database of Pokémon to find out information on the original 151. School Project',
          icon: '/icons/project_icons/pokedex.svg',
          gitHubURL: 'https://github.com/ixellorin/PokemonDB',
        },
        {
          title: 'Runner',
          languages: 'Java, XML',
          description: 'Endearingly described as "Crappy First Android Game", this was my first (Android) game, and first side project that I developed with friends.',
          icon: '/icons/project_icons/controller.svg',
          gitHubURL: 'https://github.com/ixellorin/Runner/tree/master/Runner',
        },
        {
          title: 'Resource Locator Android App',
          languages: 'Java, XML',
          description: 'Locate resources centres of the Family Resource Programs of british Columbia; from my first hackathon!',
          icon: '/icons/project_icons/map.svg',
          gitHubURL: 'https://github.com/ixellorin/FRP-BC',
        }
      ]

    return (
        <VStack w={'100%'} textAlign={'center'} py={'10%'} id='projects'ref={ref} spacing={14}>
            <Heading>Projects</Heading>
            <Wrap spacing={24} w={'100%'} justify={'space-around'} mt={'48px'}>
                {(projects || []).map((project) => {
                    return (
                        <WrapItem key={project.title}>
                            <ProjectCard project={project}/>
                        </WrapItem>
                    )
                })}
            </Wrap>
            <Box w={'100%'} textAlign={'left'} mt={'24px'}>
                <small>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a>, <a href="https://www.freepik.com" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a>, and <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small>
            </Box>
            <Box w={'100%'} textAlign={'left'}>
                
            </Box>
        </VStack>
    )
}

export default React.forwardRef(Projects)