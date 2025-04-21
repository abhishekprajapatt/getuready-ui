import { Button } from '@getuready-ui/react';

const Home = () => {
  return (
    <div className="p-10">
      <Button onClick={() => alert('NebulaUI Button Clicked!')}>
        Click Me
      </Button>
    </div>
  );
};

export default Home;
