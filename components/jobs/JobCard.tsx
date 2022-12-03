import { Box, Center, Image, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { IJob } from '../../types';

interface IJobCardProps {
    job: IJob
}

const JobCard = ({ job }: IJobCardProps): ReactElement => {

    return (
            <VStack spacing={10}>
                <Center w={'100%'}>
                    <Image src={job.img}
                    boxSize={['120px', '120px', '200px']}
                    objectFit='contain'
                    alt="Cio Ellorin"/>
                </Center>
                <Box textAlign={'left'} fontSize={'1.2em'}>
                    <Box fontWeight={'bold'}>{job.company}</Box>
                    <Box fontWeight={'bold'}>{job.title}</Box>
                    <Box fontWeight={'bold'}>{job.date}</Box>
                    <VStack mt={'30px'} w={'100%'} textAlign={'left'}>
                        {
                            (job.hooks || []).map((hook, n) => {
                                return (<Box key={n} w={'100%'} textAlign={'left'}>{hook}</Box>)
                            })
                        }
                        <br/>

                    </VStack>
                    {/* <span><u>Read more</u></span> */}
                </Box>
            </VStack>
    );
};

export default JobCard