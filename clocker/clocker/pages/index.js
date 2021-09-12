import {
  Container, 
  Box, 
  Input, 
  Button, 
  Text, 
  FormControl, 
  FormLabel, 
  FormHelperText
} from '@chakra-ui/react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Logo } from './../components';

const validationSchema = yup.object().shape({
  email: yup.string().email('not valid E-mail').required('This field is required'),
  password: yup.string().required('This field is required'),
  username: yup.string().required('This field is required'),
});

export default function Home() {
  const formik = useFormik ({
    onSubmit: () => { },
    validationSchema,
    initialValues: {
      email: '',
      username: '',
      password: ''
    }
  })

  return (

    <Container p={4} centerContent>
      <Logo />
      
      <Box p={4} mt={8}> 
        <Text>Your calendar.</Text>
      </Box>
      
      <Box> 
        <FormControl id="email" p={4} isRequired> 
          <FormLabel>Email</FormLabel>
          <Input type="email" value={formik.values.email}  onChange={formik.handleChange} onBlur={formik.handleBlur}/> 
          {formik.touched.email && <FormHelperText textColor="#e74c3c">{formik.errors.email}</FormHelperText>}
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.password && <FormHelperText textColor="#e74c3c">{formik.errors.password}</FormHelperText>}
        </FormControl>

        <Box display="flex" p={4} flexDirection="row" alignItems="center">
          <Text> clocker.work/</Text>
          <FormControl id="username" isRequired>
            <Input type="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.username && <FormHelperText textColor="#e74c3c">{formik.errors.username}</FormHelperText>}
          </FormControl> 
        </Box>

        <Box p={4}>
          <Button width="100%" onClick={formik.handleSubmit}>Go ahead</Button>
        </Box>


      </Box>
    </Container>
  )
}