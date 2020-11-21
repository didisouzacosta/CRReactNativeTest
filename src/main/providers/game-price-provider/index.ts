import {Gameprice} from '../../../domain/types';

type Value = {
  oldPriceFormatted?: string;
  finalPriceFormatted: string;
};

type Props = {
  gamePrice: Gameprice;
  children(value: Value): JSX.Element;
};

const GamePriceProvider = ({gamePrice, children}: Props) => {
  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const {price, discount} = gamePrice;

  const finalPrice = price - (discount ?? 0);

  const oldPriceFormatted = discount
    ? `de ${currency.format(price)}`
    : undefined;
  const isFree = finalPrice <= 0;
  const finalPriceFormatted = isFree ? 'Grátis' : currency.format(finalPrice);

  return children({
    oldPriceFormatted,
    finalPriceFormatted,
  });
};

export default GamePriceProvider;
