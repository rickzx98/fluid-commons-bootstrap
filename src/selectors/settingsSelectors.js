import { ItemType } from '../api/item/';

export function fundsForDropdown(settings) {
  const funds = settings.funds.map(fund => { return { label: fund, value: fund }; });
  funds.unshift({ label: '-- select --', value: '' });
  return funds;
}

export function currenciesForDropdown(settings) {
  const currencies = settings.currencies.map(cur => { return { label: cur, value: cur }; });
  currencies.unshift({ label: '-- select --', value: '' });
  return currencies;
}

export function resourceTypesForDropdown(settings, type) {
  const resourceTypes = settings.resourceTypes
    .filter(resourceType => resourceType.value === type)
    .map(resourceType => { return { label: resourceType.label, value: resourceType.label }; });
  resourceTypes.unshift({ label: '-- select --', value: '' });
  return resourceTypes;
}

export function resourceTypesDefaultsForDropdown() {
  const resourceTypes = Object.keys(ItemType).map(field => Object.assign({}, { value: ItemType[field], label: field }));
  resourceTypes.unshift({ label: '-- select --', value: '' });
  return resourceTypes;
}

export function resourceTypesForLabel(settings, type, value) {
  if (value) {
    const resourceTypes = resourceTypesForDropdown(settings, type);
    return resourceTypes.filter(resourceType => resourceType.value === value)[0].label;
  }
}

export function currenciesForLabel(settings, value) {
  if (value) {
    const currencies = currenciesForDropdown(settings);
    return currencies.filter(currency => currency.value === value)[0].label;
  }
}

export function fundsForLabel(settings, value) {
  if (value) {
    const funds = fundsForDropdown(settings);
    return funds.filter(fund => fund.value === value)[0].label;
  }
}
