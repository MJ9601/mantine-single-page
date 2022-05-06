import { AppShell, Header, Footer, Text, Group, Box } from "@mantine/core";

const PageLayout = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#fff ",
          width: "100vw",
          height: "100vh",
          padding: "0",
        },
      }}
      fixed
      footer={
        <Footer height={50} p="md">
          <Group position="apart" spacing="xl">
            <Box>
              <Text size="sm">CopyRight &copy; 2022</Text>
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
