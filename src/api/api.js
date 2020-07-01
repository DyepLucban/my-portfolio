import endpoints from './endpoint'
import axios from 'axios'

export default {

    async sendNewEmail(params) {
        return await axios.post( endpoints.email.send_email, params)
    },

}