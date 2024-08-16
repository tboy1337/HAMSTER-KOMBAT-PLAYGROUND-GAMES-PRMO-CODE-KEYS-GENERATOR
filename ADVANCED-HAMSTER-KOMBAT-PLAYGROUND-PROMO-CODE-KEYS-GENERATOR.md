# Advanced HamsterKombat Playground Prmo Code Keys Generator

This script allows generating HamsterKombat coupon code for free using your machine. \
It doesn't use any proxies, it doesn't make any requests to external APIs. \
If you are afraid that you IP will get blocked you can simply use VPN or proxy. \
I personally haven't used VPN a single time and my account is not blocked.

## How To Use

### With Browser Console

Just copy/paste script below and hit Enter.
> If you get a warning that you can't paste unknown code type `allow pasting`.

### With Node.js

```shell
node hamster-kombat-playground-games-promo-keys-generator.js
```

### With Python

It's not available in Python :) \
This is JS script that meant to be run in browser/node.js

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

For one token on average it takes 2 minutes 20 seconds. For 6 games and 4 keys - 56 minutes.

## Support Author

If this gist helped you, consider helping me by giving a star to my main project: \
[github.com/thelang-io/the](https://github.com/thelang-io/the) - a programming language I'm developing since 2018. \
In advance, thanks a lot!
