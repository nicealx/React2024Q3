import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './card.component';
import { ICard } from '../../interfaces/interface';
import { MemoryRouter } from 'react-router-dom';

describe('Test card', () => {
  describe('Card data exist', () => {
    const fakeData: ICard = {
      data: {
        name: 'Name',
        url: '1',
      },
    };
    test('Card on display', () => {
      const { asFragment } = render(
        <MemoryRouter>
          <Card data={fakeData.data} />
        </MemoryRouter>,
      );

      expect(asFragment()).toMatchSnapshot();
      expect(screen.findByText(/Name/i)).toBeDefined();
    });
  });
});
