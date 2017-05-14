class ConverterView {

  constructor() {
    this.name = 'converter-view';
  }

  init() {
    let service = new CurrencyService();
    this.converter = new CurrencyConverter(service);
    service.init().then(()=> { 
      console.log("Service init");
    });

    this.toggle_buttons = new ToggleButtons(document.getElementById('currency-selector'), (selected) => {
      this._currency_selected(selected);
    });
    let convert_button = document.getElementById('convert-button');
    convert_button.addEventListener('click', (event) => { this._convert_pressed(); });
  }

  can_handle(view_name) {
    return this.name == view_name;
  }

  _currency_selected(selected) {
    console.log(selected);
  }

  _convert_pressed() {
    let amount_input = document.getElementById('currency-input');
    let converted_amount = this.converter.convert(this.toggle_buttons.currently_selected(), this.toggle_buttons.currently_not_selected(), parseFloat(amount_input.value));
    let result_input = document.getElementById('converted-currency');
    result_input.value = Number(converted_amount).toFixed(2);
  }

}
