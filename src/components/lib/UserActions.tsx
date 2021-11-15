
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

var poolData = {
	UserPoolId: 'us-east-1_UIf0i6ysA', // Your user pool id here
	ClientId: '18bt3s2pudvf0f5tqrgmcusi67', // Your client id here
};
export function Register() {
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var attributeList = [];
	var dataEmail = {
		Name: 'email',
		Value: '666.strigoi2@gmail.com',
	};
	var dataPhoneNumber = {
		Name: 'phone_number',
		Value: '+15555555555',
	};
	var dataBicycle = {
		Name: 'bicycle',
		value: 'benoto mamalona'
	}
	var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
	var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
		dataPhoneNumber
	);
	var attributeBicycle = new AmazonCognitoIdentity.CognitoUserAttribute(dataBicycle);
	attributeList.push(attributeBicycle);
	attributeList.push(attributeEmail);
	attributeList.push(attributePhoneNumber);
	
	userPool.signUp('666.strigoi2@gmail.com', 'belmont62*', attributeList, null, function(
		err: any,
		result: any
	) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		var cognitoUser = result.user;
		console.log('user name is ' + cognitoUser.getUsername());
	});
}