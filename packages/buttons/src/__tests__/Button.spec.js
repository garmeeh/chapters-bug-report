import React from 'react';
import { render, Simulate, fireEvent } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import { Button } from '../';
import Icon from '../__stories__/icon';

describe('Package: Button', () => {
  it('renders without any props', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with children passed in', () => {
    const { container } = render(<Button>Button Child</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with icon and text', () => {
    const { container } = render(
      <Button hasIcon iconText>
        <Icon icon={'IconCog'} /> Button
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('handles loading state correctly', () => {
    const { container } = render(<Button loading>Click Button</Button>);
    const button = container.firstChild;
    expect(button).toHaveAttribute('aria-busy');
    expect(button).toHaveAttribute('role', 'alert');
    expect(button).toHaveTextContent('Loading...');
    expect(button).toMatchSnapshot();
  });

  it('renders accessibility label', () => {
    const { container } = render(
      <Button accessibilityLabel="Click Button">Click Button</Button>
    );
    const button = container.firstChild;
    expect(button).toHaveAttribute('aria-label', 'Click Button');
    expect(button).toMatchSnapshot();
  });

  it('handles a click', () => {
    let clicked = false;
    const clickMe = () => {
      clicked = true;
    };
    const { container } = render(<Button onClick={clickMe}>Click Me</Button>);
    Simulate.click(container.firstChild);
    expect(clicked).toBe(true);
  });
});
