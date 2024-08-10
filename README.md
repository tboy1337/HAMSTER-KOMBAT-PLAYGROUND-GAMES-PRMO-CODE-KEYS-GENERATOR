This script allows generating HamsterKombat coupon code for free using your machine. \
It doesn't use any proxies, it doesn't make any requests to external APIs. \
If you are afraid that you IP will get blocked you can simply use VPN. \
I personally haven't used VPN a single time and my account is not blocked.

## How To Get Node.js

I personally recommend installing it by using [github.com/tj/n](https://github.com/tj/n). \
This project provides one-line commands to install Node.js on your machine.

## How To Use

```shell
node hamster-kombat-playground-games-promo-keys-generator.js
```

## How To Setup

Update line with users you want to generate promo codes for:

```js
const users = ['User 1', 'User 2', 'User 3'];

// For example:

const users = ['Aaron', 'Alex'];
```

> These are NOT Telegram usernames. These are just random names to visually differentiate when you are generating keys for multiple people.

If you are generating keys only for yourself, you can leave only one user name like this:

```js
const users = ['Aaron'];
```

That's it.

## How Long It Takes

For one token it takes around 2 minutes. For 4 games and 4 tokens - 32 minutes.

## Support Author

If this gist helped you, consider helping me by giving a star to my main project: [github.com/thelang-io/the](https://github.com/thelang-io/the). In advance, thanks a lot!
