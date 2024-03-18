import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const theme = extendTheme()

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
