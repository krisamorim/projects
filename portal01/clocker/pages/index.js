import { useFormik } from 'formik'
import * as yup from 'yup'

import {
  Container, 
  Box, 
  Input, 
  Button, 
  Text, 
  FormControl, 
  FormLabel, 
  FormHelperText
} from '@chakra-ui/react'

import { Logo } from './../components'

const validationSchema = yup.object().shape({
  email: yup.string().email('Not valid E-mail').required('This field is required'),
  password: yup.string().required('This field is required'),
  username: yup.string().required('This field is required'),
})

export default function Home() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormik({
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
        <Text>Your Share calendar</Text>
      </Box>
      
      <Box> 
        <FormControl id="email" p={4} isRequired> 
          <FormLabel>Email</FormLabel>
          <Input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/> 
          {touched.email && <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>}
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
          {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>}
        </FormControl>

        <Box display="flex" flexDirection="row" alignItems="center">
          <Text> clocker.work/</Text>
          <FormControl id="username" p={4} isRequired>
            <Input type="username" value={values.username} onChange={handleChange} onBlur={handleBlur}/>
            {touched.username && <FormHelperText textColor="#e74c3c">{errors.username}</FormHelperText>}
          </FormControl> 
        </Box>

        <Box p={4}>
          <Button width="100%" onClick={handleSubmit}>Go ahead</Button>
        </Box>


      </Box>
    </Container>
  )
}