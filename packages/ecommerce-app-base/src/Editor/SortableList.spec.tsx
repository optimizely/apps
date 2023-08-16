import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Props, SortableList } from './SortableList';
import productPreviews from '../__mocks__/productPreviews';

const defaultProps: Props = {
  disabled: false,
  productPreviews,
  deleteFn: jest.fn(),
};

const renderComponent = (props: Props) => {
  return render(<SortableList {...props} />);
};

jest.mock('react-sortable-hoc', () => ({
  SortableContainer: (x: unknown) => x,
  SortableElement: (x: unknown) => x,
  SortableHandle: (x: unknown) => x,
}));

describe('SortableList', () => {
  afterEach(cleanup);

  it('should render successfully', async () => {
    const { queryAllByTestId } = renderComponent(defaultProps);

    expect(queryAllByTestId('sortable-list-item')).toHaveLength(productPreviews.length);
  });
});
