import * as api from './api.js'

export async function getAllPosts() {
    return api.get('/data/posts?sortBy=_createdOn%20desc')
}
export async function create(data) {
    return api.post('/data/posts', data)
}
export async function getById(id) {
    return api.get('/data/posts/' + id)
}
export async function delPost(id) {
    return api.del('/data/posts/' + id)
}
export async function updatePost(id, post) {
    return api.put('/data/posts/' + id, post)
}
export async function getMyPosts(userId) {
    return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
  }