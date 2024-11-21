/**
 * get russian value of duration (in sec)
 * @param duration string in format PT3H1M
 */

export function convertDurationToRus(duration: string) {
    const hours = parseInt(duration.split('PT')[1]);
    const minutes = parseInt(duration.split('H')[1].split('M')[0]);
    return (hours * 60 + minutes).toString();
}
