const linkJogos = document.getElementById("link-jogos");

/* Cada jogo precisa:

    - Nome
    - Caminho da imagem
    - Link do jogo

*/

const games = {
    0: {
        "name": "Rocket Goal",
        "image": "assets/imgs/games/rocket-goal.png",
        "link": "https://sites.google.com/site/populardoodlegames/rocket-goal"
    },
    1: {
        "name": "Snow Rider",
        "image": "assets/imgs/games/snow-rider.webp",
        "link": "https://learn-duck.firebaseapp.com/class/snow-rider-3d",
    },
    2: {
        "link": "https://sites.google.com/site/populardoodlegames/gym-simulator-online",
        "image": "assets/imgs/games/gym-simulator.png",
        "name": "Gym Simulator Online",
    },
    3: {
        "link": "https://sites.google.com/site/populardoodlegames/escape-tsunami",
        "image": "assets/imgs/games/escape-tsunami.png",
        "name": "Escape Tsunami",
    },
    4: {
        "link": "https://sites.google.com/site/populardoodlegames/dig-to-the-center-of-the-earth",
        "image": "assets/imgs/games/dig-to-the-center-of-the-earth.png",
        "name": "Dig to the Center of the Earth",
    },
    5: {
        "link": "https://emanoel-dev-jr.github.io/Spacecraft-Game/",
        "image": "assets/imgs/games/space-craft-game.png",
        "name": "Spacecraft Game",
    },
    6: {
        "link": "https://sites.google.com/site/populardoodlegames/obby-run-star",
        "image": "assets/imgs/games/obby-run-star.png",
        "name": "Obby Run Star",
    },
    7: {
        "link": "https://sites.google.com/site/populardoodlegames/car-training",
        "image": "assets/imgs/games/car-training.png",
        "name": "Car Training",
    },
}