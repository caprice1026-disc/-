function formObject() {
  //フォームID
  var formId = '秘密です'
 
  //フォームオブジェクトの取得
  var form = FormApp.openById(formId)
  
  //全回答の取得
  var formResponses = form.getResponses()
  
  //i件目の回答を取得
  for (var i = 0; i < formResponses.length; i++)  {
    //回答を格納する配列
    var arr = []
    //i件の回答を取得
    var itemResponses = formResponses[i].getItemResponses()
 
    for (var j = 0; j < itemResponses.length; j++)  {
      //i件目の回答のj番目の質問と回答を取得
      var title = itemResponses[j].getItem().getTitle()
      var response = itemResponses[j].getResponse()
      arr[j] =title + response
      //サークルネーム指定（？） var circlename = formResponses[0].getItemResponses()
    }
    Logger.log(arr)
    
  }
}
//上記の関数実行後にフォーム削除
function　DeleteAllEntries() {
 var formId = '1wu3rbkhwcjYH4wEu64O7omFdV69hylmoF7sT5T6pOJw'
  //フォームオブジェクトの取得
  var form = FormApp.openById(formId)
  if(form)form.deleteAllResponses();
}
