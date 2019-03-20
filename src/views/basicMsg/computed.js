export default {
    computed: {
        theads () {
            return this.models[this.modelIndex].theads
        },
        props () {
            return this.models[this.modelIndex].props
        },
        widths () {
            return this.models[this.modelIndex].widths
        },
        typeComponent () {
            return this.models[this.modelIndex].typeComponent
        },
        SearchComponent () {
            return this.models[this.modelIndex].SearchComponent
        }
    },
}