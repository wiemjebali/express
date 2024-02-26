const condition = (req, res, next) => {
    const date = new Date()
    const j = date.getDay()
    const h = date.getHours()

    if(!((j >= 1) && (j<=5) && (h>=9) && (h<=17) )) {
        res.send("this website work from 9h to 17h")
    }
    next()

}

module.exports = condition