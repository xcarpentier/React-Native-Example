import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';
import FooterTab from '../components/Footer';
import {Container, Content, Header, Title} from 'native-base';

export default class UIWrapper extends Component {

	render() {
		return (
			<Container>
				<Header>
					<Title>{this.props.title}</Title>
				</Header>
				<Content>
					{this.props.children}
				</Content>
				<FooterTab/>
			</Container>
		);
	}
}
