import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight, Alert, FlatList, Dimensions, StyleSheet
} from 'react-native';

import { Info } from '../screenNames';
import NewHeaderComponent from './NewHeaderComponent';
//import HeaderComponent from './HeaderComponent';
import AddTaskComponent from './AddTaskComponent'
import EditTaskComponent from './EditTaskComponent'
import flatListData from '../data/flatListData';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'

import { DrawerActions } from 'react-navigation';
import SearchInput, { createFilter } from 'react-native-search-filter';

var { height, width } = Dimensions.get('window');

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };
        this.state = {
            isVisible: false,
            setText: ''
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }
    _onLongPressButton() {
        Alert.alert('You long-pressed the button!'),
            <NewHeaderComponent {...this.props} />
    }

    handlePicked = (datetime) => {
        this.setState({
            isVisible: false,
            setText: moment(datetime).format('MMMM Do YYYY HH:mm')
        })
    };

    showPicked = () => {
        this.setState({
            isVisible: true
        })
    }

    hidePicked = () => {
        this.setState({
            isVisible: false,

        })
    };

    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        //Refresh FlatList ! 
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                <TouchableHighlight onPress={this.showPicked} onLongPress={this._onLongPressButton}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'silver',
                        alignItems: 'center',
                        height: height / 5,
                        marginBottom: 3,
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: 'white'
                    }}>
                        <Text>{this.props.item.key}</Text>
                        <Text>{this.props.item.name}</Text>
                        <Text>{this.props.item.description}</Text>
                        <Text style={{ color: 'red', fontSize: 20 }}>
                            {this.state.setText}
                        </Text>
                    </View>
                </TouchableHighlight>
                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicked}
                    onCancel={this.hidePicked}
                    mode={'datetime'}
                    is24Hour={true}
                />
            </Swipeout >
        );
    }
}

const KEYS_TO_FILTERS = ['name', 'description'];
export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
        });
        this.state = {
            searchTerm: ''
        }
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }
    render() {
        const filteredEmails = flatListData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'silver'
            }}>
                <View style={{
                    flex: 0.1,
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    marginBottom: 5
                }}>
                    <View style={{
                        flex: 0.1
                    }}>
                        <TouchableHighlight style={{ alignItems: 'center' }}
                            onPress={() => {
                                this.props.navigation.dispatch(DrawerActions.openDrawer());
                            }}>
                            <Icon name="list" size={30} color="white" />
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Note</Text>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center' }}>
                            <SearchInput
                                onChangeText={(term) => { this.searchUpdated(term) }}
                                style={styles.searchInput}
                                placeholder="Type a message to search"
                            />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableHighlight
                                onPress={() => {
                                    Alert.alert('You long-pressed the button!')
                                }}>
                                <Icon name="search" size={20} color="white" />
                            </TouchableHighlight>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableHighlight
                                onPress={() => {
                                    Alert.alert('You long-pressed the button!')
                                }}>
                                <Icon name="sort-amount-asc" size={20} color="white" />
                            </TouchableHighlight>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableHighlight
                                onPress={() => {
                                    Alert.alert('You long-pressed the button!')
                                }}>
                                <Icon name="ellipsis-v" size={20} color="white" />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 0.9,
                    flexDirection: 'column',
                }}>
                    <View>

                        <FlatList
                            ref={"flatList"}
                            extraData={this.state}
                            data={flatListData}
                            renderItem={({ item, index }) => {
                                filteredEmails.map(abc => {
                                    //console.log(`Item = ${JSON.stringify(email)}, index = ${index}`);
                                    return (
                                        <FlatListItem abc={abc} index={index} parentFlatList={this}>
                                            {console.log(`body = ${JSON.stringify(abc)}`)}
                                        </FlatListItem>
                                    )
                                })



                                // return (
                                //     <FlatListItem item={item} index={index} parentFlatList={this}>

                                //     </FlatListItem>);

                            }}
                        >

                        </FlatList>
                    </View>
                </View>
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
                <AddTaskComponent ref={'addModal'} parentFlatList={this}>

                </AddTaskComponent>
                <EditTaskComponent ref={'editModal'} parentFlatList={this}>

                </EditTaskComponent>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    emailItem: {
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
    },
    emailSubject: {
        color: 'rgba(0,0,0,0.5)'
    },
    searchInput: {
        padding: 10,
        width: width / 2,
        borderColor: '#CCC',
        backgroundColor: 'white',
        marginLeft: 20,
        borderRadius: 20,
        borderWidth: 1
    }
});