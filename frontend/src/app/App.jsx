import { Routes, Route, Link } from 'react-router-dom';
import { Box, Flex, HStack, Container } from '@chakra-ui/react';
import Topics from "./pages/topics/Topics.jsx";
import Board from "./pages/board/Board.jsx";

function App() {
  return (
    <Container maxW="container.md" centerContent>
      <Box width="100%" py={4}>
        <Flex as="nav" justify="center" borderBottom="1px solid" borderColor="gray.600" pb={4} mb={6}>
          <HStack spacing={4}>
            <Link to="/">Topics</Link>
            <Box>|</Box>
            <Link to="/board">Board</Link>
          </HStack>
        </Flex>
        
        <Routes>
          <Route path="/" element={<Topics />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;