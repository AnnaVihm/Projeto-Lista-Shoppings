import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Container,
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import api from "../util/api";

export default function Login() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await api.post("/api/auth", {
      email: email,
      password: password,
    });
    if (resp.data) {
      localStorage.setItem("token", resp.data.accessToken);
    } else {
      toast({
        title: "Erro de login",
        description: "Credenciais inválidas.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container mt={"10%"} color="white">
      <Card>
        <CardBody textAlign={"center"}>
          <Heading color={"teal"} size="md">
            Login
          </Heading>
          <Box as="form" onSubmit={handleLogin}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme={"teal"}
              width={"100%"}
              mt={5}
              //   isLoading={isLoading}
            >
              Entrar
            </Button>
          </Box>
        </CardBody>
      </Card>
    </Container>
  );
}
