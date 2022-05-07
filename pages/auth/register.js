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

import { signInWithEmailAndPassword } from "firebase/auth";
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

  const signInUser = (email, password) => {
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential?.user;
        dispatch({ type: "LOGIN", user: user });
        router.push("/");
        console.log(user);
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
      });
  };
  return (
    <Center style={{ width: "100%", height: "70vh" }}>
      <Paper shadow="md" p="md">
        <form
          onSubmit={registerForm.onSubmit((values) => {
            signInUser(values.email, values.password);
            console.log(values.email);
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
