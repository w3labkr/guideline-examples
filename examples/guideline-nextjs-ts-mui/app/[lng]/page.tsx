// Move faster with intuitive React UI tools.
import Toolbar from '@mui/material/Toolbar';

// Utility for creating styled components.
import { Header, Main, Footer } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Masonry } from '@/components/Masonry';
import BackToTop from '@/components/BackToTop';

function RootPage({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <Header lng={lng} />
      <Toolbar id="back-to-top-anchor" />
      <Main>
        <Hero.Wrapper>
          <Hero.Title>Album layout</Hero.Title>
          <Hero.Description>
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and
            sweet, but not too short so folks don&apos;t simply skip over it entirely.
          </Hero.Description>
        </Hero.Wrapper>
        <Masonry.Wrapper>
          <Masonry.List
            columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
            spacing={1}
            defaultHeight={450}
            defaultColumns={6}
            defaultSpacing={1}
          >
            {data.map((item, index) => (
              <Masonry.ListItem key={index}>
                <Masonry.Image src={`${item.src}?w=320&fit=crop&auto=format`} alt={item.title} />
                <Masonry.Title>{item.title}</Masonry.Title>
              </Masonry.ListItem>
            ))}
          </Masonry.List>
        </Masonry.Wrapper>
      </Main>
      <BackToTop triggerId="back-to-top-anchor" />
      <Footer />
    </>
  );
}

const data = [
  {
    src: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    src: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    src: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    src: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    src: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    src: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    src: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    src: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    src: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    src: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    src: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export default RootPage;
