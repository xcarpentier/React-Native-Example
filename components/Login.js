import React, {Component} from 'react';
import {
	Container,
	Content,
	List,
	ListItem,
	InputGroup,
	Input,
	Icon,
	Text,
	Picker,
	Button
} from 'native-base';
import {getUser} from '../wykop';

class Login extends Component {

	constructor(props) {
		super(props);
	}

	onLogin() {
		getUser().then((r) => {
			console.log(r.userkey);
			this.props.navigator.push({index: 'List', title: 'MirkoReact'})
		})

	}

	render() {
		return (
			<Content>
				<List>
					<ListItem>
						<InputGroup>
							<Icon name="ios-person" style={{
								color: '#0A69FE'
							}}/>
							<Input placeholder="EMAIL"/>
						</InputGroup>
					</ListItem>
					<ListItem>
						<InputGroup>
							<Icon name="ios-unlock" style={{
								color: '#0A69FE'
							}}/>
							<Input placeholder="PASSWORD" secureTextEntry/>
						</InputGroup>
					</ListItem>
				</List>
				<Button style={{
					alignSelf: 'center',
					marginTop: 20,
					marginBottom: 20
				}} onPress={() => this.onLogin()}>
					Zaloguj się
				</Button>
			</Content>

		);
	}
}

export default Login;
