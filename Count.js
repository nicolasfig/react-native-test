import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    bigText: {
        fontSize: 100
    }
})

export const num = 120

class Count extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired
    }

    render(){
        return (
            <Text style={styles.bigText}>{this.props.count}</Text>
        )
    }
}

export default Count;