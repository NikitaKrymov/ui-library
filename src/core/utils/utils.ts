export const mergeProps = (obj1: any, obj2: any) => {
    return Object.assign(obj1, obj2);
};

export const buildClass = (classList: any) => {
    return Object.entries(classList).reduce((acc, [key, value]) => {
        return value ? (acc += ` ${key}`) : acc;
    }, "").trim();
};

export const isHrefContainsPath = (path: string) => {
    return window.location.href.includes(path);
}

export const sortObjectArrayByValue = (array: any[], key: string) => {
    return array.slice(0).sort((a: any, b: any) => b[key] - a[key]);
};

export const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 1000000);
}