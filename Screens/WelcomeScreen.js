import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const WelcomeScreen = () => {
    return (

        <View style={styles.headerWrapper}>
            <Image
                style={styles.image}
                source={require('../img/logo.png')}
            />

            <Text style={styles.headerText}>Little Lemon, your local Mediterranean Bistro</Text>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
});

export default WelcomeScreen;