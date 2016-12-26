import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Text,
	Icon,
	Badge,
	Card,
	Thumbnail,
	CardItem
} from 'native-base';
import HTMLView from 'react-native-htmlview';

export default class Post extends Component {

	render() {
		const post = this.props.data;
		return (
			<Container>
				<Content>
					<Card style={styles.entry}>
						<CardItem>
							<Thumbnail source={{
								uri: post.author_avatar_lo
							}}/>
							<Text>
								{post.author}
							</Text>
							<Text note>
								Napisano {post.date}
							</Text>
						</CardItem>
						<CardItem cardBody>
							<HTMLView value={post.body}></HTMLView>
							<Button transparent textStyle={{
								color: '#87838B'
							}}>
								<Icon name="ios-add-circle-outline"/>
								<Text>{post.vote_count}</Text>
							</Button>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	authorImage: {
		width: 30,
		height: 30
	},
	entry: {
		flex: 0,
		margin: 5
	}
});
