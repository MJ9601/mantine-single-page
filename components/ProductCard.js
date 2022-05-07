import { AspectRatio, Badge, Image, Paper } from "@mantine/core";

const ProductCard = ({ product }) => {
  return (
    <Paper
      shadow="md"
      p="md"
      component="a"
      href={`/product/${product.id}`}
      sx={(theme) => ({
        position: "relative",
        "&:hover": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
    >
      <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 250 }}>
        <Image src={product.image} alt={product.title} />
      </AspectRatio>
      <Badge
        size="lg"
        sx={{ position: "absolute", top: "10px", right: "10px" }}
        variant="gradient"
        gradient={{ from: "orange", to: "red" }}
      >
        $ {product.price}
      </Badge>
    </Paper>
  );
};

export default ProductCard;
