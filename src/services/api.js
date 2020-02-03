import superagent from 'superagent';

const API = "http://acor.sl.pt:7777";

export const fetch = (path) => {
  return new Promise((resolve, reject) => {
    superagent(API + path)
      .timeout(3000)
      .end((err, res) => {
        if (err || !res.ok) {
          return reject(err);
        }
        resolve(res.body);
      });
  });
}