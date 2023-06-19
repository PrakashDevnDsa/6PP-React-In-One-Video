import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import im1 from '../assets/1.jpg';
import im2 from '../assets/2.jpg';
import im3 from '../assets/3.jpg';
import im4 from '../assets/4.jpg';
import im5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w={'full'} h={'100vh'}>
          <Image src={im1} h={'full'} w={'full'} objectFit={'cover'} />

          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          <Image src={im2} h={'full'} w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOptions}
          >
            Future Is Gaming
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          <Image src={im3} h={'full'} w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Gaming On Console
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          <Image src={im4} h={'full'} w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOptions}
          >
            Nightlife Is Cool
          </Heading>
        </Box>
      </Carousel>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
          <Heading
            textTransform={'uppercase'}
            py="2"
            w={'fit-content'}
            borderBottom={'2px solid'}
            m="auto"
          >
            Services
          </Heading>

          <Stack
            h="full"
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image src={im5} filter={'hue-rorate(-130deg)'} h={['40', '400']} />
            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center '}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              aspernatur voluptate provident, error itaque omnis at,
              consequuntur aliquid, esse aut laborum. Nulla quia consectetur
              aspernatur ab, doloremque labore voluptatibus repellendus sit
              culpa tempora. Laboriosam dicta odit, autem unde nam, nulla
              quisquam reiciendis, impedit fuga cupiditate suscipit facilis eos
              voluptatem enim vel ea consequuntur blanditiis beatae doloremque.
              Debitis esse explicabo asperiores quos culpa? Hic quisquam earum
              maiores nemo nulla totam, soluta sit facere! Sapiente atque iure
              debitis non asperiores facere vel deserunt nobis? Deserunt rerum
              hic fuga soluta id impedit pariatur magni iusto. Dolorum quae,
              iusto accusamus voluptates dolore vitae libero.
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
