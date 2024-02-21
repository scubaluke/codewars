///https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

// function handleSpecialRolls({ roll, winnings }) {
//   if (roll < 3) {
//     return roll * winnings;
//   } else if (roll > 3) {
//     return (roll - 3) * winnings;
//   }
//   return 0;
// }

// function score(dice) {
//   let result = 0;
//   const rollObject = {};
//   // build object with amount of each key (side/number)
//   // and calculate 3 of a kind totals
//   dice.forEach((roll) => {
//     if (rollObject[roll]) {
//       rollObject[roll]++;
//       if (rollObject[roll] === 3) {
//         if (roll === 1) {
//           result += 1000;
//         } else {
//           result += roll * 100;
//         }
//       }
//     } else {
//       rollObject[roll] = 1;
//     }
//   });

//   // check and map score for 1 and 5
//   const rollIs1 = rollObject[1];
//   const rollIs5 = rollObject[5];

//   if (rollIs1) {
//     result += handleSpecialRolls({ roll: rollIs1, winnings: 100 });
//   }
//   if (rollIs5) {
//     result += handleSpecialRolls({ roll: rollIs5, winnings: 50 });
//   }

//   return result;
// }
// console.log(score([1, 1, 1, 1, 3]));

//https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
const MORSE_CODE = require('./helpers/morseCode');
decodeMorse = function (morseCode) {
  const result = morseCode
    .trim()
    .split('  ')
    .map((morse) =>
      morse
        .split(' ')
        .map((symbol) => MORSE_CODE[symbol])
        .join('')
    )
    .join(' ');
  return result;
};

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// console.log(decodeMorse('   .... . -.--   '));

//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function hashTagize(string) {
  const result = string
    .split(' ')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join('');

  return `#${result}`;
}

function generateHashtag(string) {
  if (!string.trim()) return false;

  const hashed = hashTagize(string);

  if (hashed.length > 140) return false;

  return hashed;
}
// console.log(generateHashtag('Do We have A Hashtag'));

//https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

// const memoized = {};
// function fibonacci(n) {
//   if (n < 2) return n;
//   if (!memoized[n]) {
//     const result = fibonacci(n - 1) + fibonacci(n - 2);
//     memoized[n] = result;
//     return result;
//   }

//   return memoized[n];
// }
// console.log(fibonacci(8));

// const forge = require('node-forge');
// const cert = `-----BEGIN PUBLIC KEY-----
// MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEApWWyFfqNaLjkPsOeT5qb
// Cdb3y5cnphp3y7m6eWvu6HfYxt7lSXRlUR7pfYS5IsQGg1MhEseBDAU/pRWTcLd1
// fKAuM7XrL8p2kGt/pZQTS7t49prpoU2gVvqqFwJgO25WzMEHKJUNmobB7XcpxNw+
// vSwoBoaqyvu/qz2n7LmIr/jwLGTWydOI4UFZOqhp/OHschS/J6FAAliz9IpB8lY9
// UaQcCT5saRwgzGPwoovjetVcrstdLcpvtTNWctwFOR6vXiOcAcr9FP0J4qHXxjGA
// larW3FvaaZUr4ruYEj3MbiuYpiY61CUTVhGMfR6rHpqXRLGPyO3P1yTUbmlDQh8O
// rS+xAkF7j9ArEmfUue2d8wG4zPW6oYjDjH0gxKCRXfs+myG7Yo1mhF8B8psmbUHv
// BszaeGyron4NKI/qJBzbh9RhovCZyUJoXaTNdi9WjpnyPYzNAtmtQfvp8BihdIER
// EvF1DK3PXQ/brttl45I+w7XVVvqYFK9ZPkBQ4t0EHQZKKp13J4h+8vfv/O0qH2aN
// SezS90uGbEvuHe6/Qh26C0XCpx8A2v+yKgXCqWQGVtVL+2RtmE1GY9IoooaM1Y7G
// BBqmeW+/BbiFJ19YwQgK2KGiHzk2kSzdSU3LUNSa5VvIO1a95lp/jtyY4q/059/j
// Dm4oW1aA/kHCEIACI7jRCrcCAwEAAQ==
// -----END PUBLIC KEY-----`;
// function getKey() {
//   try {
//     const publicKeyPem = forge.pki.getPublicKeyFingerprint(cert);
//     console.log(publicKeyPem);
//     return publicKeyPem;
//   } catch (error) {
//     console.log(error);
//   }
// }
//console.log(getKey());

//!!!!!!

//import crypto from 'crypto';
// const crypto = require('crypto');
// const fs = require('fs');
// const { publicEncrypt } = crypto;

// function hash({ message, key }) {
//   return publicEncrypt(
//     {
//       key,
//       padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//       oaepHash: 'sha512',
//     },
//     Buffer.from(message)
//   ); //.toString('hex');
// }
// // assuming you have a private.key file that begins with '-----BEGIN RSA PRIVATE KEY-----...'
// const privateKey = fs.readFileSync('./certificate.pem');

// const pubKeyObject = crypto.createPublicKey({
//   key: privateKey,
//   format: 'pem',
// });

// const publicKey = pubKeyObject.export({
//   format: 'pem',
//   type: 'spki',
// });

// // -----BEGIN PUBLIC KEY-----...
// console.log(publicKey);
// try {
//   const TPK = `-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEApWWyFfqNaLjkPsOeT5qb\nCdb3y5cnphp3y7m6eWvu6HfYxt7lSXRlUR7pfYS5IsQGg1MhEseBDAU/pRWTcLd1\nfKAuM7XrL8p2kGt/pZQTS7t49prpoU2gVvqqFwJgO25WzMEHKJUNmobB7XcpxNw+\nvSwoBoaqyvu/qz2n7LmIr/jwLGTWydOI4UFZOqhp/OHschS/J6FAAliz9IpB8lY9\nUaQcCT5saRwgzGPwoovjetVcrstdLcpvtTNWctwFOR6vXiOcAcr9FP0J4qHXxjGA\nlarW3FvaaZUr4ruYEj3MbiuYpiY61CUTVhGMfR6rHpqXRLGPyO3P1yTUbmlDQh8O\nrS+xAkF7j9ArEmfUue2d8wG4zPW6oYjDjH0gxKCRXfs+myG7Yo1mhF8B8psmbUHv\nBszaeGyron4NKI/qJBzbh9RhovCZyUJoXaTNdi9WjpnyPYzNAtmtQfvp8BihdIER\nEvF1DK3PXQ/brttl45I+w7XVVvqYFK9ZPkBQ4t0EHQZKKp13J4h+8vfv/O0qH2aN\nSezS90uGbEvuHe6/Qh26C0XCpx8A2v+yKgXCqWQGVtVL+2RtmE1GY9IoooaM1Y7G\nBBqmeW+/BbiFJ19YwQgK2KGiHzk2kSzdSU3LUNSa5VvIO1a95lp/jtyY4q/059/j\nDm4oW1aA/kHCEIACI7jRCrcCAwEAAQ==\n-----END PUBLIC KEY-----\n`;

//   const message = 'the british are coming!';

//   const TencryptedData = publicEncrypt(publicKey, Buffer.from(message));

//   const test = hash({ message: 'this string', key: TPK });

//   const result = {
//     ['the red coats are coming']: hash({
//       message: 'the red coats are coming',
//       key: TPK,
//     }).toString(),
//     ['123-45-6789']: hash({
//       message: '123-45-6789',
//       key: TPK,
//     }).toString('hex'),
//     ['987-65-4321']: hash({
//       message: '987-65-4321',
//       key: TPK,
//     }).toString('hex'),
//     ['111-22-3333']: hash({
//       message: '111-22-3333',
//       key: TPK,
//     }).toString('hex'),
//     ['12-1234567']: hash({
//       message: '12-1234567',
//       key: TPK,
//     }).toString('hex'),
//     ['98-7654321']: hash({
//       message: '98-7654321',
//       key: TPK,
//     }).toString('hex'),
//   };
//   console.log(result);
//   // console.log(encryptedData.toString('hex'));

//   // const decryptedData = privateDecrypt(privateKey, encryptedData)
//   // console.log(decryptedData.toString('utf-8'))
// } catch (error) {
//   console.log(error);
// }

// const jsonwebtoken = require('jsonwebtoken');
// function signedJWTValue() {
//   const claims = {
//     iss: '',
//     key: '',
//     aud: '',
//   };

//   try {
//     const privateKey = fs.readFileSync('~/id_rsa');

//     console.log(JSON.stringify(claims));
//     console.log(privateKey);
//     const signedJwt = jsonwebtoken.sign(claims, privateKey, {
//       algorithm: 'RS256',
//     });
//     console.log(signedJwt);
//     return signedJwt;
//   } catch (error) {
//     console.log(error);
//   }
// }
// signedJWTValue();

// function generateKeyPair() {
//   // return generateKeyPair(
//   //   'rsa',
//   //   {
//   //     modulusLength: 4096,
//   //     publicKeyEncoding: {
//   //       type: 'spki',
//   //       format: 'pem',
//   //     },
//   //     privateKeyEncoding: {
//   //       type: 'pkcs8',
//   //       format: 'pem',
//   //       cipher: 'aes-256-cbc',
//   //       passphrase: 'top secret',
//   //     },
//   //   },
//   //   (err, publicKey, privateKey) => {
//   //     if (err) {
//   //       console.log(err);
//   //     }
//   //     console.log({ publicKey, privateKey });
//   //   }
//   // );
//   generateKeyPair(
//     'rsa',
//     {
//       modulusLength: 4096,
//       publicKeyEncoding: {
//         type: 'spki',
//         format: 'pem',
//       },
//       privateKeyEncoding: {
//         type: 'pkcs8',
//         format: 'pem',
//         cipher: 'aes-256-cbc',
//         passphrase: 'top secret',
//       },
//     },
//     (err, publicKey, privateKey) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log({ publicKey, privateKey });
//       }
//     }
//   );
// }

//generateKeyPair();

// const { generateKeyPair } = require('crypto');

// generateKeyPair(
//   'rsa',
//   {
//     modulusLength: 4096,
//     publicKeyEncoding: {
//       type: 'spki',
//       format: 'pem',
//     },
//     privateKeyEncoding: {
//       type: 'pkcs8',
//       format: 'pem',
//       // cipher: 'aes-256-cbc',
//       // passphrase: 'top secret',
//     },
//   },
//   (error, publicKey, privateKey) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log({ publicKey, privateKey });
//     }
//   }
// );

class Queue {
  constructor() {
    this.data = []
  }

  add(record) {
    this.data.unshift(record)
  }

  remove() {
    return this.data.pop()
  }
}


