import React from "react";

import { Linking } from 'react-native';

import { useRoute } from "@react-navigation/native";

import Communications from "react-native-communications";

import {
  Wrapper,
  Container,
  Navbar,
  Content,
  BadgeGroup,
  Badge,
  BadgeText,
  Title,
  Attendance,
  Card,
  CardGroup,
  CardTextBold,
  CardText,
  Call,
  CallGroup,
  CallText,
} from "./styles";

import { Ionicons, AntDesign } from "@expo/vector-icons";

import NavigateToBack from "../../components";

export default Detail = () => {
  const route = useRoute();

  const { place } = route.params;

  return (
    <Wrapper>
      <Container>
        <Navbar>
          <NavigateToBack />
        </Navbar>

        <Content>
          <BadgeGroup>
            <Badge>
              <BadgeText>{place.categoriaUnidade}</BadgeText>
            </Badge>

            <Badge>
              <BadgeText>{`${place.cidade} / ${place.uf}`}</BadgeText>
            </Badge>
          </BadgeGroup>

          <Title>{place.nomeFantasia}</Title>
          <Attendance>{place.turnoAtendimento}</Attendance>

          <Card>
            <CardGroup>
              <CardTextBold>Address</CardTextBold>
              <CardText>{`${place.logradouro}, ${place.numero} - ${place.bairro}`}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>Telephone</CardTextBold>
              <CardText>{place.telefone}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>SUS</CardTextBold>
              <CardText>{place.vinculoSus}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>Administrative Sphere</CardTextBold>
              <CardText>{place.esferaAdministrativa}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>Full Description</CardTextBold>
              <CardText>{place.descricaoCompleta}</CardText>
            </CardGroup>
          </Card>

          <Call onPress={() => Communications.phonecall(place.telefone, true)}>
            <CallGroup>
              <Ionicons name="ios-call" size={24} color="#fff" />
              <CallText>Get in touch</CallText>
            </CallGroup>

            <AntDesign name="arrowright" size={28} color="#04D361" />
          </Call>
          
          <Call onPress={() => Linking.openURL(`google.navigation:q=${place.lat},${place.long}`)}>
            <CallGroup>
              <Ionicons name="ios-car" size={24} color="#fff" />
              <CallText>How to get</CallText>
            </CallGroup>

            <AntDesign name="arrowright" size={28} color="#04D361" />
          </Call>

        </Content>
      </Container>
    </Wrapper>
  );
};
