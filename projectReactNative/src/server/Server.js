

import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';

const apiGetAllInfo = 'http://192.168.0.101:3000';

async function getHeaderFromServer() {

    try {
        let respon = await fetch(apiGetAllInfo);
        let responJson = await respon.json();
        return responJson.Header;
    } catch (error) {
        console.error(`Error is: ${error}`)
    }
}
async function getInfoFromServer() {

    try {
        let respon = await fetch(apiGetAllInfo);
        let responJson = await respon.json();
        return responJson.Info;
    } catch (error) {
        console.error(`Error is: ${error}`)
    }
}

export { getHeaderFromServer, getInfoFromServer };