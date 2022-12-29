import React from 'react';
import { useState, useEffect } from 'react';

/* Components */
import {
    AspectRatio,
    Box,
    Button,
    Fade,
    Image,
    Switch,
    VStack,
} from '@chakra-ui/react';

const Instagram = () => {
    const [nextURL, setNextURL] = useState<string | null>(null);
    const [instaPhotos, setInstaPhotos] = useState<any[]>([]);
    const [sorted, setSorted] = useState<any[]>([]);
    const [err, setErr] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null)
    const [dark, setDark] = useState(false)

    const showMore = () => {
        if (nextURL) {
            let tempURL = nextURL
            let limit = 12;
            let photos: any[] = []
            const fetchPhotos = async () => {
                await fetch(nextURL+`&limit=${limit}`, { method: 'GET', headers: { 'Content-Type': 'application/json' }})
                .then((response) => {
                    return response.json()
                })
                .then(async (response) => {
                    photos=photos.concat(response.data.filter((item: any) => item.media_type !== 'VIDEO'))
                    tempURL = response.paging.next
                    limit = limit - photos.length
                    if (limit > 0) {
                        fetchPhotos()
                    }
                })
                .catch((error: any) => {
                    setInstaPhotos([]);
                })
                console.log(photos.length)
                return photos
            }
            fetchPhotos().then(response => {
                console.log(response.length)
                setNextURL(tempURL)
                setInstaPhotos(instaPhotos.concat(response))
            })
        }
    }

    useEffect(() => {
        // Fetch instagram images
        if (!(instaPhotos.length > 0)) {
            console.log('logging on load')
            let tempURL: string
            let limit = 12;
            let photos: any[] = []
            const fetchPhotos = async () => {
                await fetch(`https://graph.instagram.com/me/media?fields=id,media_url,media_type&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}&media_type=IMAGE&limit=${limit}`, { method: 'GET', headers: { 'Content-Type': 'application/json' }})
                .then((response) => {
                    return response.json()
                })
                .then(async (response) => {
                    photos=photos.concat(response.data.filter((item: any) => item.media_type !== 'VIDEO'))
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
        if (instaPhotos.length > 0) {
            const cols: Array<any[]>[] = [[],[],[],[]]
            let col = 0;
        
            instaPhotos.forEach((photo) => {
                if (col == 4) {
                    col = 0
                }
                cols[col].push(photo)
                col++
            })
            
            setSorted(cols)
        }
    }, [instaPhotos])
    return (
        <Box w={'100%'} h={'100%'}>
            {   
            <Box maxH={'100%'} h={'100%'} w={`${selectedPhoto ? '75%' : '0px'}`} display={'inline-block'} background={`${dark ? 'black' : 'none'}`} transition={'all 1000ms ease-in-out'} py={2}>
                    {/* <SlideFade in={selectedPhoto !== null}> */}
                    <Image src={selectedPhoto?.media_url || ''}
                    px={3} py={4} h={'calc(100% - 50px)'}
                    objectFit={'scale-down'}
                    alt={'instagram-'+selectedPhoto?.id}
                    />
                    {/* </SlideFade> */}
                <Switch onChange={() => setDark(!dark)} colorScheme='whiteAlpha' mt={6} position={'absolute'}/>
            </Box>
            }
            <Box w={`${selectedPhoto ? '25%' : '100%'}`} p={2} h={'100%'} overflowY={'auto'}  display={'inline-block'} background={`${dark ? 'black' : 'none'}`} transition={'all 1000ms ease-in-out'} overflowX={'visible'}>
                <VStack w={'100%'} overflowX={'visible'}>
                    {
                        instaPhotos.length > 0 ? (
                            <Box display={'flex'} flexWrap={'wrap'} w={'100%'} maxH={'calc(100% - 50px)'} overflowX={'visible'}>
                                {
                                    sorted.map((column, n) => {
                                        return (
                                            <Box key={n} flex={['100%', '50%', '50%', '25%']} maxW={['100%', '50%', '50%', '25%']} px={2} maxH={'100%'} overflowX={'visible'}>
                                                {
                                                    column.map((photo: any) => {
                                                        return (
                                                            <Fade key={photo.id} in={photo.media_url !== null}>
                                                                <AspectRatio maxW='100%' ratio={4 / 4} my={2}>
                                                                    <Box w={'100%'} h={'100%'} onClick={() => {setSelectedPhoto(photo)}} _hover={ selectedPhoto ? { cursor: 'pointer', position: 'absolute', height: '150%', width: '150%', top: '-25%', left: '-25%', zIndex: 9999 } : { cursor: 'pointer' }} transition={'all 1000ms ease'}>
                                                                        <Image src={photo.media_url}
                                                                        py={0}
                                                                        h={'100%'} w={'100%'}
                                                                        objectFit={'cover'}
                                                                        alt={'instagram-'+photo.id}
                                                                        />
                                                                        <Box position={'absolute'} display={'flex'} h={'100%'} w={'100%'} bottom={0} _hover={{  bgGradient: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));'}} transition={'all 1000ms ease'}/>
                                                                    </Box>
                                                                </AspectRatio>
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
                    <Button onClick={showMore}>SHOW MORE</Button>
                </VStack>
            </Box>
        </Box>
    )

}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
 function shuffle(a:any) {
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