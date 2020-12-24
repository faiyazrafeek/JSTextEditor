var editorContent = document.querySelector(".editor");

btn.addEventListener("click", function() {
  var s = editorContent.innerHTML;
  content.style.display = "block";
  content.textContent = s;
});

getText.addEventListener("click", function() {
  const old = editorContent.textContent;
  content.style.display = "block";
  content.textContent = old;
});

function format(property, value) { 
  document.execCommand(property, false, value);
}

