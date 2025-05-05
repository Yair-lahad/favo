import { useState } from 'react';
import { 
  Box, 
  Heading, 
  Input, 
  Button, 
  VStack, 
  HStack, 
  Text,
  List,
  ListItem
} from '@chakra-ui/react';

function Topics() {
  const [input, setInput] = useState('');
  const [topics, setTopics] = useState([]);

  const addTopic = () => {
    const trimmed = input.trim();
    if (trimmed) {
      setTopics([...topics, trimmed]);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTopic();
    }
  };

  return (
    <Box width="100%" textAlign="center">
      <Heading mb={6}>Topics</Heading>
      
      <HStack mb={6}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add topic"
          size="md"
        />
        <Button onClick={addTopic} colorScheme="blue">
          Add
        </Button>
      </HStack>

      {topics.length > 0 ? (
        <List spacing={3}>
          {topics.map((topic, i) => (
            <ListItem 
              key={i}
              p={3}
              bg="gray.700"
              borderRadius="md"
              textAlign="left"
            >
              {topic}
            </ListItem>
          ))}
        </List>
      ) : (
        <Text color="gray.500">No topics added yet</Text>
      )}
    </Box>
  );
}

export default Topics;