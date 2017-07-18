export default function contains(value, text) {
    return value.toLowerCase().indexOf(text.toLowerCase()) > -1;
}