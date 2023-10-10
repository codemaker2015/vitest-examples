import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest'
import App from "../src/App";
import React from 'react';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByText("Vite + React");
    expect(headline).toBeInTheDocument();
  });
});