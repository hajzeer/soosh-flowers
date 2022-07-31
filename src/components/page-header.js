import styled from 'styled-components';
import ContentTransformer from 'ui/content-transformer';
const Outer = styled.section`
  padding-bottom: 25px;
`;

const Description = styled.div`
  max-width: var(--font-max-width);
  font-weight: 600;
`;

const H1 = styled.h1`
  font-size: 50px;
  color: var(--color-text-main);
  max-width: var(--font-max-width);
  margin-bottom: 15px;
`;

export default function PageHeader({ title, description }) {
  return (
    <Outer>
      <H1>{title}</H1>
      <Description>
        <ContentTransformer json={description} />
      </Description>
    </Outer>
  );
}
