import axios from 'axios'

export default function ( {params, store} ) {
    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        .then((response) => {
            store.commit('ADD', response.data.results)
        })
        .catch((e) => alert(e))
}