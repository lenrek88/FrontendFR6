import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormAddFoodFormControl from '../src/components/FormAddFoodFormControl';

test('loads and displays greeting', async () => {
    render(<FormAddFoodFormControl data-testid="my-first-ui-test" />);
});
