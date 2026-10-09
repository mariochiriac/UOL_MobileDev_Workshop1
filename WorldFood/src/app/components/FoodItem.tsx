import { Image, StyleSheet, Text, View } from 'react-native';

export default function FoodItem(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:props.source}}/>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: 'center',
        marginTop: 10
    },
    name: {
        color: '#E96B45',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 15
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 20,
        borderRadius: 5
    }
});