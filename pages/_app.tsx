import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import theme from '../theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { InstagramProvider } from '../components/photography/InstagramProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <InstagramProvider>
        <Component {...pageProps} />
      </InstagramProvider>
    </ChakraProvider>
  )
}
