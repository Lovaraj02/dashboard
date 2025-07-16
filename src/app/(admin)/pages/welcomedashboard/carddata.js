import { currency } from '@/context/constants';
export const statData = (() => {
  const data = [
    {
      title: 'Credit Card',
      icon: 'fa-regular fa-credit-card',
      stat: 13647,
      change: '2.3%',
      variant: 'success'
    },
    {
      title: 'Upi',
      icon: 'fa-brands fa-btc',
      stat: 9526,
      change: '8.1%',
      variant: 'success'
    },
    {
      title: 'Net Banking',
      icon: 'fa-solid fa-money-check',
      stat: 976,
      change: '0.3%',
      variant: 'danger'
    }
  ];

  const total = data.reduce((sum, item) => sum + item.stat, 0);

  data.push({
    title: 'Total',
    icon: 'fa-solid fa-piggy-bank',
    stat: total,
    change: '10.6%',
    variant: 'danger'
  });

  return data;
})();
