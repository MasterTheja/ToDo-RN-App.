import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function OutputListItem(props) {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View
                style={styles.OutputListItem}
            >

                <Text>{props.scrollables}</Text>

            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    OutputListItem: {
        padding: 10,
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        width: 250,
        borderRadius: 5,
        alignItems: 'center',
    }
});
