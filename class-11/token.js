var token = "asdfasdfasdfasdfasdfasdfasdfasdfasdf";

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
