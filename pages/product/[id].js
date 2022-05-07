import React from "react";
import { Container } from "tabler-icons-react";
import { getAllProducts, getProduct } from "../../api/getData";
import PageLayout from "../../layout/PageLayout";

const product = ({ product }) => {
  console.log(product);
  return (
    <Container>
      
    </Container>
  )
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
