import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';
import Login from '../components/Login';
import List from '../components/List';
import UIWrapper from '../components/UIWrapper';
import FooterTab from '../components/Footer';
import {Container, Content, Header, Title} from 'native-base';

export default class App extends Component {

	renderScene(route, navigator) {
		let index = route.index;
		let title = route.title;
		if (index === 'Login') {
			return (
				<UIWrapper title={title}>
					<Login navigator={navigator}/>
				</UIWrapper>
			);
		}
		if (index === 'List') {
			return (
				<UIWrapper title={title}>
					<List navigator={navigator}></List>
				</UIWrapper>
			);
		}
	}

	render() {
		return (<Navigator initialRoute={{
			index: 'Login',
			title: 'Zaloguj się kurwiu'
		}} renderScene={(route, navigator) => this.renderScene(route, navigator)}/>);
	}
}
