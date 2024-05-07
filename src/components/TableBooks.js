import { 
    View, 
    Text,
} from 'react-native';
import { FlatList } from 'react-native-web';
import { styles } from './styles';

const RenderBook = ({ book }) => {
    return (
        <View style = {styles.row}>
            <Text style = {styles.cell}>{ book.id }</Text>
            <Text style = {styles.cell}>{ book.name }</Text>
            <Text style = {styles.cell}>{ book.date }</Text>
            <Text style = {styles.cell}>{ book.author }</Text>
            <Text style = {styles.cell}>{ book.genre }</Text>
        </View>
    )
}

export default function TableBooks({ books }) {

    return (
        <View>
            <View style = {styles.header}>
                <Text style = {styles.heading}>ID</Text>
                <Text style = {styles.heading}>NOMBRE</Text>
                <Text style = {styles.heading}>FECHA</Text>
                <Text style = {styles.heading}>AUTHOR</Text>
                <Text style = {styles.heading}>GENERO</Text>
            </View>

            <FlatList
                data = {books}
                renderItem = {({item}) => 
                    <RenderBook 
                        book={item}
                    />}
            />
        </View>
    );
}
