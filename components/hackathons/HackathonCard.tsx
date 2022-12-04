import { Box, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { ReactElement } from 'react';
import { IHackathon } from '../../types';

interface IHackathonCardProps {
    hackathon: IHackathon
}

const HackathonCard = ({ hackathon }: IHackathonCardProps): ReactElement => {

    return (
        <VStack spacing={10}>
            <Box>
                <Image src={hackathon.img}
                height={hackathon.imgHeight}
                width={hackathon.imgWidth}
                alt={hackathon.name}/>
            </Box>
            <VStack>
                <Box fontWeight={'bold'}>{hackathon.name}</Box>
                <Box>{hackathon.role}</Box>
            </VStack>
        </VStack>
    );
};

export default HackathonCard