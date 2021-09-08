<template>
    <div class="ww-typeform-embed"></div>
</template>

<script>
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

export default {
    wwDefaultContent: {
        formId: '',
    },
    props: {
        content: { type: Object, required: true },
    },
    emits: ['update:content:effect', 'update:content'],
    data() {
        return {
            mounted: false,
        };
    },
    computed: {},
    watch: {
        'content.formId'() {
            this.createForm();
        },
    },
    methods: {
        createForm() {
            if (!window.__WW_IS_PRERENDER__ && this.mounted && this.content.formId) {
                createWidget(this.content.formId, { container: this.$el });
            }
        },
    },
    mounted() {
        this.mounted = true;

        this.createForm();
    },
};
</script>
