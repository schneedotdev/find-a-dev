const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 5000
const DB_STRING = process.env.DB_STRING

const { MongoClient } = require('mongodb')
let db;

MongoClient.connect(DB_STRING, { useUnifiedTopology: true })
    .then(client => {
        console.log('connected to db')
        db = client.db('find-a-dev')
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const devs = await db.collection('devs').find().toArray()
        res.render('index.ejs', { devs })
    } catch (err) {
        console.error(err)
    }
});

app.get('/findDevs', async (req, res) => {
    try {
        const devs = await db.collection('devs').find({ skills: req.query.tag }).toArray()
        res.render('index.ejs', { devs })
    } catch (err) {
        console.error(err)
    }
})

app.get('/developerForm', (req, res) => {
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

            let { github, twitter, linkedin } = req.body

            // cleansing strings
            github.replace('http://github.com/', '')
            github.replace('https://github.com/', '')
            github.replace('github.com/', '')
            github.replace('@', '')

            twitter.replace('http://twitter.com/', '')
            twitter.replace('https://twitter.com/', '')
            twitter.replace('twitter.com/', '')
            twitter.replace('@', '')

            linkedin.replace('http://linkedin.com/in/', '')
            linkedin.replace('https://linkedin.com/in/', '')
            linkedin.replace('linkedin.com/in/', '')
            linkedin.replace('@', '')

            db.collection('devs').insertOne({
                name: req.body.name.trim(),
                avatar: `https://github.com/${github}.png`,
                skills: skills,
                expertise: req.body.expertise,
                twitter: `https://twitter.com/${twitter}`,
                linkedin: `https://linkedin.com/in/${linkedin}`,
                github: `https://github.com/${github}`,
            })
        }
        res.redirect('/')
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))