import md5 from 'react-native-md5';
import {secret, key, accountKey} from './secret.js';
const LAST_ENTRIES = '/stream/index';
const USER_LOGIN = '/user/login';

const baseApiUrl = 'http://a.wykop.pl';

export const getUser = () => {
	let resourceUrl = getEndpoint(USER_LOGIN);
	let apisign = md5.hex_md5(secret + resourceUrl + accountKey);
	return fetch(resourceUrl, {
		method: 'POST',
		headers: {
			'apisign': apisign,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: "accountkey=" + accountKey
	}).then((r) => r.json()).then((json) => {
		return json;
	}).catch((e) => {
		console.log("Error");
		console.log(e);
	})
}

const getEndpoint = (resource) => {
	return baseApiUrl + resource + '/appkey,' + key;
}

export const getPosts = () => {
	let resourceUrl = getEndpoint(LAST_ENTRIES);
	let apisign = md5.hex_md5(secret + resourceUrl);
	return fetch(resourceUrl, {
		method: 'GET',
		headers: {
			'apisign': apisign,
			'Content-Type': 'application/json'
		}
	}).then((r) => r.json()).then((json) => {
		return json;
	}).catch((e) => {
		console.log("Error");
		console.log(e);
	})
}
