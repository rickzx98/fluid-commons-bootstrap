export const createSubjectObject = (value, label, repeatable) => {
    return Object.assign({}, { value, label, repeatable });
};