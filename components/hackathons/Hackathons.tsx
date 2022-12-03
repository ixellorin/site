
import Image from 'next/image';
import HackathonCard from './HackathonCard';
import { ReactElement } from 'react';
import { Box, Heading, VStack, Wrap, WrapItem } from '@chakra-ui/react';

const Hackathons = (): ReactElement => {

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

    return (
        <VStack w={'100%'} textAlign={'center'} py={'10%'} id='hackathons' spacing={14}>
            <Heading>Hackathons</Heading>
            <Wrap w={'100%'} justify={'space-around'} spacing={14}>
                {(hackathons || []).map((hackathon, n) => {
                    return (
                        <WrapItem key={hackathon.name}>
                            <HackathonCard hackathon={hackathon}/>
                        </WrapItem>
                    )
                })}
            </Wrap>
        </VStack>
    )
}

export default Hackathons