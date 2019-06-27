import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

import AddTaskComponent from './AddTaskComponent'

export default class ActionButtonComponent extends Component {
    constructor(props) {
        super(props);
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    _onPressAdd() {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Camera"
                        onPress={this._onPressAdd}
                    >
                        <Icon name="camera" style={{
                            fontSize: 20,
                            height: 22,
                            color: 'white',
                        }} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Text Note" onPress={() => { }}>
                        <Icon name="file-text-o" style={{
                            fontSize: 20,
                            height: 22,
                            color: 'white',
                        }} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
                        <Icon name="database" style={{
                            fontSize: 20,
                            height: 22,
                            color: 'white',
                        }} />
                    </ActionButton.Item>
                </ActionButton>                
            </View>
        );
    }
}