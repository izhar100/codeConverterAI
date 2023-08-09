import { useState } from 'react'
import CodeConverterForm from './components/CodeConverterForm'
import { Box, Heading } from '@chakra-ui/react'

function App() {

  return (
    <Box bg={"#45337cff"} color={"#ffffff"}>
      <Box w={"98%"} m={"auto"}>

        <br />
        <Heading textAlign={"center"} color={"#c8ff00"}>🔥Code Converter App</Heading>
        <br />
        <CodeConverterForm />
      </Box>
      <br />
    </Box>
  )
}

export default App
