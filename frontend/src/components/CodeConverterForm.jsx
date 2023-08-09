import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Select } from '@chakra-ui/react';
import MonacoEditor from 'react-monaco-editor';
import api from '../services/api';
import CodeConverterDescription from './CodeConverterDescription';

const CodeConverterForm = () => {
    const [sourceLanguage, setSourceLanguage] = useState('javascript');
    const [targetLanguage, setTargetLanguage] = useState('python');
    const [inputCode, setInputCode] = useState('');
    const [convertedCode, setConvertedCode] = useState('//your output will show here');
    const [loading, setLoading] = useState(false)
    const [activity, setActivity] = useState("")

    const handleConvert = async (e) => {
        // e.preventDefault();
        console.log(sourceLanguage, targetLanguage, inputCode)
        setLoading(true)
        try {
            const response = await api.convertCode(inputCode, sourceLanguage, targetLanguage);
            setActivity("Converted Code:")
            setConvertedCode(response.data.convertedCode);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setActivity("ERROR")
            console.error('Error converting code:', error);
            setConvertedCode('Error converting code. Please try again.');
        }
    };

    const handleEditorChange = (value) => {
        setInputCode(value);
    };
    const handleDebug = async () => {
        console.log(sourceLanguage, targetLanguage, inputCode)
        setLoading(true)
        try {
            const response = await api.debugCode(inputCode, sourceLanguage, targetLanguage);
            setActivity("Debuged Code:")
            setConvertedCode(response.data.convertedCode);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setActivity("ERROR")
            console.error('Error Debugging code:', error);
            setConvertedCode('Error Debugging code. Please try again.');
        }
    }
    const handleQuality = async () => {
        console.log(sourceLanguage, targetLanguage, inputCode)
        setLoading(true)
        try {
            const response = await api.checkQualityCode(inputCode, sourceLanguage, targetLanguage);
            setActivity("Code Quality:")
            setConvertedCode(response.data.convertedCode);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setActivity("ERROR")
            console.error('Error checking code quality:', error);
            setConvertedCode('Error checking code quality. Please try again.');
        }
    }

    return (
        <Box p={4} borderWidth="1px" borderRadius="md">
            <Flex gap={"20px"} flexDirection={{ xl: "row", lg: "row", md: "row", sm: "column", base: "column" }} justifyContent={"center"}>
                <Box w={"100%"}>
                    <FormControl mb={4}>
                        <FormLabel>Source Language:</FormLabel>
                        <Select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)} bgColor="#ffffff" color="#000000">
                            {/* Add options for different programming languages */}
                            <option value="javascript">JavaScript</option>
                            <option value="java">Java</option>
                            <option value="C">C</option>
                            <option value="C++">C++</option>
                            <option value="python">Python</option>
                        </Select>
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Code Editor:</FormLabel>
                        <MonacoEditor
                            language={sourceLanguage}
                            value={inputCode}
                            height={"80vh"}
                            onChange={handleEditorChange}
                            theme="hc-black"
                        />
                    </FormControl>
                </Box>
                <Box w={"100%"}>
                    <FormControl mb={4}>
                        <FormLabel>Target Language:</FormLabel>
                        <Select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} bgColor="#ffffff" color="#000000">
                            {/* Add options for different programming languages */}
                            <option value="javascript" disabled={sourceLanguage == "javascript"}>JavaScript</option>
                            <option value="java" disabled={sourceLanguage == "java"}>Java</option>
                            <option value="C" disabled={sourceLanguage == "C"}>C</option>
                            <option value="C++" disabled={sourceLanguage == "C++"}>C++</option>
                            <option value="python" disabled={sourceLanguage == "python"}>Python</option>
                        </Select>
                    </FormControl>
                    <Flex justifyContent={"space-between"}>
                        <Button colorScheme="blue" onClick={handleConvert}>
                            Convert Code
                        </Button>
                        <Button onClick={handleDebug} colorScheme="green">Debug Code</Button>
                        <Button onClick={handleQuality} colorScheme="purple">Code Quality</Button>
                    </Flex>
                    <Box mt={4}>
                        <Box as="h2" fontSize="lg" fontWeight="bold">
                            {
                                activity
                                    ?
                                    activity
                                    :
                                    "OUTPUT"
                            }
                        </Box>
                        <Box as="pre" whiteSpace="pre-wrap" borderRadius="md" p={2} bgColor={"#20152b"} color={"white"}>
                            {
                                loading ? "Loading... Please wait!!!"
                                    :
                                    convertedCode
                            }
                        </Box>
                    </Box>
                </Box>
            </Flex>
            <br />
            <CodeConverterDescription />
        </Box>
    );
};

export default CodeConverterForm;
