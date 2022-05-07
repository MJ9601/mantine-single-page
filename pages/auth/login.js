import {
  Button,
  Center,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import PageLayout from "../../layout/PageLayout";

const login = () => {
  const loginFrom = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length > 6 ? "Invalid Password" : null),
    },
  });

  return (
    <Center style={{ width: "100%", height: "70vh" }}>
      <Paper shadow="md" p="md">
        <form onSubmit={loginFrom.onSubmit((values) => console.log(values))}>
          <Stack>
            <TextInput
              placeholder="Email"
              label="Your Email"
              required
              {...loginFrom.getInputProps("email")}
            />
            <PasswordInput
              placeholder="Password"
              label="Password"
              description="Password must include at least one letter, number and special character"
              required
              {...loginFrom.getInputProps("password")}
            />
            <Button type="submit">Sign In</Button>
          </Stack>
        </form>
      </Paper>
    </Center>
  );
};

login.getLayout = (page) => <PageLayout>{page} </PageLayout>;

export default login;
