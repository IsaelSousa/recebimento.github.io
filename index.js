$(document).ready(function () {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  
  $("#content").click(function(){

    $(this).select();

    document.execCommand('copy');

  })

  function btnText(texto) {
    document.querySelector('#texto1').innerText = texto;
  }




  function removeSpace() {
    var i = 16;

    var value = document.querySelector('#send-rm').value

    var replace = value.replaceAll(" ", "").replaceAll(".", "")
    document.querySelector('#content').value = replace

    var contentvalue = document.querySelector('#content').value
    document.querySelector('#length').value = contentvalue.length

      

      var timer = setInterval(function(func) {
      i--;
      document.getElementById("relogio").value = i;
      
        if(i <= 0){
          clearInterval(timer)
        document.querySelector('#send-rm').value = ""
        document.querySelector('#content').value = ""
        document.querySelector('#length').value = "0"
        }

    }, 1000);    




  }



