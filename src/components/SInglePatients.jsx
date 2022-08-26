import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { patientData } from "../redux/app/action";

const SInglePatients = ({ item }) => {
  const total = item.medicines.reduce((alem, item) => {
    return alem + +item.quntity;
  }, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/patients/${item.id}`);
    // console.log(item.id)
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://form-database123.herokuapp.com/patients/${id}`)
      .then(() => {dispatch(patientData())});
  };

  return (
    <Flex
      className="single-box"
      flexDirection={"column"}
      align={"center"}
      boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      py={"5"}
      px={"10"}
      borderRadius="9px"
      gap="10px"
    >
      <Image  onClick={handleRedirect} width={"300px"} src={item.image} alt="pat-image" />
      <Heading  onClick={handleRedirect} fontSize={"29px"}>{item.name}</Heading>
      <Text  onClick={handleRedirect} fontWeight={"700"}>Age: {item.age}</Text>
      <Text  onClick={handleRedirect} fontWeight={"700"}>Gender: {item.gender}</Text>
      <Text  onClick={handleRedirect} fontWeight={"700"}>Total Medicines : {total}</Text>
      <Button
        bg={"black"}
        color={"white"}
        onClick={() => handleDelete(item.id)}
      >
        DELETE
      </Button>
    </Flex>
  );
};

export default SInglePatients;
