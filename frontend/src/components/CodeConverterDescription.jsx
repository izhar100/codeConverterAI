import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const CodeConverterDescription = () => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Heading as="h1" size="lg" mb={4} textAlign={"center"}>
        About the App
      </Heading>
      <Text fontSize="md">
        The Code Converter app is a powerful and user-friendly tool that enables developers to
        effortlessly convert code snippets between different programming languages. With support
        for C, C++, Java, JavaScript, and Python, this app offers a wide range of language options,
        catering to a diverse community of developers.
      </Text>
      <Heading as="h2" size="md" mt={4} mb={2}>
        Features:
      </Heading>
      <Text fontSize="md" pl={"20px"}>
        <ul>
          <li>
            <strong>Code Conversion:</strong> The heart of the app lies in its ability to convert
            code snippets from one programming language to another.
          </li>
          <li>
            <strong>Code Debugging:</strong> To enhance the development experience, the Code
            Converter app also includes a code debugging feature.
          </li>
          <li>
            <strong>Code Quality Check:</strong> The app goes a step further in empowering
            developers by offering code quality checks.
          </li>
          <li>
            <strong>Visual Studio Dark Theme:</strong> The app adopts the Visual Studio Dark Theme
            for the Monaco editor, providing developers with a familiar and comfortable coding
            environment.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> The Code Converter app boasts an intuitive
            and user-friendly interface that allows users to seamlessly interact with the tool.
          </li>
        </ul>
      </Text>
      <Heading as="h2" size="md" mt={4} mb={2}>
        Technical Stack:
      </Heading>
      <Text fontSize="md" pl={"20px"}>
        <ul>
          <li>
            <strong>Frontend:</strong> The frontend of the app is built using ReactJS, a popular and
            versatile JavaScript library for building user interfaces.
          </li>
          <li>
            <strong>Backend:</strong> The backend is powered by NodeJS, a fast and scalable
            server-side runtime environment.
          </li>
          <li>
            <strong>Monaco Editor:</strong> The Monaco editor is seamlessly integrated into the app's
            frontend to offer a sophisticated code editing experience.
          </li>
          <li>
            <strong>ChatGPT API:</strong> The ChatGPT API acts as the core language model, enabling
            the app to perform accurate code conversions and quality checks.
          </li>
        </ul>
      </Text>
      <Heading as="h2" size="md" mt={4} mb={2}>
        Conclusion:
      </Heading>
      <Text fontSize="md">
        The Code Converter app serves as an indispensable companion for developers, streamlining
        their workflow, and promoting cross-language development. Its combination of code
        conversion, debugging, and quality analysis capabilities empowers developers to explore new
        languages, optimize their code, and enhance overall coding efficiency.
      </Text>
      <Text fontSize="md">
        With an intuitive interface and a rich set of features, the Code Converter app stands as a
        valuable tool in the arsenal of every developer seeking to tackle the challenges of
        multi-language development.
      </Text>
    </Box>
  );
};

export default CodeConverterDescription;
