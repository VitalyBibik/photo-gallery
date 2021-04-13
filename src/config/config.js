const getAlbums = 'https://jsonplaceholder.typicode.com/albums'
const getPhotosOnAlbum = id => `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
const getAlbumsOnAuthor = id => `https://jsonplaceholder.typicode.com/users?id=${id}`
const getAllUsers = 'https://jsonplaceholder.typicode.com/users'

const apiRequest = {
    getAllUsers,
    getAlbums,
    getPhotosOnAlbum,
    getAlbumsOnAuthor,
}

const config = {
    apiRequest
}

export default config
