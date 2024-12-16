export function formatWei(wei: string) {
    return parseInt(wei) / 10 ** 18;
}

export function formatTooLongString(str: string, maxLength: number) {
    if (str.length <= maxLength) return str;
    
    const halfLength = Math.floor((maxLength - 3) / 2);
    const firstHalf = str.slice(0, halfLength);
    const secondHalf = str.slice(str.length - halfLength);
    
    return firstHalf + '...' + secondHalf;
}

export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: number;
    
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
