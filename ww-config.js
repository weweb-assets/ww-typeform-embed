export default {
    options: {
        sizable: true,
    },
    editor: {
        label: {
            fr: 'Typeform',
            en: 'Typeform',
        },
    },
    properties: {
        formId: {
            label: { en: 'Typeform ID', fr: 'Typeform ID' },
            type: 'Text',
            section: 'settings',
            bindable: true,
            options: {
                placeholder: 'form-id',
            },
            defaultValue: '',
        },
    },
};
