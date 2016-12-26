import React, {Component} from 'react';
import {StyleSheet, Alert, ListView, TextInput} from 'react-native';
import Post from './Post';
import FooterTab from '../components/Footer';
import {getPosts} from '../wykop';

import {
	Container,
	Header,
	Title,
	Text,
	Content,
	Button,
	Icon,
	Badge
} from 'native-base';

export default class List extends Component {

	constructor() {
		super();
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			posts: ds.cloneWithRows([])
		};
	}

	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		getPosts().then((r) => {
			this.setState({posts: ds.cloneWithRows(r)});
		})
	}

	render() {
		return (
			<ListView enableEmptySections={true} dataSource={this.state.posts} renderRow={(post) => <Post data={post}/>}></ListView>
		);
	}
}

const styles = StyleSheet.create({
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	}
});
