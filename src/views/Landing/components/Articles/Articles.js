import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img1.jpg',
    title: 'Increasing prosperity with positive thinking',
    subtitle:
      'Much more than a bank, fastest and most convenient financial and administrative co-driver to work with.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img2.jpg',
    title: 'Motivation is the first step to success',
    subtitle:
      "Once you're setup, instantly withdraw payments or deposit into your bank account within 2-3 business days.",
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
    title: 'Success steps for your personal or business life',
    subtitle:
      'We make sure to include all the amenities and niceties that a growing startup could possibly need.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img4.jpg',
    title: 'Increasing prosperity with positive thinking',
    subtitle:
      "Once you're setup, instantly withdraw payments or deposit into your bank account within 2-3 business days.",
  },
];

const Articles = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Recent Crypto Related News
        </Typography>
      </Box>
      <Box
        data-aos={'fade-up'}
        maxWidth={{ xs: 420, sm: 620, md: 1 }}
        margin={'0 auto'}
      >
        <Slider {...sliderOpts}>
          {mock.map((item, i) => (
            <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{ backgroundImage: 'none' }}
                >
                  <CardMedia
                    title={item.title}
                    image={item.media}
                    sx={{
                      position: 'relative',
                      height: { xs: 240, sm: 340, md: 280 },
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component={'svg'}
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1921 273"
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        left: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    >
                      <polygon
                        fill={theme.palette.background.paper}
                        points="0,273 1921,273 1921,0 "
                      />
                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      align={'left'}
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography align={'left'} color={'text.secondary'}>
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                  <Box flexGrow={1} />
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button>Learn more</Button>
                  </CardActions>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Articles;
