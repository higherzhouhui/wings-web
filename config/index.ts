// 网站地址
let webUrl = 'http://localhost:10003';
// api
let apiUrl = 'http://api.cashslotza.com';

if (process.env.APP_ENV === 'development') {
  webUrl = 'http://localhost:10003';
  apiUrl = 'http://api.cashslotza.com';
}

if (process.env.APP_ENV === 'test') {
  webUrl = 'http://wings.capsid.one/';
  apiUrl = 'http://api.cashslotza.com';
}

if (process.env.APP_ENV === 'production') {
  webUrl = 'http://wings.capsid.one/';
  apiUrl = 'http://api.cashslotza.com';
}

// 固定地址
const discordUrl = 'https://discord.gg/capsid';
const capsidOneUrl = 'https://www.capsid.one/';
const twitterUrl = 'https://twitter.com/Capsid_NFT';

export {webUrl, apiUrl, discordUrl, twitterUrl, capsidOneUrl};
