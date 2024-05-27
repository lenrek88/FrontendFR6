import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormAddFood } from '../src/components/FormAddFood';

test('loads and displays greeting', async () => {
    // ARRANGE
    render(<FormAddFood />); // рендерим компонент Fetch и прокидываем нужные нам пропсы

    // ACT
    await userEvent.click(screen.getByText('Load Greeting')); // Находим элемент с текстом 'Load Greeting' и эмулируем нажатие на него
    await screen.findByRole('heading'); // пытаемся найти DOM элемент с role heading (если не найдем, тест упадет)

    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('hello there'); // проверяем что у элемента есть текст 'hello there'
    expect(screen.getByRole('button')).toBeDisabled(); // проверяем что элемент с role button имеет атрибут disabled
});
