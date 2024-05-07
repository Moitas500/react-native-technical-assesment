import { View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableGenres from '../components/TableGenres';
import { getEnv } from "../config/enviroment";
import { styles } from './styles';

export default function ShowGenres() {
  const url = getEnv().serviceHost;

  const [genres, setGenres] = useState([]);

  useEffect( () => {
    getGenres();
  }, [])

  const getGenres = async () => {
    try {
        const response = await axios.get(url + '/api/Genres');
        setGenres(response.data);
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <TableGenres
        genres={genres}
      />
    </View>
  );
}
