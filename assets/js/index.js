$(document).ready(function(){

  $(".moreInfo h4").click(function () {
        if($(".showmoreContent").hasClass("hide")) {
            $(this).text("Show less");
        } else {
            $(this).text("Show more info");
        }
        $(".showmoreContent").toggleClass("hide");
    });

  $('.box a').click(function(){
    $(".active").removeClass("active");
    $(this).closest('div').addClass("active");
    return false;
  });

  $.getJSON('assets/js/menu.json', function(data){
    //console.log(data);
    var menu = $('#menu');
    $.each(data.menu, function(i, item){
        var li = $("<li id=" + item.id + " class=" + item.cssClass + ">" + item.description + "</li>");
        if(item.menu !== null){
          var ul = $("<ul class='submenu' />");
          $.each(item.menu, function(i, menu){
            var li = $("<li id=" + menu.id + " class=" + menu.cssClass + ">" + menu.id + "</li>")
            ul.append(li);
            li.on('click', function(){
              if(menu.leaf === true){
                alert(menu.content);
              }
            });
          });
          ul.appendTo(li);
        }
        li.on('click', function(){
          if(item.leaf === true){
            alert(item.content);
          }
        })
        li.appendTo(menu);
    });
  });

})
