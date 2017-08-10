import moment from 'moment';

export function formatDateMedium(dateLong) {
  return moment(dateLong).format('MMMM Do YYYY');
}
