import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { loginSuccess } from "./authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Mock login
    if (!email || !password) return;

    dispatch(
      loginSuccess({
        id: "1",
        id_company: "1",
        name: "Cesar Mazariegos",
        user: "camazariegos",
        email: "admin@test.com",
        role: email.includes("admin") ? "ADMIN" : "AGENT",
      })
    );

    navigate("/cases");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h5" gutterBottom>
        Iniciar sesión
      </Typography>

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Entrar
      </Button>
    </Container>
  );
}
