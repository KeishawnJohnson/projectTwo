

function loaddata() {
$.ajax({
    url: "http://localhost:8080/data"
    method: "GET"
  }).then(function(response,err) {
    console.log(response);
  });
}