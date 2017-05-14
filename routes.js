
let vm = new ViewManager([new ConverterView()]);

page('/', () => vm.render('converter-view'));
page('/');

