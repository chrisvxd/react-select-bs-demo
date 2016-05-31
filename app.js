//
// Vanilla JavaScript version
//

var options = [
  { value: 'costello', label: 'Elvis Costello' },
  { value: 'presley', label: 'Elvis Presley' }
];

var renderSelect = function (selected) {
  var selectElement = React.createElement(
    Select,
    {
      name: "form-field-name",
      value: (selected || {}).value,
      searchable: false,
      options: options,
      onChange: renderSelect,
      placeholder: "Select the Best Elvis"
    }
  );

  ReactDOM.render(selectElement, document.getElementById('emlak-select-1'));
}

renderSelect();
