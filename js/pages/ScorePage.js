import React, {
	Component
} from 'react';

import {
	Text
} from 'react-native'

class ScorePage extends Component {
	static navigationOptions = {
		title: '比分',
	};
	render() {
		return <Text> 比分页面 </Text>;
	}
}

export default ScorePage