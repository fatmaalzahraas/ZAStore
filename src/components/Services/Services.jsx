import React from "react";
import {
  ServiceHeading,
  ServiceInfo,
  ServiceItem,
  ServicesSection,
  ServicesWrapper,
  ServiceText,
} from "./Services.style";
import { MainContainer } from "../../globalStyles/Global.styles";
import services from "../../assets/data/servicesData";
import {motion} from 'framer-motion';
const Services = () => {
  return (
    <ServicesSection>
      <MainContainer>
        <ServicesWrapper>
          {
            services.map((service, index) => (
                <ServiceItem as={motion.div} whileHover={{ scale: 1.1 }} key={index} background={service.bgc}>
             {service.icon}
            <ServiceInfo>
              <ServiceHeading>{service.title}</ServiceHeading>
              <ServiceText>{service.subtitle}</ServiceText>
            </ServiceInfo>
          </ServiceItem>
            ))
          }
        </ServicesWrapper>
      </MainContainer>
    </ServicesSection>
  );
};

export default Services;
