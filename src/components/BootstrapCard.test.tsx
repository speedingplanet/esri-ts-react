import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BootstrapCard from './BootstrapCard';

/*
describe('message', () => {
  beforeAll(() => {}); // runs once
  beforeEach(() => {}); // runs once for each it/test
  it('message'), () => {
    // actual test
    expect(1).toBeTruthy();
  }
  -- OR --
  test('message'), () => {
    // actual test
  }
  afterEach(() => {}); // runs after each it/test
  afterAll(() => {}); // after all tests
})

describe('MyComponent', () => {
  describe('some particular functionality', () => {});
  describe('some other functionality', () => {});
  describe('yet another functionality', () => {});
})
*/

describe( 'BootstrapCard', () => {
  it( 'should render a title', () => {
    let testTitle = 'testTitle';
    let { getByText, queryByText } = render(
      <BootstrapCard title={testTitle}>
        <p>Who cares</p>
      </BootstrapCard>,
    );
    expect( getByText( testTitle ) ).toBeInTheDocument();
    // expect( queryByText( 'thisIsWrong' ) ).toBeInTheDocument();
  } );

  it( 'should render the right header level', () => {
    let { container } = render(
      <BootstrapCard title="whatever" titleLevel="2">
        <span>Whatever</span>
      </BootstrapCard>,
    );

    expect( container.querySelector( 'h2' ) ).not.toBeNull();
  } );

  it( 'should counter-test', () => {
    let testTitle = 'testTitle';
    let { queryByText } = render(
      <BootstrapCard title={testTitle}>
        <p>Who cares</p>
      </BootstrapCard>,
    );
    expect( queryByText( 'whatever' ) ).not.toBeInTheDocument();
    expect( queryByText( testTitle )?.textContent ).not.toMatch( /whatever/ );
  } );
} );
