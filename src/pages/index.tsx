import { Button } from '@/components/ui/Button';
import type { NextPage } from 'next';
import styled from 'styled-components';

const StyledHomePage = styled.div``;

const Home: NextPage = () => {
  return (
    <StyledHomePage>
      <Button isBlock={true}>Кнопка</Button>
    </StyledHomePage>
  )
}

export default Home;
