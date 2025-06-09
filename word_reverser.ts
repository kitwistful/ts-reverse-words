/*
    NOTE: the example input/output was the following:

    The fox'es run over to the fences, but don't jump.
    ehT xof'se nur revo ot eht secnef, tub nod't pumj.

    If I understood the task correctly, the last word in the output should be "pmuj." and I have proceeded as such.

*/

function reverseToken(token: string): string {
    return token.split("").reverse().join("");
}

/*
    Splits a word by punctuation. For example, "nor'eastener," would be tokenized into ["nor", "'", "eastener", ","] and "bread." would be tokenized into ["bread", "."]
    Punctuation is considered anything other than an alphabetic letter.
*/
function tokenizeWord(word: string): string[] {
    const regex = /[^A-Za-z]/g;
    let boundaryIndex = word.search(regex);
    return boundaryIndex < 0 ? [word]
        : [word.slice(0, boundaryIndex), word.charAt(boundaryIndex), ...tokenizeWord(word.slice(boundaryIndex + 1))];
}


function reverseWords(words: string[]): string[] {
    return words.map(word => tokenizeWord(word).map(
        token => reverseToken(token)
    ).join(""));
}

export function reverseEachWord(inSentence: string) {
    return reverseWords(inSentence.split(" ")).join(" ");
}

