export async function ensureAuth(req, res, next) {
    if(req.isAuthenticated()) {
        return next()
    }
    res.reditrect(process.env.CLIENT_BASE_URL +'/login')
}