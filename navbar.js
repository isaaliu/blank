import React from "react";
import { View, Text, StyleSheet, touchableOpacity } from "react-native";


const Navbar = ({ title, onLeftPress, onRightPress }) => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={onLeftPress}>
                <Text style={styles.navbarButton}>Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.navbarTitle}>{title}</Text>
            <TouchableOpacity onPress={onRightPress}>
                <Text style={styles.navbarButton}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
};
//folha de estilo....
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    navbarButton: {
        color: 'blue',
        fontSize: 16,
    },
    navbarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
export default Navbar;
