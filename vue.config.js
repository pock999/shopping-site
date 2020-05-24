module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/shopping-site/'
    : '/',
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/shopping-site/'
    : '/',
}