const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
})


const FormatCurrency = (number: number) => {
    return (
        CURRENCY_FORMAT.format(number)
    );
};

export default FormatCurrency;