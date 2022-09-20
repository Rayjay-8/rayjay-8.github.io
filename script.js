var imdb = "tt8241000";
var ref = document.referrer;
embedderPlugin(imdb);
function embedderPlugin(imdb) {
   var frame = document.getElementById("EmbedderIframe");
   console.log(frame);
   frame.innerHTML +=
      '<iframe src="https://embedder.net/e/' +
      imdb +
      "?ref=" +
      ref +
      '" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>';
}
