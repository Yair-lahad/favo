import { useState } from 'react';

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

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Topics</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add topic"
      />
      <button onClick={addTopic}>Add</button>

      <ul>
        {topics.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default Topics;
