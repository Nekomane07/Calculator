var input = document.getElementById("input");

// auto selects the display for the user to type in on page startup
window.onload = function() {
  document.getElementById("input").focus();
};


// Execute a function when the user presses a key on the keyboard
document.addEventListener("keypress", function(event) {
  const end = input.value.length;
  input.setSelectionRange(end, end);
  input.focus()
  if (event.key === "c") {
    event.preventDefault();
    input.value = ''
  }
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents page from refreshing
    document.getElementById("equivalent").click();
  }
});

document.getElementById('clear').onclick = function() {
  document.getElementById('input').value = '';

}

document.getElementById('equivalent').onclick = function() {
  try {
    if (input.value == '9 + 10' || input.value == '9+10' || input.value == '9+ 10' || input.value == '9 +10') {
      input.value = '21 B)';
    } else if (input.value == '505') {
      input.value = 'I love Izzy <3';
    } else {
    input.value = eval(input.value) ?? 'ERROR';
    }
  } catch(err) {
    document.getElementById("input").value =
    'ERROR';
  }
}