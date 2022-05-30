const checkNumberHanoi = (PlateNeedCheck) => {
    const array = ['29','30','31','32','33']
    for (const plateNeedCheckElement of array) {
        if(PlateNeedCheck.startsWith(plateNeedCheckElement)){
            return true
        }
    }
    return false
}

const listLicensePlates = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];

let listLicensePlateInHanois = [];

for (const value of listLicensePlates) {
    if (checkNumberHanoi(value)) {
        listLicensePlateInHanois.push(value);
    }
}

console.log("Các biển số thuộc Hà Nội: ", listLicensePlateInHanois);