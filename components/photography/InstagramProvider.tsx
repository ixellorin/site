import { createContext, FC, useState } from 'react';

type Instagram = {
    dark: boolean
    setDark: (value: boolean) => void
    instaPhotos: any[]
    setInstaPhotos: (value: any[]) => void
    nextURL: string | null
    setNextURL: (value: string) => void
    selectedPhoto: any | null
    setSelectedPhoto: (value: any) => void
    sorted: any[]
    setSorted: (value: any[]) => void
}

export const InstagramContext = createContext<Instagram>({} as Instagram)

export const InstagramProvider = ({ children } : { children: any }) => {
    const [nextURL, setNextURL] = useState<string | null>(null);
    const [instaPhotos, setInstaPhotos] = useState<any[]>([]);
    const [sorted, setSorted] = useState<any[]>([]);
    const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null)
    const [dark, setDark] = useState(false)

    return (
        <InstagramContext.Provider
        value ={{
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
        }}>
            {children}
        </InstagramContext.Provider>
    )
}