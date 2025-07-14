function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == 'Network') {
        g_form.setValue('priority', '1');
    }
}