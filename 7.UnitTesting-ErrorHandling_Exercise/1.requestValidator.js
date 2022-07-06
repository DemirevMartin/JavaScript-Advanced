function validate(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const patternUri = /^[\w.]+$/;
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const patternMess = /^[^\>\<\\\&\'\"]*$/;

    if (!(obj.method && methods.includes(obj.method))) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (!(obj.uri && (obj.uri.match(patternUri) || obj.uri === '\*'))) {
        throw new Error('Invalid request header: Invalid URI');
    } else if (!(obj.version && versions.includes(obj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (!(obj.hasOwnProperty('message') && (obj.message.match(patternMess) || obj.message === ''))) {
        throw new Error('Invalid request header: Invalid Message');
    } else {
        return obj;
    }
}
// console.log(validate({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'}));
// console.log(validate({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'}));
// console.log(validate({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''}));
// console.log(validate({
//     method: 'POST',
//     version: 'HTTP/2.0',
//     message: 'rm -rf /*'}));
console.log(validate({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'}));
// console.log(validate({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''}));