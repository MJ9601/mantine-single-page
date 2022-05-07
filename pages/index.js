import { Center, Container, Grid } from "@mantine/core";
import Head from "next/head";
import ProductCard from "../components/ProductCard";
import PageLayout from "../layout/PageLayout";
import { getAllProducts } from "../api/getData";
export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Mantine Ui - store</title>
      </Head>
      <Container mt="lg">
        <Center p="lg" mt="lg">
          <Grid grow gutter="xs">
            {products?.map((product, index) => (
              <Grid.Col lg={3} md={4} xs={12} align="center" sm={6} key={index}>
                <ProductCard product={product} />
              </Grid.Col>
            ))}
          </Grid>
        </Center>
      </Container>
    </div>
  );
}

Home.getLayout = (page) => <PageLayout>{page} </PageLayout>;

export const getServerSideProps = async () => {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
};
