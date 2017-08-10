export function contains(value, text) {
    if (value && text) {
        if (value instanceof Array) {
            return value.filter(v => v.toLowerCase().indexOf(text.toLowerCase()) > -1).length > 0;
        }
        return value.toLowerCase().indexOf(text.toLowerCase()) > -1;
    }
    return false;
}