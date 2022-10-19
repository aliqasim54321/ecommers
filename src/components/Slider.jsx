import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import { Button } from '@mui/material';
import styled from "styled-components";
import light from "../images/light.png";


const Container = styled.div`
    width : 100%;
    height : 100vh;
    display: flex;
    position : relative;
`

const Arrow = styled.div`
    width :50px;
    height : 50px;
    background-color : white;
    border-radius : 50%;
    display:flex;
    align-items : center;
    justify-content : center;
    position : absolute;   
    top : 0;
    bottom : 0;
    left : ${props => props.direction === "left" && "10px"};
    right : ${props => props.direction === "right" && "10px"};
    margin :  auto;
    cursor : pointer;
    opacity : 0.6;
    z-index : 2;
    `;
const Wrapper = styled.div`
height : 100%;
display : flex;
transform: translateX(0vw)
`;

const Slide =styled.div `
width : 100vw;
height : 100vh;
    display : flex;
    align-items : center;
 
`;

const ImgContainer =styled.div `
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
height : 65%;
width : 100%

`

const InfoContainer =styled.div `
    flex : 1;
    padding : 50px;
    `;

const Title = styled.h1`
font-size : 70px
font-weight:1000;`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size : 20px;
    font-weight:500;
    letter-spacing : 3px;
`;
const Button = styled.button` 
    padding : 10px 
    font-size : 20px;
    background-color: Transparent;
    cursor : pointer;
    `; 


const Slider =  () => {
    
    // const[slideIndex,setlideIndex] = usestate(0);
    
    const handleClick = (direction)  => {

    } ; 

  return (
    <Container>
      <Arrow direction = "left" onClick={()=> handleClick("left")}>
      <ArrowLeftIcon/>  
        </Arrow>

        <Wrapper>

            <Slide bg = "33F6FF">

            <ImgContainer>

                <Image src = {light} />
            </ImgContainer>

            <InfoContainer>
                <Title>Summer SALE</Title>
                <Desc> DONT COMPARE ON PIRCE  </Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>        


            </Slide>
            
            <Slide bg = "90F384">

                <ImgContainer>

                    <Image src = {light} />
                </ImgContainer>

                <InfoContainer>
                    <Title>WINTER SALE</Title>
                    <Desc> DONT COMPARE ON PIRCE  </Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>        


            </Slide>
            <Slide bg = "FF94EF">

<ImgContainer>

    <Image src = {light} />
</ImgContainer>

<InfoContainer>
    <Title>POPULAR SALE</Title>
    <Desc> DONT COMPARE ON PIRCE  </Desc>
    <Button>SHOW NOW</Button>
</InfoContainer>        


</Slide>
        </Wrapper>
        <Arrow direction = "right" onClick={()=> handleClick("right")} >
      <ArrowRightIcon/> 
        </Arrow>

    </Container>
  )
}

export default Slider
