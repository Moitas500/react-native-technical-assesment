import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    heading: {
        flex: 1,
        fontSize: 15,
        margin: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        elevation: 1,
        borderRadius: 3,
        borderColor: "#fff",
        backgroundColor: "#fff"
    },
    cell: {
        fontSize: 15,
        textAlign: "left",
        flex: 1,
        marginLeft: 15
    }
})