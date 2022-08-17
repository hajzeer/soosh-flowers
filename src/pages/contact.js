import Layout from '../components/layout';
import { Anchor, Container, IFrame } from '../ui/ContactPage/styles';
import { H3, ImageDivFirst, Img, Paragraph } from '../ui/AboutStyles/styles';
import Link from 'next/link';

const Contact = () => {
  return (
    <Layout>
      <Container>
        <div>
          <H3>CONTACT</H3>
          <Paragraph>
            For all customer and sales inquiries, please contact:
          </Paragraph>
          <Paragraph>Customer service:</Paragraph>
          <Link href="mailto:hello@sooshflowers.com">
            <Anchor>hello@sooshflowers.com</Anchor>
          </Link>
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
