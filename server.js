const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 5000
const DB_CONNECT = process.env.DB_CONNECT

const { MongoClient } = require('mongodb')
let db;

MongoClient.connect(DB_CONNECT, { useUnifiedTopology: true })
    .then(client => {
        console.log('connected to db')
        db = client.db('find-a-dev')
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    db.collection('devs').find().toArray()
        .then(devs => {
            res.render('index.ejs', { devs })
        })
        .catch(err => console.error(err))
});

app.get('/developerForm', (req, res) => {
    console.log('new dev')
    res.render('addnew.ejs')
})

app.post('/addDeveloper', async (req, res) => {
    console.log(req.body)

    try {
        const unique = await db.collection('devs').find({ name: req.body.name }).toArray()
        if (!unique.length) {
            console.log('unique dev being added to db')

            let skills = ['HTML', 'CSS', 'JavaScript', 'Node', 'MongoDB', 'EJS', 'Handlebars', 'React']

            skills = Object.keys(req.body).filter(key => skills.includes(key))

            if (!skills.length) {
                // default to html/css/js until future implementation
                skills = ['HTML', 'CSS', 'JavaScript']
            }

            db.collection('devs').insertOne({
                name: req.body.name.trim(),
                avatar: `https://github.com/${req.body.github}.png`,
                skills: skills,
                expertise: req.body.expertise,
                twitter: `https://twitter.com/${req.body.twitter}`,
                linkedin: `https://linkedin.com/in/${req.body.linkedin}`,
                github: `https://github.com/${req.body.github}`,
            })
        }
        res.redirect('/')
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))