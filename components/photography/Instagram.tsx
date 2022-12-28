import React from 'react';
import { useState, useEffect } from 'react';

/* Components */
import { AspectRatio, Box, Button, Fade, HStack, Image, Slide, SlideFade, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import styles from '../../styles/instagram.module.scss';

interface IInstagramProps {
    show: boolean
}
const Instagram = ({ show }: IInstagramProps) => {
    const [nextURL, setNextURL] = useState<string | null>(null);
    const [instaPhotos, setInstaPhotos] = useState<any[]>([]);
    const [sorted, setSorted] = useState<any[]>([]);
    const [err, setErr] = useState(false);

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
        <Box h={'100%'} w={'100%'}>
            {
                instaPhotos.length > 0 ? (
                    <Box display={'flex'} flexWrap={'wrap'} w={'100%'}>
                        {
                            sorted.map((column, n) => {
                                return (
                                    <Box key={n} flex={['100%', '50%', '50%', '25%']} maxW={['100%', '50%', '50%', '25%']} px={2}>
                                        {
                                            column.map((photo: any) => {
                                                return (
                                                    <Fade in={photo.media_url !== null}>
                                                        <AspectRatio maxW='100%' ratio={3 / 4}>
                                                                <Image src={photo.media_url}
                                                                py={2}
                                                                objectFit={'cover'}
                                                                />
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