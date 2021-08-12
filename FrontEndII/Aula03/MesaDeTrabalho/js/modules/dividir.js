export function dividir (dividendo,divisor) {
    if (divisor != 0) {
        return (dividendo/divisor).toFixed(2);
    }
    return "error: DIVISÃO POR ZERO É IMPOSSÍVEL";
};