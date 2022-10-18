import Layout from '../components/layout';
import { Container } from '../ui/RulesStyled/style';

const deliveryReturns = () => {
  return (
    <Layout
      title="DELIVERY&RETURNS | SOOSHFLOWERS | Handmade from our UK flowers"
      description="  Timeless life of dried and preserved flowers, seed heads and
              grasses, closed in glass dome jars. Handmade from our UK flower
              studio, delivered internationally in eco-friendly gift ready
              packaging."
    >
      <Container>
        <h2>Delivery and returns</h2>
        <p>
          <span>FREE UK DELIVERY</span> - Orders under £150 will be charged a
          flat fee of £5.00. Orders totalling £150 or more will be sent free of
          charge. Deliveries are sent via Royal Mail on a tracked service for
          delivery service. We aim to dispatch all orders same day, and they
          usually arrive within 30 business days of order placement.
        </p>
        <p>
          <span>RETURNS POLICY</span> - SOOSH FLOWERS has a 28 days return
          policy. All goods must be returned referencing the Order number and
          email/phone number used for the original purchase*. We cannot refund
          return items lost in the post.
          <br />
          <br />
          <span>Return address:</span> The Old Cinema 160 Chiswick High Rd.,
          Chiswick, London W4 1PR, United Kingdom
          <br />
          <br />* Both the packaging and the items themselves must remain
          intact.
        </p>
      </Container>
    </Layout>
  );
};

export default deliveryReturns;
