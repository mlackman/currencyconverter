class ViewManager {

  constructor(views) {
    this.main_view = document.getElementById('main-view-placeholder');
    this.views = views;
  }

  render(view_name) {
    console.log('rendering ' + view_name);
    this._clear_main_view();
    this._render_view(`${view_name}-template`);
    this._init_view(view_name);
  }

  _render_view(view_element_id) {
    console.log("Rendering view with id:", view_element_id);
    let view = document.getElementById(view_element_id);
    if (!view) {
      throw `View template with id "${view_element_id}" was not found`;
    }
    let clone = document.importNode(view.content, true);
    this.main_view.append(clone);
  }

  _clear_main_view() {
    console.log("Removing old view nodes");
    while (this.main_view.firstChild) {
      this.main_view.removeChild(this.main_view.firstChild);
    }
  }

  _init_view(view_name) {
    let view_found = false;
    for(let view of this.views) {
      if (view.can_handle(view_name)) {
        view_found = true;
        view.init();
      }
    }
    if (!view_found) {
      throw `View with name ${view_name} not found from view manager`
    }
  }
}

