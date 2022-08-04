import Pricing from '../../shapes/product/item/components/price';
import getRelativePriceVariants from '../../lib/pricing';
import { useLocale } from '../../lib/app-config';
import Image from 'next/image';
import { Container, Footer, H2, ImageContainer } from './styles';

const ProductItem = ({ items }) => {
  const locale = useLocale();

  const variant = items.variants[0];
  const pricing = getRelativePriceVariants({ variant, locale });

  return (
    <Container key={items.id}>
      <ImageContainer>
        <Image src={items.variants[0].images[0].url} width={563} height={751} />
      </ImageContainer>
      <Footer>
        <H2>{items.name}</H2>
        <Pricing pricing={pricing} />
      </Footer>
    </Container>
  );
};
export default ProductItem;
