import express from "express"
const app = express()

const PORT = 4000

const handleListening = () => {
    console.log(`Listening on: http:://localhost:${PORT}`);
}
const handleHome = (req, res) => res.send("Hello from my ass")
const handleProfile = (req, res) => res.send("You are on my profile")
const betweenHome = (req, res, next) => {
    console.log("I'm between")
    next()
}

app.use(betweenHome)

app.get('/', (req, res) => res.send('Hello World:)'))
app.get('/profile', handleProfile)

app.listen(PORT, handleListening)