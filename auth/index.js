const admin = require('firebase-admin');

const verify = async (token) => {
    try {
        let uid = await admin.auth().verifyIdToken(token)
        let user = await admin.auth().getUser(uid)
        return {
            ...user.toJSON(),
        }
    } catch (err) {
        console.error(err);
        throw { code: 401 }
    }

}
module.exports = verify



