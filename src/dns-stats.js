const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainItems = domains.map((item) =>
    item
      .split(".")
      .reverse()
      .map((item) => "." + item)
  );
  const domainNames = [];
  domainItems.forEach((item) => {
    const newDomain = item.reduce((accum, cur) => {
      domainNames.push(accum);
      return accum + cur;
    });
    domainNames.push(newDomain);
  });
  const result = {};
  domainNames.forEach((item) => {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  });
  return result;
}

getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]);

module.exports = {
  getDNSStats,
};
