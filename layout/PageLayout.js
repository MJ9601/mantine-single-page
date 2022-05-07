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
  Drawer,
  Avatar,
  Stack,
} from "@mantine/core";
import "@fontsource/roboto";
import { Search, ShoppingCart } from "tabler-icons-react";
import { useGlobalState } from "../cms/globalStateProvider";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseBackend/firebaseConfig";
import { useEffect } from "react";
import ShoppingItem from "../components/ShoppingItem";

const PageLayout = ({ children }) => {
  const [{ openedDrawer, user, userCard }, dispatch] = useGlobalState();

  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      if (_user) dispatch({ type: "LOGIN", user: _user });
      else dispatch({ type: "LOGOUT" });
    });
  }, []);

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
              {!user ? (
                <>
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
                </>
              ) : (
                <Group position="right" spacing="md">
                  <Avatar
                    color="cyan"
                    radius="xl"
                    onClick={() =>
                      signOut(auth).then(() => dispatch({ type: "LOGOUT" }))
                    }
                  >
                    {user?.email[0]}
                  </Avatar>

                  <Button
                    size="sm"
                    variant="subtle"
                    onClick={() => dispatch({ type: "TOGGOLE" })}
                  >
                    <ShoppingCart />
                  </Button>
                </Group>
              )}
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
      <Drawer
        opened={openedDrawer}
        onClose={() => dispatch({ type: "TOGGOLE" })}
        padding="xl"
        size="xl"
        position="right"
      >
        <Stack pt="xl" spacing="lg">
          <Group grow position="apart">
            <Title order={4}>Your Card</Title>
            <Button
              variant="subtle"
              color="red"
              onClick={() => dispatch({ type: "EMPTY_CARD" })}
            >
              Remove all
            </Button>
          </Group>

          {userCard?.map((item, index) => (
            <ShoppingItem key={index} item={item} />
          ))}
        </Stack>
      </Drawer>
      {children}
    </AppShell>
  );
};

export default PageLayout;
