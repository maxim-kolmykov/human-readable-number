module.exports = function toReadable(number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let numberStr = number.toString().split('').join('')

    let result = ''

    if (number == 0) {
        result = 'zero'
    } else if (number < 20) {
        result = ones[number]
    } else if (number < 100) {
        result = tens[numberStr[0]] + ' ' + ones[numberStr[1]]
    } else if (number < 1000 && Number(numberStr.substring(1)) >= 20) {
        result = `${ones[numberStr[0]]} hundred ${tens[numberStr[1]]} ${ones[numberStr[2]]}`
    } else if (number < 1000 && Number(numberStr.substring(1)) <= 20) {
        result = `${ones[numberStr[0]]} hundred ${ones[Number(numberStr.substring(1))]}`
    }

    return result.trim()
}