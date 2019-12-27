export function currencyTrans(value: any, whenFree?: any) {
    debugger
    let fixValue = "";
    if (String(value).indexOf(".") !== -1) {
        fixValue += Number(value).toFixed(2);
    } else {
        if (value || String(value) === "0") {
            fixValue += value;
        } else {
            fixValue = "";
        }
    }

    if (whenFree && Number(fixValue) === 0) {
        return whenFree;
    } else {
        if (fixValue) {
            return '&' + Number(transNumber(fixValue));
        } else {
            return fixValue;
        }
    }
}

function transNumber(number: any) {
    try {
        return parseFloat(number).toLocaleString();
    } catch (e) {
        console.error(e);
    }
    return number;
}