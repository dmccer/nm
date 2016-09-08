Postman newman
==============

## 安装

1. 安装 `nodejs`
2. 命令行执行: `npm i -g ttyh-nm`

## 使用

`nm [collection file] [environment file]`

* `collection file` Postman 客户端导出的 collection 文件
* `environment file` Postman 客户端导出的 environment 文件

例如：

`nm xxx.postman_collection xxx.postman_environment`

## API Case 中使用

```javascript
var body = globals.CryptUtil.decrypt(responseBody);

var schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "retcode": {
      "type": "integer"
    }
  }
};

tests['验证 JSON 格式'] = tv4.validate(data, schema);
```
