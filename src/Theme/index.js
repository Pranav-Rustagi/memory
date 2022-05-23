import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `Atkinson Hyperlegible, ${base.fonts?.heading}`,
        body: `Atkinson Hyperlegible, ${base.fonts?.heading}`,
    },
    colors: {
        tangerine: {
            dark: "#fda214",
            light: "#f5a82f",
            faded: "#ffb84a",
            darker: "#e8920c"
        },
        spindle: "#bcced9",
        arapawa: "#304859",
        tangaroa: "#152938",
        white: {
            smoke: "#f2f2f2",
            snow: "#fcfcfc"
        },
        gray: {
            bermuda: "#7191a5"
        },
        shakespeare: "#6395b8",
        blue: {
            pattens: "#dfe7ec"
        }
    }
});

export default theme;