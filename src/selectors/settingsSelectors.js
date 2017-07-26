export function fundsForDropdown(settings) {
    return settings.funds.map(fund => { return { label: fund, value: fund }; });
}

export function currenciesForDropdown(settings) {
    return settings.currencies.map(cur => { return { label: cur, value: cur }; });
}

export function resourceTypesForDropdown(settings) {
    return settings.resourceTypes.map(resourceType => { return { label: resourceType, value: resourceType }; });
}