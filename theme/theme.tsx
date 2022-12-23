import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading: `'Gothic A1', sans-serif`,
        body: `'Gothic A1', sans-serif`,
    },
    colors: {
        primary: {
            yellow: "#F8F1DC",
            grey: {
                100: "#121212",
                200: "#3F3F3F",
                300: "#626D71",
            },
            green: {
                100: "#128277",
                200: "#6FB98F",
                300: "#BDE7CF",
                400: "#EEFFF5"
            },
            blue: {
                100: "#102A49",
                200: "#4D85D5",
                300: "#F2F1FF",
                400: "#F1F1F2"
            }
        }
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
    },
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    },
    styles: {
        global: {
          // styles for the `body`
          body: {
            color: 'primary.blue.100',
          },
          svg: {
            stroke: 'primary.blue.100',
          }
        },
      },
})

export default theme