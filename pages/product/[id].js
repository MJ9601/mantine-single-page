import React from "react";
import {
  Box,
  Container,
  AspectRatio,
  Group,
  Image,
  Grid,
  Stack,
  Title,
  Kbd,
  Text,
  Center,
  Button,
} from "@mantine/core";
import { getAllProducts, getProduct } from "../../api/getData";
import PageLayout from "../../layout/PageLayout";
import Rating from "../../components/Rating";
import { Star } from "tabler-icons-react";

const product = ({ product }) => {
  console.log(product);
  return (
    <Container mt="lg">
      <Group position="apart">
        <Grid grow gutter="md" sx={{ width: "100%" }}>
          <Grid.Col xs={12} md={6}>
            <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 250 }}>
              <Image src={product?.image} alt={product?.title} radius="md" />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <Stack spacing="md">
              <Box>
                <Title order={2}>{product?.title}</Title>
              </Box>
              <Group pt="md" position="apart">
                <Title order={4}>Category: </Title>
                <Kbd>{product.category}</Kbd>
                <Group pt="md" position="apart">
                  <Title order={4}>Description: </Title>
                  <Text>{product.description}</Text>
                </Group>
              </Group>

              <Group grow pr="md" spacing="lg" align="center">
                <Group
                  pt="md"
                  position="left"
                  spacing="sm"
                  direction="row"
                  noWrap
                >
                  <Rating _rate={product.rating.rate} />
                  <Text size="md">({product.rating.rate}/5)</Text>
                </Group>
                <Group pt="md" position="left" spacing="sm" noWrap>
                  <Title order={5}>Remainning:</Title>
                  <Text size="md">{product.rating.count}</Text>
                </Group>
              </Group>

              <Group sx={{ width: "100%" }} pt="md">
                <Title order={5}>Price:</Title>
                <Text size="md">$ {product.price}</Text>
              </Group>

              <Group grow mt="md">
                <Button
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                >
                  Add to card
                </Button>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Group>
    </Container>
  );
};

product.getLayout = (page) => <PageLayout>{page}</PageLayout>;
export default product;

export const getStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((product) => ({
    params: {
      id: String(product.id),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const product = await getProduct(params?.id);
  if (!product) return { notFound: true };

  return {
    props: {
      product,
    },
    revalidate: 24 * 3600,
  };
};
