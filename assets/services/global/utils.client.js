export function uid(type, lvl = 0) {
    switch (lvl) {
        case 0:
           return `${type}_0`
        case 1:
           return `${type}_1`
        case 2:
           return `${type}_2`
    
        default:
            return `${type}_default`
    }
}

export async function externalComponent(url) {
    let name = url.split('/').reverse()[0]
    name = uid(name.split('?')[0].split('.')[0])
    
    if (window[name]!==undefined) return window[name];

    window[name] = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.async = true;

        script.addEventListener('load', () => {
            resolve(window[name]);
        });

        script.addEventListener('error', () => {
            reject(new Error(`Error loading ${url}`));
        });

        script.src = url;

        document.head.appendChild(script);
    });

    return window[name];
}