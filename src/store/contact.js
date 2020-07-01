import Api from '../api/api'
import { getField, updateField } from 'vuex-map-fields'

const state = {

}

const getters = {
    getField,
}

const actions = {
    async sendNewEmail({}, params) {
        return await Api.sendNewEmail(params)
    },
}

const mutations = {
    updateField,
}

export const contact = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}