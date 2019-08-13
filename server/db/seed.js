const axios = require('axios')
const championModel = require('../models/Champion')

const url = {
    v: 'https://ddragon.leagueoflegends.com/realms/na.json',
    head: 'http://ddragon.leagueoflegends.com/cdn/',
    tail: '/data/en_US/champion.json',
    icon: 'http://ddragon.leagueoflegends.com/cdn/9.16.1/img/champion/',
    screen: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/',
    full: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'
}

// Get latest game version
axios.get(url.v)

    .then(r => url.body = r.data.n.champion)

    // Get champion data
    .then(r => {
        axios.get(url.head + url.body + url.tail)

            .then(r => { return r.data.data })
            .then(champions => {
                let data = []
                let i = 0
                Object.keys(champions).forEach(c => {
                    data[i] = {
                        name: champions[c].name,
                        title: champions[c].title,
                        blurb: champions[c].blurb,
                        icon: url.icon + champions[c].image.full,
                        screen: url.screen + c + '_0.jpg',
                        full: url.full + c + '_0.jpg',
                        attack: champions[c].info.attack,
                        defense: champions[c].info.defense,
                        magic:  champions[c].info.magic,
                        tags: champions[c].tags
                    }
                    i++
                })
                return data
            })

            .then(champions => championModel.deleteMany()
                .then(() => championModel.create(champions))
                .then(r => console.log(r))
            )
    })