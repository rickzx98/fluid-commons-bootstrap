export function getReadingLevelForDropdown() {
    return [{ value: '', label: '-- select --' },
    {
        value: '#',
        label: 'Unknown or not specified'
    }, {
        value: 'a',
        label: 'Preschool'
    }, {
        value: 'b',
        label: 'Primary'
    }, {
        value: 'c',
        label: 'Pre - adolescent'
    }, {
        value: 'd',
        label: 'Adolescent'
    }, {
        value: 'e',
        label: 'Adult'
    }, {
        value: 'f',
        label: 'Specialized'
    }, {
        value: 'g',
        label: 'General'
    }, {
        value: 'j',
        label: 'Juvenile'
    }]; //TODO:   | - No attempt to code
}
