import { Box, Center, Image, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { IJob } from '../../types';

interface IJobCardProps {
    job: IJob
    children: any
}

const JobCard = ({ job, children }: IJobCardProps): ReactElement => {

    return (
            <VStack spacing={[2, 10]} minW={['100%', '100%', '100%', 300, 400, 500]} maxW={['100%', '100%', '100%', 300, 400, 500]}>
                <Center w={'100%'}>
                    <Image src={job.img}
                    boxSize={['120px', '120px', '200px']}
                    objectFit='contain'
                    alt="Cio Ellorin"/>
                </Center>
                <Box textAlign={'left'} w={'100%'}>
                    <Box fontWeight={'bold'} px={4}>{job.company}</Box>
                    <Box px={4}>{job.title}</Box>
                    <Box px={4}>{job.date}</Box>
                    <Box px={4}>{job.techStack}</Box>
                    <VStack mt={['10px','30px']} w={'100%'} textAlign={'left'}>
                        {
                            children
                        }
                        <br/>

                    </VStack>
                    {/* <span><u>Read more</u></span> */}
                </Box>
            </VStack>
    );
};

export default JobCard