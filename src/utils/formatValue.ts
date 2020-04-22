const formatValue = (value: number): string =>
  Intl.NumberFormat('br-PT', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(value)
    .replace('R$', 'R$ ');

export default formatValue;
