//@ts-nocheck
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import FieldArray from "../components/fieldArray";
import {
  ChakraProvider,
  Box,
  VStack,
  Code,
  Grid,
  Input,
  Radio,
  Text,
  Checkbox,
  extendTheme,
  Button,
  Heading,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  CloseButton,
  useTheme,
  Tooltip,
  RadioGroup,
  Stack,
  Textarea
} from '@chakra-ui/react';
import { IconContext } from "react-icons";
import { IoInformationCircle } from 'react-icons/io5';
import FormPreview from '../components/FormPreview';
import ErrorMessage from '../components/ErrorMessage';
import JSONViewer from '../components/JSONViewer';
import { Link } from '../lib/Link';
import Collapsible from '../components/Collapsible';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import Head from 'next/head';

const defaultValues = {
  message: {
    content: 'Fill out the form below!'
  },
  forms: [
    {
      webhook_url: '',
      button: {
        label: 'Open Form',
        style: '1'
      },
      modal: {
        title: 'Example Form',
        components: [
          {
            type: 1,
            components: [
              {
                type: 4,
                label: 'Example Text Input',
                style: '1',
                placeholder: 'Write text here',
                value: '',
                min_length: '0',
                max_length: '1024',
                required: true
              }
            ]
          }
        ]
      }
    }
  ]
};

const clearValues = {
  message: {
    content: ''
  },
  forms: [
    {
      webhook_url: '',
      button: {
        label: '',
        style: '1'
      },
      modal: {
        title: '',
        components: [
          {
            type: 1,
            components: [
              {
                type: 4,
                label: '',
                style: '1',
                placeholder: '',
                value: '',
                min_length: '0',
                max_length: '1024',
                required: true
              }
            ]
          }
        ]
      }
    }
  ]
};


function App() {

  const {
    control,
    register,
    watch,
    handleSubmit,
    getValues,
    reset,
    setValue,
    formState,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    defaultValues
  });

  const onSubmit = (data: any) => console.log("data", data);

  const [displayForm, setDisplayForm] = useState(0)

  return (
    <>
      <Grid p={3} paddingBottom={0} gridTemplateColumns='repeat(auto-fit, minmax(min(400px, 100%), 1fr))' gap='12px' >
        <VStack spacing={3} alignItems='flex-start' overflowY='scroll' maxHeight='92.3vh'>
          <Button onClick={() => reset(clearValues)}>Clear All</Button>
          <Box width='100%'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box width='100%' marginBottom="8px">
                <FormLabel htmlFor="message.content">Message</FormLabel>
                <textarea style={{ minHeight: '40px', height: '40px' }} {...register('message.content')} id='message.content' />
              </Box>

              <FieldArray
                {...{ control, register, defaultValues, getValues, setValue, formState, watch, displayForm, setDisplayForm }}
              />

            </form>
          </Box>
          <VStack width='100%' align='flex-start'>
            <Heading size='sm' marginBottom='5px'>JSON Data</Heading>
            <JSONViewer>{JSON.stringify(watch(), null, 2)}</JSONViewer>
            <HStack>
              <Button
                variant='success'
                disabled={!formState.isValid}
                onClick={() => {
                  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
                    JSON.stringify(watch(), null, 2)
                  )}`;
                  const link = document.createElement("a");
                  link.href = jsonString;
                  link.download = 'form.json';
                  link.click();
                }}
              >
                Download JSON
              </Button>
              {!formState.isValid && <ErrorMessage>Fill out the fields correctly before downloading the JSON file.</ErrorMessage>}
            </HStack>
            <Text fontSize='0.875rem' color='#a3a6aa'>After downloading use /form create on the <Link href='https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D942858850850205717%26permissions%3D3072%26scope%3Dapplications.commands%2520bot'>forms bot</Link> and upload the JSON file.</Text>
          </VStack>
          <Box className="text-sm pt-5 pb-10" paddingBottom='10px'>
            <p className="font-medium">©️ 2022 Forms Discord Bot</p>
            <p className="text-muted">
              Not affiliated with Discord, Inc.
              <br />
              Discord is a registered trademark of Discord, Inc.
              <br />
              This website is <Link href='https://github.com/Antouto/form-builder'>open-source</Link>
            </p>
          </Box>
        </VStack>
        <FormPreview message={watch('message')} forms={watch('forms')} displayForm={displayForm} setDisplayForm={setDisplayForm} />
      </Grid>
    </>
  );
}

export default App;