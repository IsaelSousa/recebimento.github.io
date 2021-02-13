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
    var value = document.querySelector('#send-rm').value

    var replace = value.replaceAll(" ", "").replaceAll(".", "")
    document.querySelector('#content').value = replace

    var contentvalue = document.querySelector('#content').value
    document.querySelector('#length').value = contentvalue.length
  }

  function removeSpaceClear() {
    document.querySelector('#send-rm').value = ""
    document.querySelector('#content').value = ""
    document.querySelector('#length').value = "0"

  }
