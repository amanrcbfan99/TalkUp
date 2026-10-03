const app = require(`../app`)
const controller = require(`../controller/user`)
app.get(`/`, controller.registerUser)