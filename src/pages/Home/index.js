import React, { useState, useEffect } from "react";

import * as Location from 'expo-location';

import { useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  Container,
  Navbar,
  Logo,
  Header,
  Description,
  DescriptionText,
  DescriptionBold,
  Img,
  Content,
  Title,
  Subtitle,
  OptionGroup,
  Option,
  OptionInfo,
  OptionText,
} from "./styles";

import {
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
} from "@expo/vector-icons";

import ImgMap from "../../assets/map.png";

export default Home = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const getPosition = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setMessage('The user did not authorize the use of geolocation');
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      
      setMessage(JSON.stringify(location, null, 4));
      setLocation(location.coords);
    }

    getPosition();
  }, [])

  const navigateToHospital = () => {
    navigation.navigate('Chart', { 
        userLocation: location, 
        category: 'HOSPITAL', 
        icon: 'hospital-building' 
      }
    );
  };

  const navigateToHealthCenter = () => {
    navigation.navigate('Chart', { 
        userLocation: location, 
        category: 'POSTO DE SAUDE', 
        icon: 'medical-bag' 
      }
    );
  };

  const navigateToSamu = () => {
    navigation.navigate('Chart', { 
        userLocation: location, 
        category: 'SAMU', 
        icon: 'ambulance' 
      }
    );
  };

  return (
    <Wrapper>
      <Container>
        <Navbar>
          <MaterialCommunityIcons name="hospital-marker" size={26} color="#fff" />
          <Logo>Healthmap</Logo>
        </Navbar>
        <Header>
          <Description>
            <DescriptionText>Against</DescriptionText>
            <DescriptionText>health bodies</DescriptionText>
            <DescriptionBold>close to you!</DescriptionBold>
          </Description>

          <Img source={ImgMap} />
        </Header>
      </Container>

      <Content>
        
        {!location && (
          <>
          <Subtitle>{message}</Subtitle>
          </>
        )}

        {location && (
          <>
            <Title>health bodies</Title>
            <Subtitle>Choose one of the bodies below and see the ones closest to you.</Subtitle>
    
            <OptionGroup>
              <Option onPress={navigateToHospital}>
                <OptionInfo>
                  <MaterialCommunityIcons name="hospital-building" size={28} color="#fff" />
                  <OptionText> Hospitals </OptionText>
                </OptionInfo>
                <AntDesign name="arrowright" size={28} color="#04D361" />
              </Option>
    
              <Option onPress={navigateToHealthCenter}>
                <OptionInfo>
                  <MaterialCommunityIcons name="medical-bag" size={28} color="#fff" />
                  <OptionText> health centers </OptionText>
                </OptionInfo>
                <AntDesign name="arrowright" size={28} color="#04D361" />
              </Option>
    
              <Option onPress={navigateToSamu}>
                <OptionInfo>
                  <MaterialCommunityIcons name="ambulance" size={28} color="#fff" />
                  <OptionText> FIND </OptionText>
                </OptionInfo>
                <AntDesign name="arrowright" size={28} color="#04D361" />
              </Option>
            </OptionGroup>
          </>
        )}
      </Content>
    </Wrapper>
  );
};
