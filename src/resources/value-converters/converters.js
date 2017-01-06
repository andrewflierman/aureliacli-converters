import numeral from "numeral";

export class CurrencyFormatValueConverter {
    toView(value) {
        numeral.language("nl-nl", nl);
        numeral.language("nl-nl");
        return numeral(value).format("$0,0.[00]");
    }
}