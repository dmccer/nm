const crypto = require('crypto');

const KEY = '796e13bfbf6b8001';
const keyBuf = Buffer.from(KEY, 'hex');

exports.decrypt = function(data) {
	const dataBuf = Buffer.from(data, 'hex');

	let decipher = crypto.createDecipheriv('des-ecb', keyBuf, new Buffer(0));  
	decipher.setAutoPadding(true);  
	let r = decipher.update(dataBuf, 'utf8');  
	r += decipher.final('utf8');

	return r;
}