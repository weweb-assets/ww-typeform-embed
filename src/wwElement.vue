<template>
    <div class="ww-typeform-embed" :class="{ 'editing': isEditing }"></div>
</template>

<script>
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ['update:content:effect', 'update:content'],
    data() {
        return {
            mounted: false,
        };
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
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

<style scoped lang="scss">
.ww-typeform-embed {
    position: relative;
    &.editing::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
    }
}
</style>
