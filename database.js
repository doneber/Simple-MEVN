import mongoose from 'mongoose'
const urlDB = 'mongodb://localhost:27017/MEVN'
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(urlDB, options)
    .then(
        () => { console.log(`Conectado a la DB ${urlDB}`) },
        err => {console.log }
    )