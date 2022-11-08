import React from "react";
import Iframe from "react-iframe";

import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Textarea,
  FormControl,
  Button,
} from "@chakra-ui/react";

import "./mapcontact.css";

const MapContact = () => {
  return (
    <div className="container-mapcontact">
      <div className="containerMap">
        <div className="map">
          <h3 className="title-map">Location</h3>
          <div className="iframe">
            <Iframe
              className="map"
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.8289688861764!2d-114.0651180846487!3d50.90838067954116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176876b320175%3A0x33fad0328ed93e75!2sATRIUM%20PHYSIOTHERAPY%20CLINIC%20(%20Formerly%20Health%20Plus%20Physiotherapy)!5e0!3m2!1ses!2sco!4v1651957226240!5m2!1ses!2sco"
              width="500"
              height="350"
            />
          </div>
        </div>
      </div>
      <div className="containerContact">
        <h3 className="title-contact">Contact</h3>
        <p className="contact-p">
          For any questions please send us a e-mail or call us directly
        </p>
        <div className="contact-cont">
          <FormControl className="container-form ">
            <Stack>
              <Input
                name="name"
                className="name_"
                id="name"
                type="text"
                placeholder="Name"
              />
              <Input
                name="email"
                className="email_"
                id="email"
                type="email"
                placeholder="Email"
              />
              <InputGroup>
                <InputLeftElement pointerEvents="none" />
                <Input
                  name="tel"
                  className="tel"
                  id="tel"
                  type="tel"
                  placeholder="Phone number"
                />
              </InputGroup>
              <Stack spacing={4}>
                <Input
                  name="subject"
                  className="subject"
                  id="subject"
                  type="text"
                  placeholder="Subjet"
                />
              </Stack>
              <Textarea
                name="message"
                id="message"
                className="message"
                placeholder="Message"
              />
            </Stack>
            <Button className="btn-cont">Send</Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default MapContact;
