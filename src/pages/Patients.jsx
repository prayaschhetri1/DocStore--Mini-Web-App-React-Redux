import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "axios";
import { useEffect } from "react";
import {
  Flex,
  Heading,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { patientData } from "../redux/app/action";
import SInglePatients from "./../components/SInglePatients";

const Patients = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.data);
  const [currItem, setCurrItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data?.length === 0) {
      dispatch(patientData());
    }
  }, [data.length, dispatch]);

  useEffect(() => {
    if (id) {
      let temp = data?.find((item) => {
        return Number(item.id) === Number(id);
      });
      temp && setCurrItem(temp);
    }
  }, [data, id]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  console.log(loading);
  if (loading) {
    return (
      <Flex m={"170px auto"} align={"center"} flexDirection="column">
        <Spinner size="xl" color="blue" />
        <Heading mt="10px" color={"blue"}>
          Loading...
        </Heading>
      </Flex>
    );
  }
  return (
    <TableContainer mt="50px">
      <Heading textAlign={"center"} color="teal">
        {currItem.name}
      </Heading>
      <Table variant="simple" width="60%" m="auto">
        <Thead>
          <Tr>
            <Th>Medicines</Th>
            <Th>Count</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currItem.medicines.map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{item.medicine}</Td>
                <Td>{item.quntity}</Td>
              </Tr>
            );
          })}
        </Tbody>
        
      </Table>
    </TableContainer>
  );
};

export default Patients;
