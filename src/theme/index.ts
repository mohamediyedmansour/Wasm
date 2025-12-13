import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  semanticTokens: {
    colors: {
      "bg.main": {
        default: "white",
        _dark: "#2596be",
      },
    },
  },
})

export default theme
