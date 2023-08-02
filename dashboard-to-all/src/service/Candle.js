

export default function createCandle(openTime, open, high, low, close) {
    const x = new Date(openTime);
    const y = [parseFloat(open), parseFloat(high), parseFloat(low), parseFloat(close)];
    
    return { x, y };
}


