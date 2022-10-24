import React, { useState, useEffect, useRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getData } from 'page-components/folder';
import { getLocaleFromContext } from 'lib/app-config';
import nextI18NextConfig from '../../next-i18next.config.js';
import Layout from '../components/layout';
import {
  H1,
  H2,
  TitlePosition,
  Container,
  ImageDiv,
  ImagesStyled,
  ImageStripe,
  Paragraph,
  Btn,
  FlowerImageDiv,
  BgImageDiv,
  SubBtn,
  SubInput,
  SubParagraph,
  H3,
  FormStyled,
  HelperDiv,
  ItemsDiv,
  MainInfoDiv,
  FirstDiv,
  SecondDiv,
  TextDiv,
  List
} from '../ui/FrontPage/styles.js';
import Link from 'next/link';
import Image from 'next/image';
import ProductItem from '../components/indexProductItems/ProductItems';
import { simplyFetchFromGraph } from '../lib/graph';
import Listformat from '../components/listformat';
import { Item } from '../shapes/folder/page/styles';

const Home = (data) => {
  const [isData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value
      }),

      headers: {
        'Content-Type': 'application/json'
      },

      method: 'POST'
    });

    inputRef.current.value = '';
  };
  console.log(data.folder);

  const stacks = data.folder.components?.find(
    (c) => c.name === 'Stackable content'
  )?.content?.items;

  console.log(stacks);
  return (
    <Layout
      title="SOOSHFLOWERS | Handmade from our UK flowers"
      description="  Timeless life of dried and preserved flowers, seed heads and
              grasses, closed in glass dome jars. Handmade from our UK flower
              studio, delivered internationally in eco-friendly gift ready
              packaging."
    >
      <Container>
        <MainInfoDiv>
          <FirstDiv>
            <ImageDiv>
              <ImagesStyled
                src="/static/changeHeroImage.jpg"
                width={564}
                height={846}
                priority
              />
            </ImageDiv>
          </FirstDiv>
          <SecondDiv>
            <TitlePosition>
              <H1>PERFECTLY FORMED FLOWERS</H1>
            </TitlePosition>
            <Paragraph>
              Timeless life of dried and preserved flowers, seed heads and
              grasses, closed in glass dome jars. Handmade from our UK flower
              studio, delivered internationally in eco-friendly gift ready
              packaging.
            </Paragraph>
            <Link href="/shop">
              <Btn>Shop now</Btn>
            </Link>
          </SecondDiv>
        </MainInfoDiv>
        <FlowerImageDiv>
          <Image
            src="/static/frontFlower.png"
            width={1000}
            height={1000}
            priority
          />
        </FlowerImageDiv>
        <TextDiv>
          <H2>
            BRING THE OUTSIDE IN. <br />
            MAKE IT PERSONAL
          </H2>
          <Paragraph>
            ~ READY TO DISPATCH (aka I’m running late!) – no time to think? Go
            for this option! to be shipped within 2 working days, next working
            day delivery - shows as AVAILABLE under specific size. Other sizes
            are available under MADE TO ORDER - waiting time up to 8 working
            days, next working day delivery. ~ CUSTOM ORDER (I’m too special for
            the ordinary!) – special arrangements for a special person? up to 10
            working days, next working day delivery.
          </Paragraph>
          <Paragraph>
            *ADD PERSONALIZATION - available only with the CUSTOM ORDER - up to
            10 working days, next working day delivery
          </Paragraph>
          <ImageStripe />
        </TextDiv>
        <ItemsDiv>
          <List>
            {stacks?.map((stack, i) => (
              <Item key={i}>
                <Listformat item={stack} />
              </Item>
            ))}
          </List>
        </ItemsDiv>
        <BgImageDiv>
          <HelperDiv>
            <Image
              src="/static/bg.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </HelperDiv>
          <H3>JOIN OUR MAILING LIST</H3>
          <SubParagraph>
            Be the first to know about new arrivals, sales, exclusive offers,
            and special events.
          </SubParagraph>
          <FormStyled onSubmit={subscribeUser}>
            <SubInput
              type="email"
              name="email"
              ref={inputRef}
              placeholder={'Your email for subscribe newsletter'}
            />
            <br />
            <SubBtn type="submit">join now</SubBtn>
          </FormStyled>
        </BgImageDiv>
      </Container>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const { preview } = context;
  const locale = getLocaleFromContext(context);

  const data = await getData({
    asPath: '/frontpage-2021',
    language: locale.crystallizeCatalogueLanguage,
    preview
  });

  return {
    props: {
      ...data,
      hidePageHeader: true,
      ...(await serverSideTranslations(
        context.locale,
        ['common', 'basket'],
        nextI18NextConfig
      ))
    },
    revalidate: 1
  };
}

export default Home;
