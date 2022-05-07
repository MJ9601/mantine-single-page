import {
  Stack,
  AspectRatio,
  Group,
  Image,
  Paper,
  Title,
  Text,
  Button,
} from "@mantine/core";
import { ChevronDown, ChevronUp } from "tabler-icons-react";
import { useGlobalState } from "../cms/globalStateProvider";

const ShoppingItem = ({ item }) => {
  const [{}, dispatch] = useGlobalState();
  return (
    <Paper shadow="md" px="sm">
      <Group grow position="apart" spacing="md">
        <AspectRatio ratio={720 / 1080} style={{ maxWidth: "70px" }}>
          <Image src={item.image} alt={item.title} />
        </AspectRatio>
        <Stack spacing="xs">
          <Title order={5}>{item.title}</Title>
          <Group grow position="left" spacing="xs">
            <Title order={5}>Price:</Title>
            <Text size="sm">$ {item.price}</Text>
          </Group>
        </Stack>
        <Stack spacing="xs" align="center" py="xs">
          <Button
            variant="subtle"
            color="red"
            onClick={() =>
              dispatch({ type: "ADD_PRODUCT_TO_CARD", product: item })
            }
          >
            <ChevronUp size={24} />
          </Button>
          <Text size="lg">{item.amount}</Text>

          <Button
            variant="subtle"
            color="red"
            onClick={() =>
              dispatch({ type: "REMOVE_A_PRODUCT", product: item })
            }
          >
            <ChevronDown size={24} />
          </Button>
        </Stack>
      </Group>
    </Paper>
  );
};

export default ShoppingItem;
