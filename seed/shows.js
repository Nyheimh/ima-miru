const db = require('../db/connection')
const Show = require('../models/show')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const shows = 
    [
        {
            "title": "Boys Over Flowers",
            "duration": "1996-1997",
            "plot": "Makino Tsukushi: a girl who comes from a poor family just wants to get through her 2 last years at Eitoku Gakuen, quietly. But once she makes herself known by standing up for her friend to the F4, the 4 most popular, powerful and rich boys at the school.",
            "imgURL": "https://i.pinimg.com/originals/9e/c4/25/9ec425ae13b13c398936765251e27766.jpg"
        },
        {
            "title": "Hunter x Hunter",
            "duration": "2011-2014",
            "plot": "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger.",
            "imgURL": "https://m.media-amazon.com/images/I/51wIwhIO6JL._AC_.jpg"
        },
        {
            "title": "Dragon Ball Z",
            "duration": "1996-2003",
            "plot": "Dragon Ball Z continues the adventures of Son Goku, who, along with his companions, defend the Earth",
            "imgURL": "https://i.pinimg.com/originals/31/7f/fd/317ffdfd07542eb695117161b1c753c9.jpg"
        },
        {
            "title": "Naruto",
            "duration": "2007-2017",
            "plot": "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
            "imgURL": "https://cdn11.bigcommerce.com/s-b72t4x/images/stencil/1280x1280/products/11169/20874/24_1075_Naruto_Group__97803.1415650378.jpg?c=2"
        }    
    ]
    await Show.insertMany(shows)
    console.log("Created shows!")
}
const run = async () => {
    await main()
    db.close()
}

run()