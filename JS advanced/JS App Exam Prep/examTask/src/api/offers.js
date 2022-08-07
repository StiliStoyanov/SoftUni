import * as api from './api.js'


export async function getAllOffers() {
    return api.get('/data/offers?sortBy=_createdOn%20desc')
}

export async function create(data) {
    return api.post('/data/offers', data)
}
export async function getById(id) {
    return api.get('/data/offers/' + id)
}
export async function delOffer(id) {
    return api.del('/data/offers/' + id)
}

export async function updateOffer(id, offer) {
    return api.put('/data/offers/' + id, offer)
}