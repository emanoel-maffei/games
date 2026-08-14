const games = {
    0: {
        "link": "https://sites.google.com/site/populardoodlegames/rocket-goal",
        "image": "assets/imgs/games/rocket-goal.png",
        "name": "Rocket Goal",
    },
    1: {
        "link": "https://learn-duck.firebaseapp.com/class/snow-rider-3d",
        "image": "assets/imgs/games/snow-rider.webp",
        "name": "Snow Rider",
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
    8: {
        "link": "https://1v1lol-free.github.io/",
        "image": "assets/imgs/games/1v1-lol.jpeg",
        "name": "1v1.LOL",
    },
    9: {
        "link": "https://learn-duck.firebaseapp.com/class/obby-but-youre-on-a-bike",
        "image": "assets/imgs/games/obby-but-youre-on-a-bike.jpg",
        "name": "Obby But Youre On A Bike",
    },
    10: {
        "link": "https://learn-duck.firebaseapp.com/class/super-liquid-soccer",
        "image": "assets/imgs/games/super-liquid-soccer.jpg",
        "name": "Super Liquid Soccer",
    },
    11: {
        "link": "https://learn-duck.firebaseapp.com/class/granny",
        "image": "assets/imgs/games/granny.webp",
        "name": "Granny",
    },
    12: {
        "link": "https://sites.google.com/site/populardoodlegames/kart-bros",
        "image": "assets/imgs/games/kart-bros.png",
        "name": "Kart Bros",
    },
    13: {
        "link": "https://minecraft152.bitbucket.io/go/minecraft-1.5.2/",
        "image": "assets/imgs/games/minecraft.jpeg",
        "name": "Minecraft 1.5.2",
    },
    14: {
        "link": "https://1v1lol-free.github.io/class/lesson-329.html",
        "image": "assets/imgs/games/level-devil.webp",
        "name": "Level Devil",
    },
    15: {
        "link": "https://1v1lol-free.github.io/class/lesson-101.html",
        "image": "assets/imgs/games/wold-cup.jpeg",
        "name": "World Cup",
    },
    16: {
        "link": "https://1v1lol-free.github.io/class/lesson-31.html",
        "image": "assets/imgs/games/tunnel-rush.png",
        "name": "Tunnel Rush",
    },
    17: {
        "link": "https://1v1lol-free.github.io/class/lesson-409.html",
        "image": "assets/imgs/games/last-warriors.png",
        "name": "Last Warriors",
    },
    18: {
        "link": "https://1v1lol-free.github.io/class/lesson-407.html",
        "image": "assets/imgs/games/subway-surfers.png",
        "name": "Subway Surfers",
    },
    19: {
        "link": "https://1v1lol-free.github.io/class/lesson-420.html",
        "image": "assets/imgs/games/poly-track.png",
        "name": "Poly Track",
    },
    20: {
        "link": "https://kodub.itch.io/polytrack",
        "image": "assets/imgs/games/poly-track-2.png",
        "name": "Poly Track",
    },
    21: {
        "link": "https://sites.google.com/site/populardoodlegames/dig-out-of-prison?authuser=0",
        "image": "assets/imgs/games/dig-out-of-prison.png",
        "name": "Dig out of Prison",
    },
};

const gameList = document.querySelector("#link-jogos > ul");

console.log(`\n
     ██╗ █████╗  ██████╗  █████╗  ██████╗██╗
     ██║██╔══██╗██╔════╝ ██╔══██╗██╔════╝╚═╝
     ██║██║  ██║██║  ██╗ ██║  ██║╚█████╗    
██╗  ██║██║  ██║██║  ╚██╗██║  ██║ ╚═══██╗   
╚█████╔╝╚█████╔╝╚██████╔╝╚█████╔╝██████╔╝██╗
 ╚════╝  ╚════╝  ╚═════╝  ╚════╝ ╚═════╝ ╚═╝\n
`);

for (let gameIndex in games) {
    console.log(`\n${+gameIndex + 1}:
        \n\tLink . . . . . : ${games[gameIndex].link}
        \n\tCaminho Imagem : ${games[gameIndex].image}
        \n\tNome . . . . . : ${games[gameIndex].name}\n\n`);

    const li = document.createElement("li");
    
    const a = document.createElement("a");
    a.classList.add("button-link");
    a.href = games[gameIndex].link;
    a.target = "_blank";
    li.appendChild(a);

    const div = document.createElement("div");
    div.classList.add("tilted-body");
    a.appendChild(div);
    
    const img = document.createElement("img");
    img.src = games[gameIndex].image;
    img.alt = `Imagem do ${games[gameIndex].name}`;
    a.appendChild(img);
    
    const p = document.createElement("p");
    p.textContent = games[gameIndex].name;
    a.appendChild(p);
    
    gameList.appendChild(li);
}