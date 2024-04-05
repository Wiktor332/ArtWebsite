'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";
import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react";
// import sendContactForm from '../../lib/api'

const initValues = { name: "", email: "", subject: "", message: "",};
const initState = {values: initValues};

export default function Contact() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const {values, isLoading} = state;

  const onBlur = ({target}) => setTouched((prev) => ({...prev,
    [target.name]: true
  }))

  const handleChange = ({target}) => setState((prev) => ({
    ...prev, 
    values: {
      ...prev.values,
      [target.name]: target.value
    },
}));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading:true
    }));
    await sendContactForm(values);
  };

  return (
    <Container maxW='450px' mt={12}>
        <Heading fontFamily="mono">Kontakt:</Heading>

        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel fontFamily="mono">Imię Nazwisko</FormLabel>
          <Input
            type='text'
            name="name"
            errorBorderColor="red.300"
            value={values.name} 
            onChange={handleChange}
            onBlur={onBlur}
            />
            <FormErrorMessage>Wymagane</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
          <FormLabel fontFamily="mono">Email</FormLabel>
          <Input
            type='text'
            name="email"
            errorBorderColor="red.300"
            value={values.email} 
            onChange={handleChange}
            onBlur={onBlur}
            />
            <FormErrorMessage>Wymagane</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={5}>
          <FormLabel fontFamily="mono">Temat</FormLabel>
          <Input
            type='text'
            name="subject"
            errorBorderColor="red.300"
            value={values.subject} 
            onChange={handleChange}
            onBlur={onBlur}
            />
            <FormErrorMessage>Wymagane</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
          <FormLabel fontFamily="mono">Wiadomość</FormLabel>
          <Textarea
            name="message"
            errorBorderColor="red.300"
            value={values.message} 
            rows={4}
            onChange={handleChange}
            onBlur={onBlur}
            />
            <FormErrorMessage>Wymagane</FormErrorMessage>
        </FormControl>

        <Button
          variant="outline"
          colorScheme="black"
          isLoading = {isLoading}
          disabled={!values.name || !values.email || !values.subject || !values.message}
          onClick={onSubmit}
          >Wyślij</Button>
    </Container>
  );
}
