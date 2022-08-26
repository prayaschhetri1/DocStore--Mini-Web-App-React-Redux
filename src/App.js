
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import MainRoute from './routes/MainRoute';

function App() {
  return (
   <Box>
     <Navbar/>
     <MainRoute/>
   </Box>
  );
}

export default App;
