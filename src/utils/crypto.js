/**
 Function:
 User: burning <923398776@qq.com>
 Date: 2020年07月22日
 */

const cryptoJs = require('crypto-js');
let keyOne = '885554442223331a'

export const aes = {
    // 加密
    aesEncrypt(word) {
        let key = cryptoJs.enc.Hex.parse(keyOne)
        let enc = ''
        if (typeof word === 'string') {
            enc = cryptoJs.AES.encrypt(word, key, {
                mode: cryptoJs.mode.ECB,
                padding: cryptoJs.pad.Pkcs7
            })
        } else if (typeof word === 'object') {
            let data = JSON.stringify(word)
            enc = cryptoJs.AES.encrypt(data, key, {
                // iv: iv
                mode: cryptoJs.mode.ECB,
                padding: cryptoJs.pad.Pkcs7
            })
        }
        let encResult = enc.ciphertext.toString()
        return encResult
    },
    // 解密
    aesDecrypt(word) {
        let key = cryptoJs.enc.Hex.parse(keyOne)
        let dec = cryptoJs.AES.decrypt(cryptoJs.format.Hex.parse(word), key, {
            // vi: vi
            mode: cryptoJs.mode.ECB,
            padding: cryptoJs.pad.Pkcs7
        })
        let decData = cryptoJs.enc.Utf8.stringify(dec)
        return decData
    },

}
