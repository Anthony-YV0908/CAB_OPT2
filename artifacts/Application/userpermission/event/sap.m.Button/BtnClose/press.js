if (oApp.getParent() && oApp.getParent().getParent() && oApp.getParent().getParent().close) {
    oApp.getParent().getParent().close();
} else {
    // Note, config must be a global variable, fetched from beforeDisplay event
    if (config.events.onChildBack) config.events.onChildBack();
}