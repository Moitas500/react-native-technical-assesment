import { 
    View, 
    Text,
} from 'react-native';
import { FlatList } from 'react-native-web';
import { styles } from './styles';

const RenderAuthor = ({ author }) => {
    return (
        <View style = {styles.row}>
            <Text style = {styles.cell}>{ author.id }</Text>
            <Text style = {styles.cell}>{ author.name }</Text>
            <Text style = {styles.cell}>{ author.age }</Text>
        </View>
    )
}

export default function TableAuthors({ authors }) {

    return (
        <View>
            <View style = {styles.header}>
                <Text style = {styles.heading}>ID</Text>
                <Text style = {styles.heading}>NOMBRE</Text>
                <Text style = {styles.heading}>EDAD</Text>
            </View>

            <FlatList
                data = {authors}
                renderItem = {({item}) => 
                    <RenderAuthor 
                        author={item}
                    />}
            />
        </View>
    );
}
