export function classnames(classes) {
    return Object.keys(classes)
        .filter(className => classes[className] === true)
        .join(' ');
}