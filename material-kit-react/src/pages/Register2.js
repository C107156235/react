import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { AppContext } from "../Context";
import { useContext } from "react";



const Register2 = () => {
  const navigate = useNavigate();
  const { insertUser5, users2, detail, prodnm, setProdNm } = useContext(AppContext);
  console.log();
  const myfunction = (value) => {
    insertUser5({ OId2: detail, PI2: value.email, qty: value.password, discount: value.descript });
  };
  const myFunction2 = (e) => {
    const a = e.target.value;
    const map1 = users2.map((user2) => {
      return user2.PId === a ? user2.PN : null;
    });
    const filter1 = map1.filter(map1 => map1 !== null)
    setProdNm(filter1);
  }
  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              password: '',
              descript: '',
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().max(255).required('ProdId is required'),
                password: Yup.string().max(255).required('Qty is required'),
                descript: Yup.string().max(255).required('discount is required'),

              })
            }
            onSubmit={(value) => {
              myfunction(value);
              navigate('/app/products1', { replace: true });

            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    insert orderdetail
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="ProdId"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={(e) => { handleChange(e); myFunction2(e); }}
                  type="text"
                  value={values.email}
                  variant="outlined"
                />
                {prodnm}
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Qty"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.password}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.descript && errors.descript)}

                  fullWidth
                  helperText={touched.descript && errors.descript}

                  label="Discount"
                  margin="normal"
                  name="descript"
                  onChange={handleChange}
                  type="text"
                  value={values.descript}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    insert
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register2;
