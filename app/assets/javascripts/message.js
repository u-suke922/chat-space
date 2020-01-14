$(function(){
  function buildHTML(message){
    if (message.image) {
      var html =
       `<div class="message" data-message-id="${message.id}">
          <div class="message__upper-info">
            <div class="message__upper-info__talker">
              ${message.user_name}
            </div>
            <div class="message__upper-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__text">
            <p class="message__text__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image}>
        </div>`
      return html;
    } else {
      var html =
       `<div class="message" data-message-id="${message.id}">
          <div class="message__upper-info">
            <div class="message__upper-info__tarker">
              ${message.user_name}
            </div>
            <div class="message__upper-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__text">
            <p class="message__text__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    console.log(formData)
    var url = $(this).attr('action')
    console.log(url)
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataTyoe: 'json',
      processData: false,
      contentType: false,
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
        $('.new_message')[0].reset();
        $('.submit__btn').prop('disabled', false);      
      })
      .fail(function(){
        alert("メッセージ送信に失敗しました");
      })
  })
});