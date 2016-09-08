var crypto = require('crypto');

var KEY = '796e13bfbf6b8001';
var keyBuf = Buffer.from(KEY, 'hex');

exports.decrypt = function(data) {
	var dataBuf = Buffer.from(data, 'hex');

	var decipher = crypto.createDecipheriv('des-ecb', keyBuf, new Buffer(0));
	decipher.setAutoPadding(true);
	var r = decipher.update(dataBuf, 'utf8');  
	r += decipher.final('utf8');

	return r;
}
