(function executeRule(current, previous, gs) {
    if (previous.state == 'Closed') {
        gs.addErrorMessage('Closed tickets cannot be modified.');
        current.setAbortAction(true);
    }
})();