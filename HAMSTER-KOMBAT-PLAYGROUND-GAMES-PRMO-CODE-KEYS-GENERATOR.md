# HamsterKombat Playground Promo Code Keys Generator

This script is way more advanced than other scripts out there.

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

First and the only difference is Unique Client ID. \
For every request I generate unique client id. \
For every request games re-use same client id. \
I do this to be able to generate many keys without waiting.

## Difference Between Other Generators

1. Sends exactly the same headers as real games.
2. Sends actual events extracted from the games.
3. Uses randomized delays for events.
4. Simulates app reinstall time.

## How To Use It

Video tutorial: https://youtu.be/D0z52SyqNqI

### With Node.js One-Liner (Linux, macOS)

```shell
node -e "$(curl -s https://gist.githubusercontent.com/delasy/96c5340fc5e0617ddc1ff4ddb458d968/raw/hamster-kombat-playground-games-promo-keys-generator.js)"
```

With Arguments:

```shell
node -e "..." -- --timing-strategy=fastest -k=1
```

### With Node.js One-Liner (Windows)

```powershell
node -e (Invoke-RestMethod -Uri 'https://gist.githubusercontent.com/delasy/96c5340fc5e0617ddc1ff4ddb458d968/raw/hamster-kombat-playground-games-promo-keys-generator.js')
```

### With Node.js (Windows, Linux, macOS)

Copy `hamster-kombat-playground-games-promo-keys-generator.js` and run it with Node.js.

```shell
node hamster-kombat-playground-games-promo-keys-generator.js
```

## Script Arguments

### timing-strategy

`--timing-strategy` - What timing strategy to use. Realistic - takes longer but uses delays of real users, fastest - takes faster but has a great risk of your keys being removed during Airdrop. \
&emsp;Values: `realistice`, `fastest`. \
&emsp;Default: `realistic`. \
&emsp;Example: `--timing-strategy=fastest`.

### client-strategy

`--client-strategy` - What client strategy to use. Unique - generates unique client id for every new key, keep - generates only one client id per game and re-uses it for every key. \
&emsp;Values: `unique`, `keep`. \
&emsp;Default: `unique`. \
&emsp;Example: `--client-strategy=keep`.

> NOTE: After each key you have 5 minutes delay to redeem the code inside HamsterKombat, if you fail to do so it will generate same key over and over again.

### device

`--device`, `-d` - Force script to use only one specific device. \
&emsp;Values: `android`, `ios`. \
&emsp;Default: random device selected for each key. \
&emsp;Example: `--device=ios`, `-d=android`.

### exclude

`--exclude`, `-e` - Game names to exclude. \
&emsp;Default: empty string. \
&emsp;Example: `--exclude="BIKE, MERGE"`, `-e=BIKE`.

### keys

`--keys`, `-k` - Number of keys to generate for each game. You can provide number of keys for specific games: `BIKE:1` - this will generate 1 key for `BIKE` game and 0 keys for all other games. You can add a fallback `4,BIKE:1` - this will generate 1 key for `BIKE` game and 4 keys for all other games. \
&emsp;Default: `4,FLUF:8`. \
&emsp;Example: `--keys=MERGE:3`, `--keys="4,BIKE:1,TRIM:2"`, `--keys=4`, `-k=1`.

### only

`--only`, `-o` - Script will process only names you provided with this option. This option has higher precedence and allows running even expired games. Option's games order is taken into account when generating keys. \
&emsp;Default: all games. \
&emsp;Example: `--only="BIKE, MERGE"`, `-o=BIKE`.

### debug

`--debug` - Whether to show debug data. \
&emsp;Default: `false`. \
&emsp;Example: `--debug=true`.

### With Python (N/A)

This script is not available in Python :) \
This is JS script that meant to be run with Node.js

## How Long It Takes For One Key

**Fastest Strategy**

STONE ~ 2m \
FLUF ~ 2m \
TILE ~ 2m \
ZOO ~ 2m \
GANGS ~ 9m \
CAFE ~ 4m \
TRIM ~ 3m \
RACE ~ 2m \
POLY ~ 1m \
TWERK ~ 4m \
MERGE ~ 3m \
CLONE ~ 11m \
CUBE ~ 1m \
TRAIN ~ 2m \
BIKE ~ 5m

**Realistic Strategy**

STONE ~ 8m \
FLUF ~ 8m \
TILE ~ 10m \
ZOO ~ 11m \
GANGS ~ 20m \
CAFE ~ 23m \
TRIM ~ 8m \
RACE ~ 7m \
POLY ~ 5m \
TWERK ~ 7m \
MERGE ~ 8m \
CLONE ~ 15m \
CUBE ~ 9m \
TRAIN ~ 12m \
BIKE ~ 13m

> During weekends numbers increase to almost 2x.

## How I Get App Token and Promo ID

I run games on both physical device and emulator. I actually play all games (so you don't have to). \
While doing this I intercept and inspect requests with Burp NoPE looking for clues.

## Node.js Version

I personally test on Node.js v18 and v20. \
On version 16 global fetch is unavailable so this version and below are not supported.

## Support Author

If this gist helped you, consider helping me by giving a star to my main project: \
[github.com/thelang-io/the](https://github.com/thelang-io/the) - a programming language I'm developing since 2018. \
In advance, thanks a lot!

## Changelog

### 1.9.1

1. Updated realistic timings for STONE game.
2. Send requests only as android device for STONE game.

### 1.9.0

1. Added STONE game (android only).
2. Added second user-agent variant for android MERGE game.
3. Fixed bug with setting device option.
4. Ability to specify custom number of keys with new keys syntax: `--keys="4,FLUF:8"`.
5. Option `--only` now allows to run even expired games.
6. Option `--only` games order is taken into account when generating keys.

### 1.8.2

1. Enabled back TILE game.
2. Re-tested and adjusted timings for TILE game.
3. Updated FLUF realistic timings, I was able to get keys faster by watching ad that speeds up the game.

### 1.8.1

1. Fully finalized TILE game.
2. Changed realistic timing for FLUF game.
3. Disabled getting keys for TILE game as it's not in playground anymore.

### 1.8.0

1. Added Game Promo API versioning.
2. Introduced auth functionality for different vendors starting with `cedar.games` for iOS.
3. Added FLUF game.
4. Added half-finished TILE game (iOS only).

> NOTE: There's no way to generate 8 keys for FLUF right now, you can generate another 4 keys with `--only=FLUF`

### 1.7.1

1. Added expiration for CAFE and GANGS.

### 1.7.0

1. Updated all games to latest version.
2. Added JS template function `_` for more compact design.

### 1.6.1

1. Added correct ios headers/client id generation for GANGS and CAFE game.
2. Adjusted realistic timing for GANGS game.

### 1.6.0

Added `--client-strategy=keep` option to keep same client id when generating multiple keys.

> When the key was generated you have 5 minutes to enter it inside HamsterKombat before it will start generating next key.
