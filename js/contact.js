$(document).ready(function () {
  $("#googleform").submit(function (event) {
      var data = new FormData;
      //名前を取得
      data.append('entry.2005620554', $("#googleform input[name=name]").val());

      data.append('entry.1166974658', $("#googleform input[name=tel]").val());

      data.append('entry.1045781291', $("#googleform input[name=email]").val());

      data.append('entry.839337160', $("#googleform textarea[name=otoiawase]").val());
  
      $.ajax({
          
          url: "https://docs.google.com/forms/d/e/1FAIpQLSfSmkS9YXfvXFGfyEMPb8474WoBztg1K4V9kzURqtL4NnmQCQ/formResponse",

          data: data,
          processData: false,
          contentType: false,
          type: "POST",
          dataType: "xml",
          statusCode: {
              0: function () {
                  //送信に成功したときの処理
                  $("form").slideUp();
                  $('#success').slideDown();
              },
              200: function () {
                  //送信に失敗したときの処理
                  $("form").slideUp();
                  $('#error').slideDown();
              }
          }
      });
      event.preventDefault();
  });
});