function postArticle() {
//プロパティ.jsからプロパティを取得
 let siteURL = PropertiesService.getScriptProperties().getProperty('URL');
 let userID = PropertiesService.getScriptProperties().getProperty('USER_ID');
 let pass = PropertiesService.getScriptProperties().getProperty('PASSWORD');
 let title = 'テスト';
 let content = 'テストtext'; 
 let apiURL = siteURL + 'wp-json/wp/v2/posts';
 let headers = {
 'Content-Type': 'application/json',
 'Authorization': 'Basic ' + Utilities.base64Encode(userID + ":" + pass)
  };
let arguments = {
'title': title,
'content': content,
'status': 'publish',
'comment_status': 'closed'
};
let options = {
'method': 'POST',
'muteHttpExceptions': true,
'headers': headers,
'payload': JSON.stringify(arguments)
};
//URLフェッチとAPIリクエスト
let response = UrlFetchApp.fetch(apiURL, options);
//応答結果をJSON化して保存し、ログ出力
let responseJson = JSON.parse(response.getContentText());
console.log(responseJson);
}
