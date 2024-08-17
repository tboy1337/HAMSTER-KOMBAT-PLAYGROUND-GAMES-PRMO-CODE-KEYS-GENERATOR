const DEBUG = false;
const SERVER_ERROR_COOLDOWN = 300_000;
const SERVER_ERROR_RETRIES = 3;

const games = {
  TWERK: async ({ collect, delay, event, id, instance, login, setup }) => {
    setup('app-token', '61308365-9d16-4040-8bb0-2f4a4c69074c');
    setup('promo-id', '61308365-9d16-4040-8bb0-2f4a4c69074c');
    setup('unity-version', '2021.3.15f1');
    setup('user-agent', 'Twerk/485 CFNetwork/1498.700.2 Darwin/23.6.0');

    await login({ clientOrigin: 'ios', clientId: id('ts7d') });

    while (!instance.hasCode) {
      await delay(20_000);
      await event({ eventId: 'StartLevel', eventOrigin: 'undefined' });
    }

    await collect();
  },
  MERGE: async ({ collect, delay, event, id, instance, login, setup }) => {
    setup('app-token', '8d1cc2ad-e097-4b86-90ef-7a27e19fb833');
    setup('promo-id', 'dc128d28-c45b-411c-98ff-ac7726fbaea4');
    setup('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148');

    await login({ clientOrigin: 'ios', clientId: id('ts7d') });

    while (!instance.hasCode) {
      await delay(20_000);
      await event({ eventOrigin: 'undefined', eventId: id('uuid'), eventType: 'spend-energy' });
    }

    await collect();
  },
  CLONE: async ({ collect, delay, event, id, instance, login, setup }) => {
    setup('app-token', '74ee0b5b-775e-4bee-974f-63e7f4d5bacb');
    setup('promo-id', 'fe693b26-b342-4159-8808-15e3ff7f8767');
    setup('unity-version', '2022.3.25f1');
    setup('user-agent', 'Myclonearmy/12 CFNetwork/1498.700.2 Darwin/23.6.0');

    await login({ clientId: id('uuid-upper'), clientOrigin: 'ios' });

    for (let i = 0; !instance.hasCode; i++) {
      await delay(120_000);
      await event({ eventId: id('uuid'), eventType: 'MiniQuest', eventOrigin: 'undefined' });
    }

    await collect();
  },
  CUBE: async ({ collect, delay, event, id, instance, login, setup }) => {
    setup('app-token', 'd1690a07-3780-4068-810f-9b5bbf2931b2');
    setup('promo-id', 'b4170868-cef0-424f-8eb9-be0622e8e8e3');
    setup('unity-version', '2022.3.20f1');
    setup('user-agent', 'ChainCube/3 CFNetwork/1498.700.2 Darwin/23.6.0');

    await login({ clientOrigin: 'ios', clientId: id('uuid'), clientVersion: '1.78.33' });

    while (!instance.hasCode) {
      await delay(20_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'cube_sent' });
    }

    await collect();
  },
  TRAIN: async ({ collect, delay, event, id, instance, login, setup }) => {
    setup('app-token', '82647f43-3f87-402d-88dd-09a90025313f');
    setup('promo-id', 'c4480ac7-e178-4973-8061-9ed5b2e17954');
    setup('unity-version', '2022.3.20f1');
    setup('user-agent', 'TrainMiner/20 CFNetwork/1498.700.2 Darwin/23.6.0');

    await login({ clientOrigin: 'ios', clientId: id('uuid-upper'), clientVersion: '2.4.16' });

    while (!instance.hasCode) {
      await delay(120_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'hitStatue' });
    }

    await collect();
  },
  BIKE: async ({ collect, delay, event, id, instance, login, setup }) => {
    setup('app-token', 'd28721be-fd2d-4b45-869e-9f253b554e50');
    setup('promo-id', '43e35910-c168-4634-ad4f-52fd764a843f');
    // todo(delasy): Actually scan BIKE game headers

    await login({ clientOrigin: 'ios', clientId: id('ts19d') });

    while (!instance.hasCode) {
      await delay(20_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined' });
    }

    await collect();
  },
};

class Logger {
  static debug() {
    if (!DEBUG) {
      return;
    }

    console.log.apply(null, arguments);
  }

  static info() {
    console.info.apply(null, arguments);
  }

  static panic() {
    console.error.apply(null, arguments);
  }
}

async function globalDelay(ms) {
  Logger.debug(`Waiting ${ms}ms`);

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function globalId(type) {
  switch (type) {
    case 'uuid':
    case 'uuid-upper': {
      const val = '10000000-1000-4000-8000-100000000000'.replace(
        /[018]/g,
        (c) => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16),
      );

      return type === 'uuid-upper' ? val.toUpperCase() : val;
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

class GamePromo {
  constructor() {
    this.authToken = null;
    this.config = {};
    this.hasCode = false;
    this.key = null;
  }

  async fetchApi(path, body = null, retry = 0) {
    const headers = {
      accept: '*/*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
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
      cache: 'no-store',
      headers,
      body: JSON.stringify(body),
    };

    Logger.debug(url, options);
    const res = await fetch(url, options);

    if (!res.ok) {
      if (DEBUG) {
        const text = await res.text();
        Logger.debug(text);
      }

      if (retry < SERVER_ERROR_RETRIES) {
        Logger.info('Received internal server error, will retry after cooldown period.');
        await globalDelay(SERVER_ERROR_COOLDOWN);
        return this.fetchApi(path, body, retry + 1);
      }

      throw new Error(`${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    Logger.debug(data);
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
    const res = await this.fetchApi('/promo/register-event', {
      promoId: this.config['promo-id'],
      ...data,
    });

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

    await games[gameKey]({
      collect: this.collectFetch.bind(this),
      delay: globalDelay,
      id: globalId,
      instance: this,
      login: this.loginFetch.bind(this),
      event: this.eventFetch.bind(this),
      setup: this.configSet.bind(this),
    });

    if (this.key === null) {
      throw new Error(`Unable to get ${gameKey} promo.`);
    }

    return this.key;
  }
}

async function getPromoCode(gp, gameKey) {
  return gp.getCode(gameKey);
}

async function main() {
  const gp = new GamePromo();

  for (const gameKey of Object.keys(games)) {
    for (let i = 0; i < 4; i++) {
      const code = await getPromoCode(gp, gameKey);
      Logger.info(code);
    }
  }
}

main().catch(Logger.panic);
