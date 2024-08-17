# HamsterKombat Playground Promo Code Keys Generator

This script is way more advanced than other scripts out there

- allows generating HamsterKombat coupon code for free using your machine.
- acts as close as possible to real games with delays for game re-installations.
- it doesn't use any proxies, it doesn't make any requests to external APIs.

If you are afraid that your IP will get blocked you can simply use VPN or proxy.

## Important Notice

When new games are out I will need some time to test and update this gist. \
I focus on making this gist as close as possible to real games. \
Be patient. I Usually roll out update after 2PM UTC. \
If you want to use other people insecure scripts with just app token and promo id set - it's up to you. \
I’m using ios device and android emulator to test games and intercept requests.

> All comments baiting people to use your implementation will be deleted.

## Difference Between Real Games

First and the only difference is Unique Client Id. \
For every request I generate unique client id. \
For every request games re-use same client id. \
I do this to be able to generate many keys without waiting.

## How To Use It

### With Node.js

Copy `hamster-kombat-playground-games-promo-keys-generator.js` and run it with Node.js.

```shell
node hamster-kombat-playground-games-promo-keys-generator.js
```

### With Node.js One-Liner

```shell
node -e "$(curl -s https://gist.githubusercontent.com/delasy/96c5340fc5e0617ddc1ff4ddb458d968/raw/hamster-kombat-playground-games-promo-keys-generator.js)"
```

### With Python

This script is not available in Python :) \
This is JS script that meant to be run with Node.js

## How Long It Takes

For one token on average it takes 5 minutes (during weekends). \
For 6 games and 4 keys - 120 minutes.

## How I Get App Token and Promo Id

I run game on physical device, I actually play the game (so you don't need to). \
While doing this I intercept and inspect requests with Wireshark looking for clues.

## Node.js Version

I personally test on Node.js v20, though I'm pretty sure it will work on v18 too.

## Support Author

If this gist helped you, consider helping me by giving a star to my main project: \
[github.com/thelang-io/the](https://github.com/thelang-io/the) - a programming language I'm developing since 2018. \
In advance, thanks a lot!
