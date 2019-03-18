var stack = new StackDataStructure();

var buttonAdd = document.querySelector(".btn-add");
buttonAdd.onclick = function() {
  var element = document.querySelector("#inputline").value;
  stack.push(element);
  print();
};

var buttonTake = document.querySelector(".btn-take");
buttonTake.onclick = function() {
  stack.pop();
  print();
};

function print() {
  var text = "";
  for (var i = stack.MAX_SIZE - 1; i >= 0; i--) {
    if (i == stack.MAX_SIZE - 1 && !stack.canPush()) {
      text += "<div class='box-take'>" + stack.push(0) + "</div>";
    } else if (i === 0 && stack.isEmpty()) {
      text += "<div class='box-take'>" + stack.pop() + "</div>";
    } else {
      if (stack.stackControl[i] == undefined) {
        text += "<div class='box-grey'></div>";
      } else {
        text += "<div class='box-add'>" + stack.stackControl[i] + "</div>";
      }
    }
  }
  document.querySelector(".boxes").innerHTML = text;
}
