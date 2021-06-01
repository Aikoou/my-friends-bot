const {Markup} = require("telegraf")
module.exports.startKb = () => 
    Markup
        .keyboard([
            ["Hello", "How are you?", "All friends"], 
            ["Who should I call?", "Choose name"]
        ])
        .resize()
module.exports.chooseNameKb = () => 
    Markup
        .keyboard([
            ["Rayana","Adilet", "Aladin"],
            [ "Aktan", "Billi", "Go back"]
        ])
        .resize()

        