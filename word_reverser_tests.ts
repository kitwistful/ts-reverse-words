import { reverseEachWord } from './word_reverser';

const tests = [
    {in: `jump`,
    out: `pmuj`},
    {in: `jump.`,
    out: `pmuj.`},
    {in: `nor'es'ter`,
    out: `ron'se'ret`},
    {in: `don't`,
    out: `nod't`},
    {in: `don't.`,
    out: `nod't.`},
    {in: `Break eggs`,
    out: `kaerB sgge`},
    {in: `Got'ta break, a few eggs!`,
    out: `toG'at kaerb, a wef sgge!`},
    {in: `The fox'es run over to the fences, but don't jump.`,
    out: `ehT xof'se nur revo ot eht secnef, tub nod't pmuj.`},
    {in: `The fox-es run over to the fences! but don't jump?`,
    out: `ehT xof-se nur revo ot eht secnef! tub nod't pmuj?`},
]


let testsPassed = 0;
for(const test of tests) {
    const result = reverseEachWord(test.in);
    if(result === test.out) {
        testsPassed += 1;
    } else {
        console.log(`Expected "${test.out}" got "${result}"`)
        break;
    }
}
console.log(`${testsPassed}/${tests.length} tests succeeded!`)
