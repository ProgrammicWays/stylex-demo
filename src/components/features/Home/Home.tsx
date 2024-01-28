import { useEffect, useState } from "react";
import { Button } from "src/components/common/Button/Button";
import { Card } from "src/components/common/Card/Card";
import * as stylex from "@stylexjs/stylex";

const buttonStyles = stylex.create({
  default: {
    background: "blue",
    color: "white",
  },
});

const styles = stylex.create({
  // Function arguments must be simple identifiers
  // -- No destructuring or default values
  bar: (height) => ({
    height,
    // The function body must be an object literal
    // -- { return {} } is not allowed
  }),
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
      <h1>Welcome to the Home Page!</h1>
      <div {...stylex.props(styles.bar(height))}>
        This is some content specific to the Home Page.
      </div>
      <Card size="large">
        <Button kind="primary" isActive={isActive} style={buttonStyles.default}>
          Submit
        </Button>
        <Button kind="inverted">Submit</Button>
        <Button kind="disabled">Submit</Button>
      </Card>
    </>
  );
};

export default HomePage;
