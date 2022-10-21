import Layout from '../components/layout';
import { Anchor, Container, IFrame, Paragraph } from '../ui/ContactPage/styles';
import { H3 } from '../ui/AboutStyles/styles';
import Link from 'next/link';

const Contact = () => {
  return (
    <Layout
      title="CONTACT | SOOSHFLOWERS | Handmade from our UK flowers"
      description="  Timeless life of dried and preserved flowers, seed heads and
              grasses, closed in glass dome jars. Handmade from our UK flower
              studio, delivered internationally in eco-friendly gift ready
              packaging."
    >
      <Container>
        <div>
          <H3>CONTACT</H3>
          <Paragraph>
            Would you like to surprise your loved ones? Choose your gift and the
            date of the delivery (in line with the production time frame) and we
            will take care of the rest!
            <br />
            <br />
            Do you have an idea for the individual project or bulk order for
            your special event? We look forward to hearing from you!
            <br />
            <br />
            For all customer and sales inquiries, please contact:
          </Paragraph>
          <Paragraph>Customer service:</Paragraph>
          <Anchor href="mailto:hello@sooshflowers.com">
            hello@sooshflowers.com
          </Anchor>
          <Paragraph>Standalone location:</Paragraph>
          <Anchor href="https://g.page/TheOldCinema?share" target="_blank">
            The Old Cinema <br /> 160 Chiswick High Road London W4 1PR
          </Anchor>
        </div>
        <div>
          <IFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1079754029242!2d-0.25668878398483574!3d51.49288601958494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e4090fc751d%3A0xdbda9626554eb31f!2sThe%20Old%20Cinema!5e0!3m2!1sen!2spl!4v1660680370870!5m2!1sen!2spl"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></IFrame>
        </div>
      </Container>
    </Layout>
  );
};

export default Contact;
