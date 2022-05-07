import {
  AppShell,
  Header,
  Footer,
  Text,
  Group,
  Box,
  Title,
  Input,
  Button,
} from "@mantine/core";
import "@fontsource/roboto";
import { Search } from "tabler-icons-react";

const PageLayout = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#fff ",
          padding: "0",
          fontFamily: `Roboto`,
        },
      }}
      fixed
      header={
        <Header height={60} p="md" sx={{ position: "sticky", top: "0" }}>
          <Group position="apart">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: "20px",
              }}
            >
              <Title sx={{ color: "blue" }} order={2} size="xl" weight={"bold"}>
                <span style={{ color: "teal" }}>S</span>tore
              </Title>
              <Input
                icon={<Search />}
                placeholder="Search .."
                variant="filled"
                radius="0"
              />
            </Box>
            <Box sx={{ gap: "10px", display: "flex" }}>
              <Button variant="outline" component="a" href="/auth/login">
                Sign In
              </Button>
              <Button
                component="a"
                href="/auth/register"
                variant="gradient"
                gradient={{ from: "teal", to: "blue", deg: 60 }}
              >
                Sign Up
              </Button>
            </Box>
          </Group>
        </Header>
      }
      footer={
        <Footer height={50} p="md" sx={{ position: "sticky", bottom: "0" }}>
          <Group position="center">
            <Box>
              <Text size="lg" weight={"bold"}>
                CopyRight &copy; 2022{" "}
              </Text>
            </Box>
          </Group>
        </Footer>
      }
    >
      {children}
    </AppShell>
  );
};

export default PageLayout;
