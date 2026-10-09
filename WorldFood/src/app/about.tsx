import { Text, View, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';


export default function about() {
    return (
        <View style={styles.container}>
            <Text>About Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

});