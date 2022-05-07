import {
  Alert,
  Button,
  Center,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { AlertCircle } from "tabler-icons-react";
import { useGlobalState } from "../../cms/globalStateProvider";
import { auth } from "../../firebaseBackend/firebaseConfig";
import PageLayout from "../../layout/PageLayout";

const Login = () => {
  const [{}, dispatch] = useGlobalState();

  const router = useRouter();
  const [error, setError] = useState(false);

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

  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential?.user;
        dispatch({ type: "LOGIN", user: user });
        router.push("/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
      });
  };

  return (
    <Center style={{ width: "100%", height: "70vh" }}>
      <Paper shadow="md" p="md">
        <form
          onSubmit={loginFrom.onSubmit((values) =>
            signInUser(values.email, values.password)
          )}
        >
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
            {error && (
              <Group grow>
                <Alert
                  icon={<AlertCircle size={18} />}
                  title="Error!"
                  color="red"
                >
                  Something went wrong!
                </Alert>
              </Group>
            )}
          </Stack>
        </form>
      </Paper>
    </Center>
  );
};

Login.getLayout = (page) => <PageLayout>{page} </PageLayout>;

export default Login;
