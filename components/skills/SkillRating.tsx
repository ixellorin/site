import { Box, HStack, Spacer } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface ISkillRatingProps {
    label: string,
    legend?: boolean,
    max?: number,
    rating?: number,
    size?: number
}

const SkillRating = ({ label, legend=true, max=5, rating=0, size=14 }: ISkillRatingProps): ReactElement => {
    
    const items = []

    for (let i = 0; i < (max); i++) {
        items.push(
            <Box key={i} h={`${size}px`} w={`${size}px`} borderRadius={'50%'} background={`${i < rating ? '#6FB98F' : '#BDE7CF'}`}/>
        )
    }

    return (
        <HStack alignContent={'start'} align={'center'} w={'100%'}>
            <Box textAlign={'left'} maxW={200}>
                {label}
            </Box>
            <Spacer/>
            {items.map((item) => {
                return item
            })}
        </HStack>
    )
}

export default SkillRating