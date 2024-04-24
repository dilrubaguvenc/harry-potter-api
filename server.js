const express = require('express')
const app = express()
const PORT = 8000

const characters ={
    'harry potter': {
        'birthName': 'Harry James Potter',
        'alsoKnownAs': 'The Boy Who Lived, The Chosen One',
        'bloodStatus': 'Half-Blood',
        'petName': 'Hedwig',
        'wand': '11 inch, Holly, phoenix feather',
        'patronus': 'Stag',
        'boggart': 'Dementor',
        'hogwartsHouse': 'Gryffindor',
        'jobOccupation': 'Head of the Auror Department (former),'
    },
    'ronald weasley':{
        'birthName': 'Ronald Bilius Weasley',
        'alsoKnownAs': 'Ron, Won-Won, Weasley',
        'bloodStatus': 'Pure-blood',
        'petName': 'Scabbers',
        'wand': '12 inches, Ash, unicorn tail hair (formerly, broken) 14 inch Willow, unicorn tail hair',
        'patronus': 'Jack Russell Terrier',
        'boggart': 'Giant spider',
        'hogwartsHouse': 'Gryffindor',
        'jobOccupation': 'Auror (former), Weasleys\' Wizard Wheezes',
    },
    'hermione granger': {
        'birthName': 'Hermione Jean Granger',
        'bloodStatus': 'Muggle-born',
        'petName': 'Crookshanks',
        'wand': '10 3/4 inches, vine and dragon heartstring',
        'patronus': 'Otter',
        'boggart': 'Professor McGongall telling her that she failed her exams',
        'hogwartsHouse': 'Gryffindor',
        'jobOccupation': 'Department of Magical Law Enforcement'
    },
    'draco malfoy':{
        'birthName': 'Draco Lucius Malfoy',
        'bloodStatus': 'Pure-blood',
        'petName': 'Snitch',
        'wand': '10 inch, Hawthorn, unicorn hair (formerly), 15 inches, Elder, Thestral tail hair (never used)',
        'patronus': 'none',
        'boggart': 'Lord Voldemort',
        'hogwartsHouse': 'Slytherin',
        'jobOccupation': 'independently wealthy, inhabits Malfoy Manor with wife and son'
    },
    'severus snape':{
        'birthName': 'Severus Snape',
        'alsoKnownAs': 'Half-Blood Prince',
        'bloodStatus': 'Half-blood',
        'wand': 'Romanian ridgeback heartstring, Kelpie heartstring and Phoenix feather',
        'patronus': 'Doe',
        'boggart': 'Lord Voldemort',
        'hogwartsHouse': 'Slytherin',
        'jobOccupation': 'Potions Master at Hogwarts (1981-1996), Head of Slytherin House (1981-1997), Professor of Defense Against the Dark Arts (1996-1997), Headmaster of Hogwarts (1997-1998)'

    },
    'albus dumbledore':{
        'birthName': 'Albus Percival Wulfric Brian Dumbledore',
        'alsoKnownAs': 'Headmaster',
        'bloodStatus': 'Half-blood',
        'wand': '15 inch, Elder, Thestral tail hair core',
        'patronus': 'Phoenix',
        'boggart': 'The corpse of his sister, Ariana',
        'hogwartsHouse': 'Gryffindor',
        'jobOccupation': 'Professor of Defence Against the Dark Arts at Hogwarts (1910s), Head of Transfiguration department (? - pre 1955), Columnist for Transfiguration Today (1926 - ?),  Supreme Mugwump of the International Confederation of Wizards (? - 1995), Headmaster of Hogwarts (pre 1971 - 1997)'

    },
    'sirius black': {
        'birthName': 'Sirius Black III',
        'alsoKnownAs': 'Padfoot',
        'bloodStatus': 'Pure-blood',
        'wand': 'unknown wood, core of dragon heartstring',
        'patronus': 'black German Shepard',
        'boggart': 'Lord Voldemort',
        'animagus': 'Black dog (unregistered)',
        'hogwartsHouse': 'Gryffindor',
        'jobOccupation': 'Order of the Phoenix member'
    },
    'lord voldemort': {
        'birthName': 'Tom Marvolo Riddle',
        'alsoKnownAs': 'You-Know-Who, He-Who-Must-Not-Be-Named, Heir of Slytherin, The Dark Lord',
        'bloodStatus': 'Half-blood',
        'wand': '13 1/2 inches, Yew, Phoenix feather core. Elm, dragon heart-string (temporary) 15 inch Elder, Thestral tail hair (temporary, never mastered)',
        'patronus': 'none',
        'boggart': 'His own corpse',
        'hogwartsHouse': 'Slytherin',
        'jobOccupation': 'Shop assistant at Borgin and Burkes (formerly)'
    },
    'unknown': {
        'name': 'unknown character :( please try again'
    }
}
app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const characterName = request.params.name.toLowerCase()
    if(characters[characterName]){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
})
    

app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}! Betta go catch it!`)
})




























// const express = require('express')
// const app = express()
// const PORT = 8000

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })