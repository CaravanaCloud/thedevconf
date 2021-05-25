$(window).load(function () {
  if (window.innerWidth > 767) {
    var client = new ZeroClipboard($(".copiar-email"));
    client.on('ready', function (event) {
      $(".dropdown-toggle").removeClass("disabled");
      $(".caret").removeClass("invisible");
    });
  }
});