/**
 * @returns {boolean} if it is winter now
 */
export function isWinter() {
    const now = new Date();
    const month = now.getMonth() + 1; // months start with 0
    const day = now.getDate();

    return (month === 12 && day >= 1) || (month === 1 || month === 2) || (month === 3 && day <= 28);
}