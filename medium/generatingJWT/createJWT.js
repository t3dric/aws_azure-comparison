const crypto = require('crypto');
const fs = require('fs');

const PASSPHRASE = process?.env?.passphrase || 'nykey';

function _base64( element ) {
    return ( Buffer.isBuffer(element) ? element : Buffer.from( element ) ).toString('base64')
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')    
}

const headerObj = {
    alg: 'RS256',
    typ: 'JWT'
};

const payloadObj = {
    sub: '1234567890',
    name: 'John Doe',
    admin: true,
    iat: 1516239022
};

const PRIV_KEY = fs.readFileSync(__dirname + '\\myRSA256v2.key', 'utf8');

console.log( 'Token:', 
    _base64(JSON.stringify(headerObj)) + '.' + // Header
    _base64(JSON.stringify(payloadObj)) + '.' + // Payload
    _base64( crypto.sign(
        'RSA-SHA256',
        _base64( JSON.stringify(headerObj) ) + '.' + _base64( JSON.stringify(payloadObj) ),
        { 
            key : PRIV_KEY,
            passphrase : PASSPHRASE
        })
    ) // Signature
)
