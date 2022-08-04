import { useEffect, useState } from 'react';
import { simplyFetchFromGraph } from '../lib/graph';
import Link from 'next/link';
import Layout from '../components/layout';
import {
  Container,
  ImageDivFirst,
  ImageGridCollection,
  ImageGridCollectionInner,
  Img,
  MainTextInfo,
  FirstDiv,
  SecondDiv,
  TextDiv,
  H3,
  H1,
  Paragraph
} from '../ui/AboutStyles/styles';
import Image from 'next/image';

const About = () => {
  const [isData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchingData = async () => {
    const apiUrlBase = `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}`;

    const data = await simplyFetchFromGraph({
      uri: `${apiUrlBase}/catalogue`,
      query: `
              query GetDocument {
  catalogue(language: "en", path: "/imagecollection") {
    id
    type
  \tchildren {
      ...on Document{
        id
        components {
          content {
            ...on ImageContent {
              images {
                url
              }
            }
          }
        }
      }
        }
      }
    }`
    });
    setData(data.data.catalogue.children[0].components[0].content);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <Layout>
      <Container>
        <H1>About</H1>

        <TextDiv>
          <H3>INSPIRED BY PETALS</H3>
          <Paragraph>
            Sooshflowers was founded in 2020 by observing the nature during the
            long lockdown days. Spending the months in the garden allowed me to
            make the friendship with the flowers, where from planting to
            blooming to drying - they are ending in the glass dome displays and
            eternal displays. Always starving by the desire of creating
            something unique and with deeply personal approach the idea came to
            bring the outside in. Each jar features the variety of flowers, seed
            heads and grasses with the possibly best way of preserving their
            natural look and form.
          </Paragraph>
        </TextDiv>
        <ImageDivFirst>
          <Img src="/static/about1.png" layout="fill" primary />
        </ImageDivFirst>
        <H3>MEET AND GREET</H3>
        <MainTextInfo>
          <FirstDiv>
            <div>IMAGE</div>
          </FirstDiv>
          <SecondDiv>
            <H3>Monika</H3>
            <Paragraph>
              a head and a heart of Sooshflowers, passionate rescue animal
              lover, coffee lover, wine lover – occasional of course! (family
              will be reading ☺ ) With a double eye (literally) to the details
              and fussy, long searches for the special pieces I’m a fan of
              slowliving, love good music and adore watching renovations of old
              houses! My favourites petals: dahlia, ranunculus and peonies.
              Thank you for your trust in Sooshflowers. Forever grateful x
            </Paragraph>
          </SecondDiv>
        </MainTextInfo>
        {isLoading ? (
          <Link href="/shop" passHref>
            <a>
              <ImageGridCollection>
                {isData.images.map((image) => {
                  return (
                    <ImageGridCollectionInner key={image.url}>
                      <Img src={image.url} layout="fill" primary />
                    </ImageGridCollectionInner>
                  );
                })}
              </ImageGridCollection>
            </a>
          </Link>
        ) : (
          <H3>loading</H3>
        )}
      </Container>
    </Layout>
  );
};

export default About;
