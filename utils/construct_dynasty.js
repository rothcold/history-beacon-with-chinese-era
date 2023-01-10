import converter from 'number-to-chinese-words'

// 在位年数 起始公元年 前缀
const args = process.argv.slice(2);

const startYear = parseInt(args[1])
let result = []
for (let i = 0; i < parseInt(args[0]); i++) {
    result.push(
        {
            "era": `${args[2]}${converter.toWords(i + 1)}年`,
            "year": startYear + i,
            "events": []
        }
    )
}
console.log(JSON.stringify(result))