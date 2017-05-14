

class ToggleButtons {
  constructor(buttons_container, observer) {
    this.observer = observer;
    this.direction = buttons_container.querySelector("#direction");
    this.buttons = buttons_container.querySelectorAll(".button");
    for (let button of this.buttons) {
      button.addEventListener("click", (event) => {
        this._handle_button_pressed(event.target);
      });
    }
  }

  currently_selected() {
    for (let button of this.buttons) {
      if (button.classList.contains('selected')) {
        return button.getAttribute('data-name');
      }
    }
  }

  currently_not_selected() {
    for (let button of this.buttons) {
      if (!button.classList.contains('selected')) {
        return button.getAttribute('data-name');
      }
    }
  }

  _handle_button_pressed(button) {
    console.log("button pressed");
    this._toggle_to_other();
    this._toggle_classes(this.direction, 'to-euros', 'to-bahts');
    this.observer(this.currently_selected());
  }

  _toggle_classes(element, toggle_class_1, toggle_class_2) {
    if (element.classList.contains(toggle_class_1)) {
      element.classList.remove(toggle_class_1);
      element.classList.add(toggle_class_2);
    } else {
      element.classList.remove(toggle_class_2);
      element.classList.add(toggle_class_1);
    }
  }

  _toggle_to_other() {
    for(let b of this.buttons) {
      if (b.classList.contains('selected')) {
        b.classList.remove('selected');
      } else {
        b.classList.add('selected');
      }
    }
  }


}
