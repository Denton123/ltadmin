<template>
    <div class="inputSearch">
        <label :for="inputSearch.inputId">{{inputSearch.label}}：</label>
        <a-input :placeholder="inputSearch.placeholder" v-model="inputSearch.value" :id="inputSearch.inputId" class="inputSearch_inputSearch"/>
    </div>
</template>

<script>
export default {
    name: 'InputSearch',
    props: {
        inputSearch: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style lang="scss">
    .inputSearch_inputSearch{
        width: 200px;
    }
</style>
