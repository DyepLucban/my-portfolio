import endpoints from './endpoint'
import axios from 'axios'

export default {

    async sendNewEmail(params) {
        try {
            return await axios.post( endpoints.email.send_email, params)
        } catch (error) {
            return error.response.data
        }
    },

}