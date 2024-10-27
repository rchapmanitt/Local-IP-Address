const os = require( 'os' );

const networkInterfaces = Object.values(os.networkInterfaces())
    .reduce((r,a) => {
        r = r.concat(a)
        return r;
    }, [])
    .filter(({family, address}) => {
        return family.toLowerCase().indexOf('v4') >= 0 &&
            address !== '127.0.0.1'
    })
    .map(({address}) => address);

console.log('');
console.log('--------------------');
console.log('| Local IP Address |');
console.log('--------------------');
console.log('|  ', networkInterfaces.join(), '  |');
console.log('--------------------');
console.log('');
