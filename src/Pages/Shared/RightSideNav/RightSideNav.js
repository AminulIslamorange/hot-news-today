import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaWhatsapp,FaTwitch,FaYoutube } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarusel from "../BrandCarusel/BrandCarusel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary" className="mb-2">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h4>Find on Us</h4>
        <ListGroup>
          <ListGroup.Item className="mb-2" ><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2" ><FaWhatsapp/> Whatsapp</ListGroup.Item>
          <ListGroup.Item className="mb-2" ><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2" ><FaTwitch/>Twitch</ListGroup.Item>
          <ListGroup.Item className="mb-2" ><FaYoutube/> Youtube</ListGroup.Item>
        </ListGroup>
      </div>
      <div><BrandCarusel/></div>
    </div>
  );
};

export default RightSideNav;
