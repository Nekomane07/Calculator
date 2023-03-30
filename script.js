// Allows the user to solve using Enter key on Keyboard
var input = document.getElementById("input");

// auto selects the display for the user to type in on page startup
window.onload = function() {
  document.getElementById("input").focus();
};


// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents page from refreshing
    try {
      eval(document.getElementById('input').value);
      document.getElementById("equivalent").click();
    }
    catch(err) {
      document.getElementById("input").value =
      'ERROR';
    }
    
  }
});


document.getElementById('clear').onclick = function() {
  document.getElementById('input').value = '';
  document.getElementById("input").focus();

}

document.getElementById('equivalent').onclick = function() {
  try {
    if (input.value == '9 + 10' || input.value == '9+10' || input.value == '9+ 10' || input.value == '9 +10') {
      input.value = 21;
    } else if (input.value == '505') {
      input.value = 'I love Izzy <3';
    } else {
    input.value = eval(input.value);
    }
  } catch(err) {
    document.getElementById("input").value =
    'ERROR';
  }
}