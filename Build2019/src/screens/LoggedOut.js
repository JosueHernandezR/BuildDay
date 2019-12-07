import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';

export default class LoggedOut extends Component{
    render() {
        return(
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image
                        source={require('')}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}>
                        Bienvenidos a Let's Talk
                        <RoundedButton
                            text = "Continuar con Facebook"
                            textColor={colors.green01}
                            background = {colors.white}
                        />
                    </Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01,
    },
    welcomeWrapper:{
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    welcomeText:{
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    logo:{
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40,
    },
    
});