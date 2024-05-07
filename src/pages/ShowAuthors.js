import { View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableAuthors from '../components/TableAuthors';
import { getEnv } from "../config/enviroment";
import { styles } from './styles';

export default function ShowAuthors() {

  const url = getEnv().serviceHost;

  const [authors, setAuthors] = useState([]);

  useEffect( () => {
    getAuthors();
  }, [])

  const getAuthors = async () => {
    try {
        const response = await axios.get(url + '/api/Person');
        setAuthors(response.data);
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <TableAuthors
        authors={authors}
      />
    </View>
  );
}
