const games = [
    {
        title: 'Final Fantasy VII Remake',
        release: '2020',
        studio: 'Square Enix'
    },
    {
        title: 'Final Fantasy VII Rebirth',
        release: '2024',
        studio: 'Square Enix'
    },
    {
        title: 'Baldur\'s Gate 3',
        release: '2023',
        studio: 'Larian Studios'
    },
    {
        title: 'Hades',
        release: '2019',
        studio: 'Supergiant'
    },
    {
        title: 'Zelda Breath of the Wild',
        release: '2017',
        studio: 'Nintendo'
    },
    {
        title: 'Zelda Tears of the Kingdom',
        release: '2023',
        studio: 'Nintendo'
    },
    {
        title: 'Kingdom Hearts III',
        release: '2020',
        studio: 'Square Enix'
    },
    {
        title: 'Horizon Zero Dawn',
        release: '2017',
        studio: 'Guerilla'
    }
]

// 1. Use an array method to print out all the release dates of each game.
// const videoGames = games.map(game => game.release);
// console.log(videoGames);

// 2. Use an array method to print out all the titles of each game.
// const videoGames = games.map(game => game.title);
// console.log(videoGames);

// 3. Use an array method to print out all the studios of each game.
// const videoGames = games.map(game => game.studio);
// console.log(videoGames);

// 4. Use an array method to sort each game by title.
// const sortedTitle = games.map(game => game.title).sort();
// console.log(sortedTitle);

// 5. Use an array method to sort each game by release date.
// const sortedRelease = games.map(game => game.release).sort()
// console.log(sortedRelease);

// 6. Use an array method to figure out if every game was released in 2020.
// const gameRelease = games.every(game => game.release === 2020);
// console.log(gameRelease);

// 7. Use an array method to figure out if every game title contains "the".
// The below code explained: \bthe\b ensures "the" is matched as a whole word, while 'i' makes the case match sensitive, and .test() checks whether the given string matches the pattern in the regex.
// const gameTitle = games.every(game => /\bthe\b/i.test(game.title));
// console.log(gameTitle);

// 8. Use an array method to figure out if every game studio is "Square Enix".
// const gameStudio = games.every(game => game.studio === "Square Enix");
// console.log(gameStudio);

// 9. Use an array method to figure out if at least one game was released in 2015.
// const gameReleaseYear2015 = games.some(game => game.release === '2015');
// console.log(gameReleaseYear2015);

// 10. Use an array method to figure out if at least one game was released in 2017.
// const gameReleaseYear2017 = games.some(game => game.release === '2017');
// console.log(gameReleaseYear2017);