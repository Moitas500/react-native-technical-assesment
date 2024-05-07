import { 
    Button, 
    View, 
} from 'react-native';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-web';
import axios from 'axios';
import TableBooks from '../components/TableBooks';
import { getEnv } from "../config/enviroment";
import { styles } from './styles';

const InfoButtons = [
    {
        title: 'Autores',
        route: 'autores'
    },
    {
        title: 'Generos',
        route: 'generos'
    }
]

const Buttons = ({title, route, navigation}) => (
    <View style = {styles.button}>
        <Button
            title={title}
            onPress={() => navigation.navigate(route)}
        />
    </View>
)

export default function ShowBooks({ navigation }) {

    const url = getEnv().serviceHost;

    const [books, setBooks] = useState([]);

    useEffect( () => {
        getBooks();
    }, [])


    const getBooks = async () => {
        try {
            const response = await axios.get(url + '/api/Books');
            setBooks(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>

            <TableBooks
                books={books}
            />

            <FlatList
                data = {InfoButtons}
                renderItem = {({item}) => <Buttons 
                                        title={item.title}
                                        route={item.route}
                                        navigation={navigation}
                                    />}
                horizontal = {true}
            />
        </View>
    );
}
