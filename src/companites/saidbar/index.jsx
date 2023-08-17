import React, { useState } from 'react'
import { Avatar, Ave, Bar, Borde, Btns, Card, Col, Content, Display, Flex, Home, Hove, Main, Menu, More, Music, Row, User } from './style'
import home from '../../assets/img/Group 1 (2).png'
import navi from '../../assets/img/Group 2.png'
import vid from '../../assets/img/Group 3.png'
import grop5 from '../../assets/img/Group 5.png'
import grop6 from '../../assets/img/Group 6.png'
import grop7 from '../../assets/img/Group 7.png'
import grop8 from '../../assets/img/Group 8.png'
import grop9 from '../../assets/img/Group 9.png'
import grop10 from '../../assets/img/Group 10.png'
import user1 from '../../assets/img/User-Avatar 1.png'
import user2 from '../../assets/img/User-Avatar 2.png'
import user3 from '../../assets/img/User-Avatar 3.png'
import user4 from '../../assets/img/User-Avatar 4.png'
import user5 from '../../assets/img/User-Avatar 5.png'
import user6 from '../../assets/img/User-Avatar 6.png'
import user7 from '../../assets/img/User-Avatar 7.png'
import grop20 from '../../assets/img/Group 20.png'
import grop21 from '../../assets/img/Group 21.png'
import grop22 from '../../assets/img/Group 22.png'
import grop23 from '../../assets/img/Group 23.png'
import down from '../../assets/img/down.jpg'
import calm from '../../assets/img/calm.jpg'
import eminem from '../../assets/img/eminem.jpg'
import emine from '../../assets/img/emin.jpg'
import peter from '../../assets/img/peter.jpg'
import imag from '../../assets/img/ima.jpg'
import stome from '../../assets/img/sto.jpg'
import strome from '../../assets/img/strome.jpg'
import bilie from '../../assets/img/bilie.jpg'
import rof from '../../assets/img/rofile.jpg'
import imagee from '../../assets/img/image 2.png'
import tik from '../../assets/img/image 3.png'
import twit from '../../assets/img/image 4.png'
import netlif from '../../assets/img/image 5.png'
import yube from '../../assets/img/image 6.png'
import tubee from '../../assets/img/image 7.png'
import tubeem from '../../assets/img/image 8.png'




export default function Saidbar() {
  const [active,setActive]  = useState(true)
  return (
   <Display>
    <Bar>
    <Hove>
    <Content>
    <Menu src={home}></Menu>
    <Content.Title>Home</Content.Title>
    </Content>
    <Content>
    <Menu src={navi}></Menu>
    <Content.Text>Explore</Content.Text>
    </Content>
    <Content>
    <Menu src={vid  }></Menu>
    <Content.Text>Subscriptions</Content.Text>
    </Content>
    </Hove>
    <Borde></Borde>
    <Hove>
    <Content>
    <Menu src={grop5}></Menu>
    <Content.Title>Lİbrary</Content.Title>
    </Content>
    <Content>
    <Menu src={grop6}></Menu>
    <Content.Text>History</Content.Text>
    </Content>
    <Content>
    <Menu src={grop7}></Menu>
    <Content.Text>Your Videos</Content.Text>
    </Content>
    <Content>
    <Menu src={grop8}></Menu>
    <Content.Text>Watch Later</Content.Text>
    </Content>
    <Content>
    <Menu src={grop9}></Menu>
    <Content.Text>Liked Videos</Content.Text>
    </Content>
    <More>
    <Menu src={grop10}></Menu>
    <Content.Text>Show More</Content.Text>
    </More>
    </Hove>
    <Borde></Borde>
    <Bar.Title>SUBSCRIPTIONS</Bar.Title>
    <User>
      <Avatar src={user1}></Avatar>
      <User.Title>James Gouse</User.Title>
    </User>
    <User>
      <Avatar src={user2}></Avatar>
      <User.Title>Alan Cooper</User.Title>
    </User>
    <User>
      <Avatar src={user3}></Avatar>
      <User.Title>Marcus Levin</User.Title>
    </User>
    <User>
      <Avatar src={user4}></Avatar>
      <User.Title>Alexis Sears</User.Title>
    </User>
    <User>
      <Avatar src={user5}></Avatar>
      <User.Title>Jesica Lambert</User.Title>
    </User>
    <User>
      <Avatar src={user6}></Avatar>
      <User.Title>Anna White</User.Title>
    </User>
    <User>
      <Avatar src={user7}></Avatar>
      <User.Title>Skylar Dias</User.Title>
    </User>
    <More>
    <Menu src={grop10}></Menu>
    <Content.Text>Show 13 more</Content.Text>
    </More>
    <Borde></Borde>
    <Content>
    <Menu src={grop20}></Menu>
    <Content.Title>Youtube Premium</Content.Title>
    </Content>
    <Content>
    <Menu src={grop21}></Menu>
    <Content.Text>Gaming</Content.Text>
    </Content>
    <Content>
    <Menu src={grop22}></Menu>
    <Content.Text>Live</Content.Text>
    </Content>
    <Content>
    <Menu src={grop23}></Menu>
    <Content.Text>Sports</Content.Text>
    </Content>
   </Bar>
   <Main>
    <Btns>
      <Card>All</Card>
      <Home>Music</Home>
      <Home>VideoGame</Home>
      <Home>Online Chat</Home>
      <Home>Animation</Home>
      <Home>Pop</Home>
      <Home>Danger Film</Home>
      <Home>Football</Home>
      <Home>New Film</Home>
      <Home>On air now</Home>
      <Home>Action and adventure</Home>
      <Home>Viwed</Home>
      <Home>Recently publi</Home>
    </Btns>
    <Row>
    <Col>
    <Music src={tik}></Music>
    <Flex>
      <Ave src={user6}></Ave>
      <Col.Title>Instagram Official Music Video 2023</Col.Title>
    </Flex>
    <Col.Text>Instagram</Col.Text>
    <Col.Text>105 mln Views .8 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={down}></Music>
    <Flex>
      <Ave src={calm}></Ave>
      <Col.Title>Baby Calm Down FULL HD | Selena Gomez & Rema Official Music Video 2023</Col.Title>
    </Flex>
    <Col.Text>Rema</Col.Text>
    <Col.Text>15 mln Views .1 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={eminem}></Music>
    <Flex>
      <Ave src={emine}></Ave>
      <Col.Title>Eminem - Mockingbird [Official Music Video]</Col.Title>
    </Flex>
    <Col.Text>Eminem</Col.Text>
    <Col.Text>803 mln Views .17 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={imag}></Music>
    <Flex>
      <Ave src={peter}></Ave>
      <Col.Title>Peter & Gwen┃hold on (Edit)</Col.Title>
    </Flex>
    <Col.Text>DEX</Col.Text>
    <Col.Text>2.9 mln Views .2 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={stome}></Music>
    <Flex>
      <Ave src={strome}></Ave>
      <Col.Title>Stromae Alors on danse(making of).mpg</Col.Title>
    </Flex>
    <Col.Text>Estudeios25</Col.Text>
    <Col.Text>29 mln Views .10 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={bilie}></Music>
    <Flex>
      <Ave src={rof}></Ave>
      <Col.Title>Billie Eilish, Khalid - Lovely</Col.Title>
    </Flex>
    <Col.Text>Billie Eilish</Col.Text>
    <Col.Text>1.5 mlrd Views .5 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={imagee}></Music>
    <Flex>
      <Ave src={user7}></Ave>
      <Col.Title>YouTube shorts </Col.Title>
    </Flex>
    <Col.Text>Shorts</Col.Text>
    <Col.Text>999 mln Views .10 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={tik}></Music>
    <Flex>
      <Ave src={user6}></Ave>
      <Col.Title>Instagram Official Music Video 2023</Col.Title>
    </Flex>
    <Col.Text>Instagram</Col.Text>
    <Col.Text>105 mln Views .8 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={twit}></Music>
    <Flex>
      <Ave src={user5}></Ave>
      <Col.Title>Tik tok trend video</Col.Title>
    </Flex>
    <Col.Text>Tik Tok</Col.Text>
    <Col.Text>503 mln Views</Col.Text>
    </Col>
    <Col>
    <Music src={netlif}></Music>
    <Flex>
      <Ave src={user4}></Ave>
      <Col.Title>Netflix Official video</Col.Title>
    </Flex>
    <Col.Text>Netflix</Col.Text>
    <Col.Text>15 mln Views .1 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={yube}></Music>
    <Flex>
      <Ave src={user3}></Ave>
      <Col.Title>Miyagi Official Music Video 2023</Col.Title>
    </Flex>
    <Col.Text>Endshpil</Col.Text>
    <Col.Text>908 mln Views .5 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={tubee}></Music>
    <Flex>
      <Ave src={user2}></Ave>
      <Col.Title>watsapp</Col.Title>
    </Flex>
    <Col.Text>official</Col.Text>
    <Col.Text>12 mln Views</Col.Text>
    </Col>
    <Col>
    <Music src={tubeem}></Music>
    <Flex>
      <Ave src={user1}></Ave>
      <Col.Title>xxxtaction Official Music Video</Col.Title>
    </Flex>
    <Col.Text>taction</Col.Text>
    <Col.Text>98 mln Views .3 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={imagee}></Music>
    <Flex>
      <Ave src={user7}></Ave>
      <Col.Title>YouTube shorts </Col.Title>
    </Flex>
    <Col.Text>Shorts</Col.Text>
    <Col.Text>999 mln Views .10 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={down}></Music>
    <Flex>
      <Ave src={calm}></Ave>
      <Col.Title>Baby Calm Down FULL HD | Selena Gomez & Rema Official Music Video 2023</Col.Title>
    </Flex>
    <Col.Text>Rema</Col.Text>
    <Col.Text>15 mln Views .1 year ago</Col.Text>
    </Col>
    <Col>
    <Music src={imag}></Music>
    <Flex>
      <Ave src={peter}></Ave>
      <Col.Title>Peter & Gwen┃hold on (Edit)</Col.Title>
    </Flex>
    <Col.Text>DEX</Col.Text>
    <Col.Text>2.9 mln Views .2 year ago</Col.Text>
    </Col>
    </Row>
   </Main>
   </Display>
  )
}
