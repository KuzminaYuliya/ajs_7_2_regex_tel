
export default class Validator {
  static validateTelNumber(data) {
    let resultNumber = '';
    let stringNumber = '';
    if (data.includes('+8') || data.includes('+7')) {
      resultNumber = data.replace(/[- )(]/g, '');
    } else {
      stringNumber = data.replace(/[- )(]/g, '');
      resultNumber = `+7${stringNumber.slice(1)}`;
    }
    return resultNumber;
  }
}
