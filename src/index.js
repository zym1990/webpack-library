import _ from 'lodash';
import numRef from './ref.json';

 function numToWord(num) {
    return _.reduce(numRef, (accum, ref) => {
        return ref.num === num ? ref.word : accum;
    }, '');
}
numToWord(1);
// export function wordToNum(word) {
//     return _.reduce(numRef, (accum, ref) => {
//         return ref.word === word && word.toLowerCase() ? ref.num : accum;
//     }, -1);
// };