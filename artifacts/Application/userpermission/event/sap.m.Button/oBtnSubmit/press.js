

if (oApp.getParent() && oApp.getParent().getParent() && oApp.getParent().getParent().close) {
    onSubmit();
    oApp.getParent().getParent().close();
} else {
    // Note, config must be a global variable, fetched from beforeDisplay event
    if (config.events.onChildBack) {
        // onSubmit(); // Call the function to save the data
        config.events.onChildBack();
    }
}
