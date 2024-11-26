// Assuming you have an `sap.m.Input` component with the ID "inLoginPassword"
var inputField = sap.ui.getCore().byId("inLoginPassword");

// Attach the valueHelpRequest event handler
inputField.attachValueHelpRequest(function(event) {
  // Toggle the password visibility
  var passwordField = event.getSource(); // Get the source of the event (the input field)
  if (passwordField.getType() === "Password") {
        passwordField.setType("Text"); // Change to text to show password
        inputField.setValueHelpIconSrc("sap-icon://fa-solid/eye"); // Change icon to 'eye-slash'
      } else {
        passwordField.setType("Password"); // Change back to password to hide password
        inputField.setValueHelpIconSrc("sap-icon://fa-solid/eye-slash");// Change icon to 'eye'
      }
});

