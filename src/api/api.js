import axios from 'axios'

export const cardsAPI = {
    getUsersData() {
        return axios.get(`http://demo.sibers.com/users`)
            .then(res => res.data)
    }
}