/**
 * HamsterKombat Playground Games Promo Code Keys Generator
 * @author Aaron Delasy
 * @version 1.0.0
 */

const DEBUG = parseArg(['debug'], (it) => (['true', 'false', ''].includes(it) ? it !== 'false' : null), false);
const TIMING_STRATEGY = parseArg('timing-strategy', (it) => (['fastest', 'realistic'].includes(it) ? it : null), 'realistic');
const SERVER_ERROR_COOLDOWN = 300_000;
const SERVER_ERROR_RETRIES = 3;
const WITH_REINSTALL_TIME = true;
const DEVICE = parseArg(['d', 'device'], (it) => (['android', 'ios'].includes(it) ? it : null));
const EXCLUDE = parseArg(['e', 'exclude'], (it) => it.split(',').map((it2) => it2.trim()).filter((it2) => it2 !== ''), []);
const KEYS = parseArg(['k', 'keys'], (it) => Number.parseInt(it, 10) || null, 4);

//
// Games
//

const GAMES = {
  POLY: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71');
    setup('promo-id', '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71');
    setup('unity-version', '2021.3.39f1');

    if (origin === 'ios') {
      setup('user-agent', 'Polysphere/147 CFNetwork/1498.700.2 Darwin/23.6.0');
    } else {
      setup('user-agent', 'UnityPlayer/2021.3.39f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
    }

    await login({ clientOrigin: origin, clientId: id('uuid'), clientVersion: '1.15.2' });

    while (!instance.hasCode) {
      await delay(TIMING_STRATEGY === 'realistic' ? 10_000 : 3_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'test' });
    }

    await collect();
  },
  TWERK: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', '61308365-9d16-4040-8bb0-2f4a4c69074c');
    setup('promo-id', '61308365-9d16-4040-8bb0-2f4a4c69074c');
    setup('unity-version', '2021.3.15f1');

    if (origin === 'ios') {
      setup('user-agent', 'Twerk/485 CFNetwork/1498.700.2 Darwin/23.6.0');
    } else {
      setup('user-agent', 'UnityPlayer/2021.3.15f1 (UnityWebRequest/1.0, libcurl/7.84.0-DEV)');
    }

    await login({ clientOrigin: origin, clientId: id(origin === 'ios' ? 'ts7d' : 'ts19d') });

    while (!instance.hasCode) {
      await delay(TIMING_STRATEGY === 'realistic' ? 30_000 : 20_000);
      await event({ eventId: 'StartLevel', eventOrigin: 'undefined' });
    }

    await collect();
  },
  MERGE: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', '8d1cc2ad-e097-4b86-90ef-7a27e19fb833');
    setup('promo-id', 'dc128d28-c45b-411c-98ff-ac7726fbaea4');

    if (origin === 'ios') {
      setup('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148');
    } else {
      setup('user-agent', 'Mozilla/5.0 (Linux; Android 12; SM-S9110 Build/W528JS; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.74 Mobile Safari/537.36');
    }

    await login({ clientOrigin: origin, clientId: id(origin === 'ios' ? 'ts7d' : 'ts19d') });

    while (!instance.hasCode) {
      await delay(TIMING_STRATEGY === 'realistic' ? 60_000 : 20_000);
      await event({ eventOrigin: 'undefined', eventId: id('uuid'), eventType: 'spend-energy' });
    }

    await collect();
  },
  CLONE: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', '74ee0b5b-775e-4bee-974f-63e7f4d5bacb');
    setup('promo-id', 'fe693b26-b342-4159-8808-15e3ff7f8767');
    setup('unity-version', '2022.3.25f1');

    if (origin === 'ios') {
      setup('user-agent', 'Myclonearmy/12 CFNetwork/1498.700.2 Darwin/23.6.0');
    } else {
      setup('user-agent', 'UnityPlayer/2022.3.25f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
    }

    await login({ clientId: id(origin === 'ios' ? 'uuid-upper' : 'rand32'), clientOrigin: origin });

    for (let i = 0; !instance.hasCode; i++) {
      await delay(TIMING_STRATEGY === 'realistic' ? 150_000 : 120_000);
      await event({ eventId: id('uuid'), eventType: 'MiniQuest', eventOrigin: 'undefined' });
    }

    await collect();
  },
  CUBE: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', 'd1690a07-3780-4068-810f-9b5bbf2931b2');
    setup('promo-id', 'b4170868-cef0-424f-8eb9-be0622e8e8e3');
    setup('unity-version', '2022.3.20f1');

    if (origin === 'ios') {
      setup('user-agent', 'ChainCube/3 CFNetwork/1498.700.2 Darwin/23.6.0');
    } else {
      setup('user-agent', 'UnityPlayer/2022.3.20f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
    }

    await login({ clientOrigin: origin, clientId: id('uuid'), clientVersion: '1.78.33' });

    while (!instance.hasCode) {
      await delay(TIMING_STRATEGY === 'realistic' ? 150_000 : 20_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'cube_sent' });
    }

    await collect();
  },
  TRAIN: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', '82647f43-3f87-402d-88dd-09a90025313f');
    setup('promo-id', 'c4480ac7-e178-4973-8061-9ed5b2e17954');
    setup('unity-version', '2022.3.20f1');

    if (origin === 'ios') {
      setup('user-agent', 'TrainMiner/20 CFNetwork/1498.700.2 Darwin/23.6.0');
    } else {
      setup('user-agent', 'UnityPlayer/2022.3.20f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
    }

    await login({ clientOrigin: origin, clientId: id(origin === 'ios' ? 'uuid-upper' : 'rand32'), clientVersion: '2.4.16' });

    while (!instance.hasCode) {
      await delay(TIMING_STRATEGY === 'realistic' ? 600_000 : 120_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'hitStatue' });
    }

    await collect();
  },
  BIKE: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', 'd28721be-fd2d-4b45-869e-9f253b554e50');
    setup('promo-id', '43e35910-c168-4634-ad4f-52fd764a843f');

    await login({
      clientOrigin: origin === 'android' ? 'deviceid' : 'ios',
      clientId: id(origin === 'ios' ? 'ts7d' : 'ts19d'),
    });

    while (!instance.hasCode) {
      await delay(TIMING_STRATEGY === 'realistic' ? 50_000 : 20_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined' });
    }

    await collect();
  },
};

//
// Functions
//

function debug(...args) {
  if (!DEBUG) {
    return;
  }

  console.log.apply(null, [new Date(), ...args]);
}

async function globalDelay(ms) {
  debug(`Waiting ${ms}ms`);

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(
    /[018]/g,
    (c) => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16),
  );
}

async function getPromoCode(gp, gameKey) {
  return gp.getCode(gameKey);
}

function globalId(type) {
  switch (type) {
    case 'rand32': {
      return Array.from(
        crypto.getRandomValues(new Uint8Array(16)),
        (it) => it.toString(16).padStart(2, '0'),
      ).join('');
    }
    case 'uuid':
    case 'uuid-upper': {
      return type === 'uuid-upper' ? uuidv4().toUpperCase() : uuidv4();
    }
    case 'ts7d':
    case 'ts19d': {
      const timestamp = Date.now();
      const buf = Array(type === 'ts7d' ? 7 : 19).fill();
      const digits = buf.map(() => Math.floor(Math.random() * 10)).join('');
      return `${timestamp}-${digits}`;
    }
    default: {
      throw new Error(`Tried generating unknown id '${type}'.`);
    }
  }
}

function parseArg(names, parser, fallback = null) {
  if (typeof process === 'undefined' || !Array.isArray(process.argv)) {
    return fallback;
  }

  for (let i = 1; i < process.argv.length; i++) {
    const arg = process.argv[i];

    for (let j = 0; j < names.length; j++) {
      const name = names[j];

      if (arg.toLowerCase().startsWith(`--${name}=`)) {
        const val = arg.slice(name.length + 3);
        const parsed = parser(val);

        if (parsed !== null && name !== 'debug') {
          debug(`Applied filter "${name}":`, parsed);
        }

        return parsed === null ? fallback : parsed;
      }
    }
  }

  return fallback;
}

//
// Classes
//

class GamePromo {
  constructor() {
    this.authToken = null;
    this.config = {};
    this.hasCode = false;
    this.key = null;
    this.origin = null;
  }

  async fetchApi(path, body = null, retry = 0) {
    const headers = {
      accept: '*/*',
      'accept-encoding': 'deflate, gzip',
      'content-type': 'application/json',
    };

    if (this.authToken !== null) {
      headers.authorization = `Bearer ${this.authToken}`;
    }

    if (this.config['user-agent'] !== undefined) {
      headers['user-agent'] = this.config['user-agent'];
    }

    if (this.config['unity-version'] !== undefined) {
      headers['x-unity-version'] = this.config['unity-version'];
    }

    const url = `https://api.gamepromo.io${path}`;

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    };

    debug(url, options);
    let res;

    try {
      res = await fetch(url, options);
    } catch (err) {
      if (retry < SERVER_ERROR_RETRIES) {
        console.info('Received network error, will retry after cooldown period.');
        debug(err);

        await globalDelay(SERVER_ERROR_COOLDOWN);
        return this.fetchApi(path, body, retry + 1);
      }

      throw err;
    }

    if (!res.ok) {
      if (DEBUG) {
        const text = await res.text();
        debug(text);
      }

      if (retry < SERVER_ERROR_RETRIES) {
        console.info('Received internal server error, will retry after cooldown period.');
        await globalDelay(SERVER_ERROR_COOLDOWN);
        return this.fetchApi(path, body, retry + 1);
      }

      throw new Error(`${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    debug(data);
    return data;
  }

  async configSet(key, value) {
    this.config[key] = value;
  }

  async loginFetch(data) {
    const res = await this.fetchApi('/promo/login-client', {
      appToken: this.config['app-token'],
      ...data,
    });

    if (typeof res.clientToken === 'string' && res.clientToken !== '') {
      this.authToken = res.clientToken;
    }
  }

  async eventFetch(data) {
    const promoId = this.config['promo-id'];
    // on ios promoId is sent as first property, on android it's sent last
    const payload = this.origin === 'ios' ? { promoId, ...data } : { ...data, promoId };
    const res = await this.fetchApi('/promo/register-event', payload);

    if (res.hasCode === true) {
      this.hasCode = true;
    }
  }

  async collectFetch() {
    const res = await this.fetchApi('/promo/create-code', {
      promoId: this.config['promo-id'],
    });

    if (typeof res.promoCode === 'string' && res.promoCode !== '') {
      this.key = res.promoCode;
    }
  }

  async getCode(gameKey) {
    this.authToken = null;
    this.config = {};
    this.hasCode = false;
    this.key = null;
    this.origin = DEVICE ?? Math.random() < 0.5 ? 'ios' : 'android';
    debug('origin:', this.origin);

    await GAMES[gameKey]({
      collect: this.collectFetch.bind(this),
      delay: async (ms) => {
        const totalMs = Math.floor(ms * (Math.random() / 4 + 1));
        await globalDelay(totalMs);
      },
      id: globalId,
      instance: this,
      login: this.loginFetch.bind(this),
      event: this.eventFetch.bind(this),
      origin: this.origin,
      setup: this.configSet.bind(this),
    });

    if (this.key === null) {
      throw new Error(`Unable to get ${gameKey} promo.`);
    }

    return this.key;
  }
}

class Queue {
  constructor() {
    const self = this;

    this.items = [];
    this.workers = [
      {
        id: uuidv4(),
        available: true,
        async run(item) {
          item.started = true;
          this.available = false;
          await item.cb();
          this.available = true;
          self.tick();
        },
      },
    ];
  }

  hasAvailableWorkers() {
    return this.workers.some((it) => it.available);
  }

  nextAvailableWorker() {
    return this.workers.find((it) => it.available);
  }

  tick() {
    debug('Queue tick');

    if (!this.hasAvailableWorkers()) {
      return;
    }

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.started) {
        continue;
      }

      debug('Running:', item.id);
      this.nextAvailableWorker().run(item);

      if (!this.hasAvailableWorkers()) {
        return;
      }
    }
  }

  push(cb) {
    this.items.push({
      id: uuidv4(),
      cb,
      started: false,
    });

    this.tick();
  }
}

//
// Main
//

async function main() {
  const gameKeys = Object.keys(GAMES).filter((it) => !EXCLUDE.includes(it));
  const gp = new GamePromo();
  const queue = new Queue();

  for (let k = 0; k < gameKeys.length; k++) {
    for (let i = 0; i < KEYS; i++) {
      queue.push(async () => {
        const code = await getPromoCode(gp, gameKeys[k]);
        console.info(code);

        if (WITH_REINSTALL_TIME && k !== gameKeys.length - 1 && i !== KEYS - 1) {
          await globalDelay((Math.floor(Math.random() * 11) + 20) * 1_000);
        }
      });
    }
  }
}

main().catch(console.error);
