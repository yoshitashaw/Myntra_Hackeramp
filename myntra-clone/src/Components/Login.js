import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, TextField, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import insta from '../Assets/Instagram.png';
import bg from '../Assets/insta.png';
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';
import img5 from '../Assets/img5.png';
import img6 from '../Assets/img6.png';
import img7 from '../Assets/img7.png';

// Styled components
const StyledTypography = styled(Typography)(({ theme }) => ({
    color: 'grey',
    textAlign: 'center'
}));

const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    backgroundColor: 'transparent',
    color: 'blue',
    textDecoration: 'underline',
    padding: 0,
    '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'none'
    }
}));

const StyledCard = styled(Card)(({ theme }) => ({
    height: '5vh',
    marginTop: '2%'
}));

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();
    const { login, signup, user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleSubmit = async () => {
        try {
            setError('');
            setLoading(true);
            if (isSignUp) {
                await signup(email, password, username);
            } else {
                await login(email, password);
            }
            setLoading(false);
            navigate('/');
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError('');
            }, 2000);
            setLoading(false);
        }
    };

    return (
        <div className="loginWrapper">
            <div className="imgcar" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
                <div className="car">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={7}
                        naturalSlideWidth={238}
                        naturalSlideHeight={423}
                        hasMasterSpinner
                        isPlaying={true}
                        infinite={true}
                        dragEnabled={false}
                        touchEnabled={false}
                        interval={2000}
                    >
                        <Slider>
                            <Slide index={0}><Image src={img1} /></Slide>
                            <Slide index={1}><Image src={img2} /></Slide>
                            <Slide index={2}><Image src={img3} /></Slide>
                            <Slide index={3}><Image src={img4} /></Slide>
                            <Slide index={4}><Image src={img5} /></Slide>
                            <Slide index={5}><Image src={img6} /></Slide>
                            <Slide index={6}><Image src={img7} /></Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>
            <div className="loginCard">
                <Card variant="outlined">
                    <div className="insta-logo">
                        <img src={insta} alt="" />
                    </div>
                    <CardContent>
                        {error && <Alert severity="error">{error}</Alert>}
                        {isSignUp && (
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                size="small"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        )}
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            size="small"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            size="small"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {!isSignUp && (
                            <Typography sx={{ textAlign: 'center' }} color="primary" variant="subtitle1">
                                Forget Password ?
                            </Typography>
                        )}
                    </CardContent>
                    <CardActions>
                        <Button
                            color="primary"
                            fullWidth
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {isSignUp ? 'Sign Up' : 'Log In'}
                        </Button>
                    </CardActions>
                </Card>
                <StyledCard variant="outlined">
                    <CardContent>
                        <StyledTypography variant="subtitle1">
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                            <StyledButton onClick={() => setIsSignUp(!isSignUp)}>
                                {isSignUp ? 'Log In' : 'Sign Up'}
                            </StyledButton>
                        </StyledTypography>
                    </CardContent>
                </StyledCard>
            </div>
        </div>
    );
}
export default Login;


// import * as React from 'react';
// import { useContext,useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import { makeStyles } from '@mui/styles';
// import Alert from '@mui/material/Alert';
// import '../App.css'
// import insta from '../Assets/Instagram.png'
// import TextField from '@mui/material/TextField';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import {Link} from  'react-router-dom';
// import bg from '../Assets/insta.png'
// import img1 from '../Assets/img1.png';
// import img2 from '../Assets/img2.png';
// import img3 from '../Assets/img3.png';
// import img4 from '../Assets/img4.png';
// import img5 from '../Assets/img5.png';
// import img6 from '../Assets/img6.png';
// import img7 from '../Assets/img7.png';
// import { AuthContext } from '../Context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const store = useContext(AuthContext)
//     console.log(store)
//     const useStyles = makeStyles({
//         text1:{
//             color:'grey',
//             textAlign:'center'
//         },
//         text2:{
//             textAlign:'center'
//         },
//         card2:{
//             height:'5vh',
//             marginTop:'2%'
//         }
//     })
//     const classes = useStyles();
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');
//     const [error,setError] = useState('');
//     const [loading,setLoading] = useState(false);
//     const navigate = useNavigate();
//     const {login} = useContext(AuthContext);

//     const handleClick = async() => {
//         try{
//             setError('');
//             setLoading(true)
//             let res = await login(email,password);
//             setLoading(false);
//             navigate('/')
//         }catch(err){
//             setError(err);
//             setTimeout(()=>{
//                 setError('')
//             },2000);
//             setLoading(false);
//         }
//     }

//   return (
//       <div className="loginWrapper">
//           <div className="imgcar" style={{backgroundImage:'url('+bg+')',backgroundSize:'cover'}}>
//               <div className="car">
//                 <CarouselProvider
//                     visibleSlides={1}
//                     totalSlides={7}
//                     // step={3}
//                     naturalSlideWidth={238}
//                     naturalSlideHeight={423}
//                     hasMasterSpinner
//                     isPlaying={true}
//                     infinite={true}
//                     dragEnabled={false}
//                     touchEnabled={false}
//                     interval={2000}
//                 >
//                     <Slider>
//                         <Slide index={0}><Image src={img1}/></Slide>
//                         <Slide index={1}><Image src={img2}/></Slide>
//                         <Slide index={2}><Image src={img3}/></Slide>
//                         <Slide index={3}><Image src={img4}/></Slide>
//                         <Slide index={4}><Image src={img5}/></Slide>
//                         <Slide index={5}><Image src={img6}/></Slide>
//                         <Slide index={6}><Image src={img7}/></Slide>
//                     </Slider>
//                 </CarouselProvider>
//               </div>
//           </div>
//           <div className="loginCard">
//             <Card variant="outlined">
//                 <div className="insta-logo">
//                     <img src={insta} alt="" />
//                 </div>
//                 <CardContent>
//                     {error!='' && <Alert severity="error">{error}</Alert>}
//                     <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//                     <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)} />
//                     <Typography className={classes.text2} color="primary" variant="subtitle1">
//                         Forget Password ?
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button color="primary" fullWidth={true} variant="contained" onClick={handleClick} disabled={loading}>
//                     Log in
//                     </Button>
//                 </CardActions>
//             </Card>
//             <Card variant="outlined" className={classes.card2}>
//                 <CardContent>
//                     <Typography className={classes.text1} variant="subtitle1">
//                         Don't have an account ? <Link to="/signup" style={{textDecoration:'none'}}>Signup</Link>
//                     </Typography>
//                 </CardContent>
//             </Card>
//           </div>
//       </div>
//   );
// }
// export default Login
