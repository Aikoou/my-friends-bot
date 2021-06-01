module.exports.friends = ["Rayana", "Adilet", "Aladin", "Aktan", "Billi"]
module.exports.informationOfFr = {
    rayana : ["name: Rayana", "age: 15", "hobby: Watching doramas and drawing", "phobia: Trypophobia"],
    adilet : ["name: Adilet", "age: 17", "hobby: Watching anime and walking", "phobia: Aviaphobia"],
    aladin : ["name: Aladin", "age: 16", "hobby: Watching sport matches and running in the morning", "phobia: Acrophobia"],
    aktan : ["name: Aktan", "age: 17", "hobby: Dancing and playing games", "phobia: Nyphobia and trypophobia"],
    billi : ["name: Billi", "age: 17", "hobby: Readind and taking a photo", "phobia: He does not have phobia"]
}

module.exports.nameOfFriend = (name) => {
    if (this.friends[0] == name) {
        return this.informationOfFr.rayana
    } else if (this.friends[1] == name) {
        return this.informationOfFr.adilet
    } else if (this.friends[2] == name) {
        return this.informationOfFr.aladin
    }  else if (this.friends[3] == name) {
        return this.informationOfFr.aktan
    }  else if (this.friends[4] == name){
        return this.informationOfFr.billi
    }
}