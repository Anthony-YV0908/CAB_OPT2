// // List Get Selected Row
// // Replace yourField with FieldName
const context = oEvent.oSource.getBindingContext();


// // Get Single Field
const value = context.getProperty("Table");

// Get Entire Model
const data = context.getObject();


console.log('data' , data)

App.to(EditPage)