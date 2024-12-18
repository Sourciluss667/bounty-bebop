export function formatWei(wei: string) {
    return parseInt(wei) / 10 ** 18;
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

const FILETIME_EPOCH_DIFF = BigInt(116444736000000000);
export function filetimeToDate(filetime: number) {
  const filetimeBigInt = BigInt(filetime);
  const milliseconds = Number((filetimeBigInt - FILETIME_EPOCH_DIFF) / BigInt(10000));
  return new Date(milliseconds);
}
