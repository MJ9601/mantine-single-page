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

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseBackend/firebaseConfig";
import { useGlobalState } from "../../cms/globalStateProvider";
import { useRouter } from "next/router";

const register = () => {
  const [{ user }, dispatch] = useGlobalState();

  const router = useRouter();

  const registerForm = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmdPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length < 6 ? "Invalid Password" : null),
      confirmdPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const _user = userCredential.user;
        dispatch({ type: "LOGIN", user: _user });
        router.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });

  return (
    <Center style={{ width: "100%", height: "70vh" }}>
      <Paper shadow="md" p="md">
        <form
          onSubmit={registerForm.onSubmit((values) => {
            signUp(values.email, values.password);
          })}
        >
          <Stack>
            <TextInput
              placeholder="Username"
              label="Full name"
              required
              {...registerForm.getInputProps("username")}
            />
            <TextInput
              placeholder="Email"
              label="Your Email"
              required
              {...registerForm.getInputProps("email")}
            />
            <PasswordInput
              placeholder="Password"
              label="Password"
              description="Password must include at least one letter, number and special character"
              required
              {...registerForm.getInputProps("password")}
            />
            <PasswordInput
              placeholder="Password"
              label="Comfirm Password"
              required
              {...registerForm.getInputProps("confirmdPassword")}
            />
            <Button type="submit">Sign Up</Button>
          </Stack>
        </form>
      </Paper>
    </Center>
  );
};

register.getLayout = (page) => <PageLayout>{page} </PageLayout>;

export default register;
