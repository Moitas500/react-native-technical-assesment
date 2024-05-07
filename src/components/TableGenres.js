import { 
    View, 
    Text,
} from 'react-native';
import { FlatList } from 'react-native-web';
import { styles } from './styles';


const RenderGenre = ({ genre }) => {
    return (
        <View style = {styles.row}>
            <Text style = {styles.cell}>{ genre.id }</Text>
            <Text style = {styles.cell}>{ genre.name }</Text>
        </View>
    )
}

export default function TableGenres({ genres }) {

    return (
        <View>
            <View style = {styles.header}>
                <Text style = {styles.heading}>ID</Text>
                <Text style = {styles.heading}>NOMBRE</Text>
            </View>

            <FlatList
                data = {genres}
                renderItem = {({item}) => 
                    <RenderGenre 
                        genre={item}
                    />}
            />
        </View>
    );
}

