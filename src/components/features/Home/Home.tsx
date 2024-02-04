import { useEffect, useState } from 'react';
import { Button, Card, Container } from '#src/components/common';
import * as stylex from '@stylexjs/stylex';
import React from 'react';

const buttonStyles = stylex.create({
  default: {
    background: 'blue',
    color: 'white'
  }
});

const styles = stylex.create({
  // Function arguments must be simple identifiers
  // -- No destructuring or default values
  bar: height => ({
    height
    // The function body must be an object literal
    // -- { return {} } is not allowed
  })
});

const HomePage = () => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    setIsActive(true);
    setHeight(100);
  }, []);

  return (
    <>
      <Container kind='block'>
        <h1>Welcome to the Home Page!</h1>
        <div {...stylex.props(styles.bar(height))}>
          This is some content specific to the Home Page.
        </div>
        <Card size='large' title='Button Components'>
          <Container kind='flex'>
            <Button kind='primary' isActive={isActive} onClick={() => alert('clicked')}>
              Primary
            </Button>
            <Button kind='inverted' style={buttonStyles.default}>
              Primary Overide
            </Button>
            <Button kind='inverted'>Inverted</Button>
            <Button kind='disabled'>Disabled</Button>
          </Container>
        </Card>
      </Container>
    </>
  );
};

export default HomePage;
