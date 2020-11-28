import {Gameprice} from '../../domain/types';

type Value = {
  priceFormatted?: string;
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
  const priceFormatted = discount ? `de ${currency.format(price)}` : undefined;
  const isFree = finalPrice <= 0;
  const finalPriceFormatted = isFree ? 'Grátis' : currency.format(finalPrice);

  return children({
    priceFormatted,
    finalPriceFormatted,
  });
};

export default GamePriceProvider;
