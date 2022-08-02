import GridRenderer from '@crystallize/grid-renderer';
import styled from 'styled-components';

import { responsive } from 'ui';

export { default as GridItem } from './grid-item';

const StyledGrid = styled(GridRenderer)`
  grid-gap: 20px;
  padding: 0 50px;
  grid-template-rows: 1fr 1fr 1fr;

  @media (min-width: 1600px) {
    padding: 0 100px;
    grid-template-rows: 1fr 1fr 1fr;
  }
  ${responsive.xs} {
    // We force the grid to have 1 column for small screens (display items vertically)
    // and overwrite the layout customized from the PIM dashboard.
    // The usage of the "!important" keyword is needed to overwrite the inline
    // styles added in the Crystallize "grid-renderer" component at render-level.
    // Link to the component: https://github.com/CrystallizeAPI/grid-renderer
    // Link to the implementation: https://github.com/CrystallizeAPI/grid-renderer/blob/master/src/react/css-grid.js#L18
    grid-template-columns: 1fr !important;
    grid-template-rows: unset !important;
    grid-auto-rows: var(--grid-row-height);

    // We also force some styles to each cell (inmediate child) because they add inline styles too
    // Link to the implementation: https://github.com/CrystallizeAPI/grid-renderer/blob/master/src/react/css-grid.js#L31
    > * {
      grid-column: initial !important;
      grid-row: initial !important;
    }
  }
`;

export default function Grid({ model, ...rest }) {
  if (!model) {
    return null;
  }

  return <StyledGrid model={model} {...rest} />;
}
