import styled from "styled-components";

export const Main = styled.div` 
`
export const Display = styled.div` 
display: flex;
`
export const Btns = styled.div` 
height: 56px;
background-color:#212121;
border-top:1.5px solid #303030;
display: flex;
align-items: center;
`
export const Card = styled.button` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
padding: 8px 12px;
background: #FFF0F5;
border-radius: 10px;
color: #030303;
border: 0;
margin-left:24px;
cursor: pointer;
:hover{
    background-color:#FFFFFF;
    transition: 1s;
    cursor: pointer;
}
`
export const Home = styled.button` 
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
background: #303030;
border: 0;
border-radius: 10px;
padding: 8px 12px;
margin-left:12px;
:hover{
    background-color:#404040;
    transition:0.5s;
    cursor: pointer;
}
`

export const Bar = styled.div` 
width: 240px;
background-color:#212121;
height: calc(100vh - 56px);
padding-left:20px;

/* :hover{ */
    overflow-y: scroll;
    ::-webkit-scrollbar{
    width: 8px;
}
::-webkit-scrollbar-track{
    background: #212121;
}
::-webkit-scrollbar-thumb{
    border-radius: 50px;
    background-color:#404040;
}
/* } */
`
export const Menu = styled.img` 

`
export const Content = styled.div` 
display: flex;
align-items: center;
padding-left:18px;

:hover{
    background-color:#404040;
    border-radius: 15px;
    margin-right:25px;
    transition:0.5s;
    cursor: pointer;
}
`
Content.Title = styled.h3` 
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
padding-left:28px;
line-height: 40px;
`
Content.Text = styled.h4` 
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
padding-left:25px;
line-height: 40px;
`
export const Hove = styled.div`
padding-top:10px;
`
export const Borde = styled.div` 
border : 1px solid #303030;
margin-right: 18px;
margin-top:20px;
margin-bottom:10px;
`
export const More = styled.div` 
display: flex;
align-items: center;
padding-left:23px;
:hover{
    background-color:#404040;
    border-radius: 15px;
    margin-right:25px;
    transition:0.5s;
    cursor: pointer;
}
`
Bar.Title = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #AAAAAA;
padding-left:18px;  
padding-top:18px;
padding-bottom:15px;
:hover{
    color: 	#ffff;
    cursor: pointer;
    transition: 0.5s;
}
`
export const User = styled.div` 
display: flex;
align-items: center;
padding-left:18px;
:hover{
    background-color:#404040;
    border-radius: 15px;
    margin-right:25px;
    transition:0.5s;
    cursor: pointer;
}
`
export const Avatar = styled.img ` 
border-radius: 50%;
`
User.Title =styled.h4` 
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
padding-left:22px;
line-height: 40px;
`
export const Col = styled.div` 
padding-top:24px;
`
export const Music = styled.img` 
width: 276px;
height: 155px;
`
Col.Title = styled.h3` 
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 18px;
color: #FFFFFF;
width: 230px;
padding-bottom:4px;
`
export const Ave = styled.img` 
width: 36px;
height: 36px;
border-radius:50%;
`
export const Flex = styled.div` 
display: flex;
gap: 10px;
padding-top:12px;
`
Col.Text = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #AAAAAA;
padding-left:45px;
`
export const Row = styled.div` 
height: calc(100vh - 112px);
background-color:black;
width: 1300px;
overflow-y:auto;
display: flex;
flex-wrap:wrap;
justify-content:space-around;
::-webkit-scrollbar{
    width: 8px;
}
::-webkit-scrollbar-track{
    background: #212121;
}
::-webkit-scrollbar-thumb{
    border-radius: 50px;
    background-color:#404040;
}
`

