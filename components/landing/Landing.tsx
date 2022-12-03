
import Image from 'next/image';
import MDIIcon from '../icons/MDIIcon';
import styles from '../../styles/landing.module.scss';
import { mdiChevronDoubleDown } from '@mdi/js';
import { FC, ReactElement } from 'react';
import { Box, Center, VStack } from '@chakra-ui/react';

const Landing: FC = (): ReactElement => {
    return (
        <VStack w={'100%'} h={'100vh'} id='landing'background={'primary.blue.400'}>
            <Box textAlign={'center'} alignItems={'center'} h={'100%'}>
                <Center h={'100%'}>
                <VStack justify='center'>
                    <Box 
                    position={'relative'}
                    w={'400px'} h={'400px'}
                    borderRadius={'50%'}
                    overflow={'hidden'}
                    mb={'30px'}>
                        <Image src='/images/profile.jpg'
                        fill
                        alt='Cio Ellorin'/>
                    </Box>
                    <VStack borderWidth={'3px'} borderStyle={'solid'} borderColor={'primary.blue.100'}
                    p={'25px'}
                    position={'relative'}>
                        <Box
                        position={'absolute'}
                        top={'-30px'}
                        px={'10px'}
                        py={'15px'}
                        bg={'primary.blue.400'}
                        fontFamily={'Lobster'}
                        fontSize={'1.5rem'}>
                            Hello, World! I&apos;m
                        </Box>
                        <Box
                        fontSize={'3rem'}
                        fontWeight={'bold'}
                        fontFamily={'Gothic A1'}>
                            CIO ELLORIN
                        </Box>
                        Software Developer, Professional GIF user, Star Wars fan.
                    </VStack>
                    <MDIIcon icon={mdiChevronDoubleDown}
                        className={styles.prompt} />
                    </VStack>
                </Center>
            </Box>
        </VStack>
    )
};

export default Landing;