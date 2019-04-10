export default {
    computed: {
        theads() {
            return this.models[this.modelIndex].theads
        },
        props() {
            return this.models[this.modelIndex].props
        },
        widths() {
            return this.models[this.modelIndex].widths
        },
        typeComponent() {
            return this.models[this.modelIndex].typeComponent
        },
        SearchComponent() {
            return this.models[this.modelIndex].SearchComponent
        },
        breadcrumb() {
            return this.models[this.modelIndex].tab
        },
        searchResultMsg() {
            return this.models[this.modelIndex].searchResultMsg
        },
        tableOperate() {
            return this.models[this.modelIndex].tableOperate
        },
        searchInput() {
            return this.models[this.modelIndex].searchInput
        },
        newComponent() {
            return this.models[this.modelIndex].newComponent
        },
        editComponent() {
            return this.models[this.modelIndex].editComponent
        },
        url() {
            return this.models[this.modelIndex].url
        },
        tag() {
            return this.models[this.modelIndex].tag
        },
        detail() {
            return this.models[this.modelIndex].detail 
        },
        hotelMatch() {
            return this.models[this.modelIndex].hotelMatch
        }
    },
}