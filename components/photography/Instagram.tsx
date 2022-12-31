import React, { useContext } from 'react';
import { useEffect } from 'react';

/* Components */
import {
    AspectRatio,
    Box,
    Center,
    Fade,
    Flex,
    Image,
    Show,
    Switch,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import MDIIcon from '../icons/MDIIcon';
import { mdiChevronDoubleDown } from '@mdi/js';
import { InstagramContext } from './InstagramProvider';

const Instagram = () => {
    const {
        dark,
        setDark,
        instaPhotos,
        setInstaPhotos,
        nextURL,
        setNextURL,
        selectedPhoto,
        setSelectedPhoto,
        sorted,
        setSorted
    } = useContext(InstagramContext)

    const breakpoint = useBreakpointValue(
        {
            base: 4,
            xs: 1,
            sm: 1,
            md: 1,
            lg: 2,
            xl: 2,
            '2xl': 4
        }
    )

    const showMore = () => {
        if (nextURL) {
            let tempURL = nextURL
            let limit = 12;
            let photos: any[] = []
            const fetchPhotos = async () => {
                await fetch(nextURL + `&limit=${limit}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
                    .then((response) => {
                        return response.json()
                    })
                    .then(async (response) => {
                        photos = photos.concat(response.data.filter((item: any) => item.media_type !== 'VIDEO'))
                        tempURL = response.paging.next
                        limit = limit - photos.length
                        if (limit > 0) {
                            fetchPhotos()
                        }
                    })
                    .catch((error: any) => {
                        setInstaPhotos([]);
                    })
                return photos
            }
            fetchPhotos().then(response => {
                setNextURL(tempURL)
                setInstaPhotos(instaPhotos.concat(response))
            })
        }
    }

    useEffect(() => {
        // Fetch instagram images
        if (!(instaPhotos.length > 0)) {
            let tempURL: string
            let limit = 12;
            let photos: any[] = []
            const fetchPhotos = async () => {
                await fetch(`https://graph.instagram.com/me/media?fields=id,media_url,media_type&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}&media_type=IMAGE&limit=${limit}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
                    .then((response) => {
                        return response.json()
                    })
                    .then(async (response) => {
                        photos = photos.concat(response.data.filter((item: any) => item.media_type !== 'VIDEO'))
                        tempURL = response.paging.next
                        limit = limit - photos.length
                        if (limit > 0) {
                            fetchPhotos()
                        }
                    })
                    .catch((error: any) => {
                        setInstaPhotos([]);
                    })
                return photos
            }
            fetchPhotos().then(response => {
                setNextURL(tempURL)
                setInstaPhotos(instaPhotos.concat(response))
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // Fetch instagram images
        if (instaPhotos.length > 0 && breakpoint) {
            const numCols = !selectedPhoto ? 4 : breakpoint
            const cols: Array<any[]>[] = []

            while (cols.length < numCols) {
                cols.push([])
            }

            let col = 0;

            instaPhotos.forEach((photo) => {
                if (col == numCols) {
                    col = 0
                }
                cols[col].push(photo)
                col++
            })

            setSorted(cols)
        }
    }, [instaPhotos, breakpoint, selectedPhoto])

    return (
        <Flex w={'100%'} h={'80vh'} maxH={'80vh'} pb={10}>
            {
                <Box h={selectedPhoto ? '100%' : '0px'} w={selectedPhoto ? '75%' : '0px'} background={dark ? 'black' : 'none'} transition={'all 1000ms ease-in-out'} py={selectedPhoto ? 2 : 0} px={selectedPhoto ? 5 : 0}>
                    <Image src={selectedPhoto?.media_url || ''}
                        h={'calc(100% - 50px)'}
                        objectFit={'scale-down'}
                        alt={'instagram-' + selectedPhoto?.id}
                    />
                    {selectedPhoto &&
                        <Center h={'50px'}>
                            <Box>
                                <Switch onChange={() => setDark(!dark)} colorScheme='whiteAlpha' />
                            </Box>
                        </Center>
                    }
                </Box>
            }
            <Box w={selectedPhoto ? '25%' : '100%'} h={'100%'} background={dark ? 'black' : 'none'} transition={'all 1000ms ease-in-out'}>
                <VStack borderLeft={!selectedPhoto ? 'none' : dark ? 'solid 1px' : 'solid 1px'} borderLeftColor={dark ? '#F1F1F2' : 'primary.blue.100'} overflowY={'auto'} h={'calc(100%)'} transition={'all 1000ms ease'}>
                    {
                        instaPhotos.length > 0 ? (
                            <Box w={'100%'} display={'flex'} flexWrap={'wrap'} px={2}>
                                {
                                    sorted.map((column, n) => {
                                        return (
                                            <Box
                                                key={n}
                                                flex={[
                                                    (!selectedPhoto ? '25%' : '100%'),
                                                    (!selectedPhoto ? '25%' : '100%'),
                                                    (!selectedPhoto ? '25%' : '100%'),
                                                    (!selectedPhoto ? '25%' : '50%'),
                                                    (!selectedPhoto ? '25%' : '50%'),
                                                    '25%'
                                                ]}
                                                maxW={[(!selectedPhoto ? '25%' : '100%'),
                                                (!selectedPhoto ? '25%' : '100%'),
                                                (!selectedPhoto ? '25%' : '100%'),
                                                (!selectedPhoto ? '25%' : '50%'),
                                                (!selectedPhoto ? '25%' : '50%'),
                                                    '25%'
                                                ]}
                                                px={1}
                                                maxH={'100%'} >
                                                {
                                                    column.map((photo: any) => {
                                                        return (
                                                            <Fade key={photo.id} in={photo.media_url !== null}>
                                                                <Show above={'sm'}>
                                                                    <AspectRatio maxW='100%' ratio={4 / 4} my={2}>
                                                                        <Box
                                                                            w={'100%'}
                                                                            h={'100%'}
                                                                            onClick={() => { setSelectedPhoto(photo) }}
                                                                            _hover={selectedPhoto ?
                                                                                { cursor: 'pointer', position: 'absolute', height: '175%', width: '175%', top: '-37.5%', left: '-37.5%', zIndex: 9999 } :
                                                                                { cursor: 'pointer' }} transition={'all 1000ms ease'}
                                                                        >
                                                                            <Image src={photo.media_url}
                                                                                py={0}
                                                                                h={'100%'} w={'100%'}
                                                                                objectFit={'cover'}
                                                                                alt={'instagram-' + photo.id}
                                                                            />
                                                                            <Box
                                                                                position={'absolute'}
                                                                                h={'100%'}
                                                                                w={'100%'}
                                                                                bottom={0}
                                                                                _hover={{ bgGradient: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));' }} transition={'all 1000ms ease'}
                                                                            />
                                                                        </Box>
                                                                    </AspectRatio>
                                                                </Show>
                                                                <Show below={'sm'}>
                                                                    <AspectRatio maxW='100%' ratio={4 / 4} my={2}>
                                                                        <Box w={'100%'} h={'100%'} onClick={() => { setSelectedPhoto(photo) }} _hover={{ cursor: 'pointer' }} transition={'all 1000ms ease'}>
                                                                            <Image src={photo.media_url}
                                                                                py={0}
                                                                                h={'100%'} w={'100%'}
                                                                                objectFit={'cover'}
                                                                                alt={'instagram-' + photo.id}
                                                                            />
                                                                            <Box position={'absolute'} h={'100%'} w={'100%'} bottom={0} _hover={{ bgGradient: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));' }} transition={'all 1000ms ease'} />
                                                                        </Box>
                                                                    </AspectRatio>
                                                                </Show>
                                                            </Fade>
                                                        )
                                                    })
                                                }
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        ) : <></>
                    }
                    <Box pb={2}>
                        {instaPhotos.length > 0 &&
                            <Box as='button' position={'relative'} onClick={showMore} borderRadius={'50%'} color={'primary.blue.100'} background={dark ? 'primary.blue.400' : 'none'} border={dark ? 'none' : 'solid 1px #102A49'} h={'25px'} w={'25px'} alignContent={'flex-start'} transition={'all 500ms ease'}
                                _hover={{
                                    background: dark ? 'none' : 'primary.blue.100',
                                    border: dark ? 'solid 1px #F1F1F2' : '',
                                    color: 'primary.blue.400'
                                }} >
                                <MDIIcon icon={mdiChevronDoubleDown} boxSize={'18px'} />
                            </Box>
                        }
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )

}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a: any) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default Instagram