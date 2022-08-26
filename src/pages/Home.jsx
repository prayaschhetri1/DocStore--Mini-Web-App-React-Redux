import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Heading,
  Box,
  SimpleGrid,
  Spinner,
  Select,
  Input,
  Flex,
  Button,
  ModalOverlay,
  ModalContent,
  Modal,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalHeader,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { getData, patientData } from "./../redux/app/action";
import SInglePatients from "./../components/SInglePatients";

const Home = () => {
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const data = useSelector((state) => state.app.data);
  const isLoading = useSelector((state) => state.app.isLoading);
  const [mainData, setMainData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    dolo: "",
    paracetamol: "",
    zandu_balm: "",
    decold_total: "",
    crocien: "",
  });
  useEffect(() => {
    dispatch(getData(token, username));
    setMainData(data);
  }, [dispatch, token, username, setMainData, data]);

  useEffect(() => {
    dispatch(patientData());
  }, [dispatch]);

  //  Sorting

  const handleSort = (value) => {
    if (value === "htl") {
      const HightToLow = mainData.sort((a, b) => {
        return b.age - a.age;
      });

      setMainData([...HightToLow]);
      // dispatch(patientData());
    } else {
      const lowToHigh = mainData.sort((a, b) => {
        return a.age - b.age;
      });

      setMainData([...lowToHigh]);
    }
  };

  // Filtering

  const handleFilter = (value) => {
    if (value == "Male") {
      const filteredData = data.filter((item) => {
        return item.gender === value;
      });
      setMainData(filteredData);
      console.log(filteredData);
    } else if (value === "Female") {
      const filteredData = data.filter((item) => {
        return item.gender === value;
      });
      setMainData(filteredData);
      console.log(filteredData);
    } else {
      dispatch(patientData());
    }
  };

  // Search Functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // ADD FUNCTIONALITY

  const handleChange = (e) => {
 
    return onClose;
  };

  if (isLoading || loading) {
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
    <Box mt="50px">
      <Flex width={{ base: "80%", md: "60%", lg: "40%" }} gap={"10px"} m="auto">
        <Select
          onChange={(e) => handleSort(e.target.value)}
          placeholder="Sort By Age"
        >
          <option value="htl">High to Low</option>
          <option value="lth">Low to High</option>
        </Select>
        <Select onChange={(e) => handleFilter(e.target.value)}>
          <option value="all">Filter By Gender</option>

          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>
      </Flex>
      <Flex width={{ base: "80%", md: "60%", lg: "40%" }} m={"30px auto"}>
        <Input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          border="none"
          borderRadius={"0px"}
          outline="none"
          borderBottom={"1px solid black"}
          placeholder="Search Patient..."
        />
      </Flex>
      <Flex width={{ base: "80%", md: "60%", lg: "40%" }} m="auto">
        <Button onClick={onOpen} bg="blue" color="white">
          ADD PATIENT
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <Box display={"flex"} gap={"10px"} m="auto" flexDirection="column">
            <form className="form" onSubmit={handleSubmit}>
              <Input
                value={form.name}
                type="text"
                placeholder="Add name..."
                name="name"
                onChange={handleChange}
              />
              <Input
                value={form.age}
                type="number"
                placeholder="Add age..."
                name="age"
                onChange={handleChange}
              />
              <Text>Gender</Text>
              <RadioGroup
                name="gender"
                onChange={handleChange}
                value={form.gender}
              >
                <Radio value="Male">Female</Radio>
                <Radio value="Male">Male</Radio>
              </RadioGroup>
              <SimpleGrid spacing={3} column={2}>
                <Text>Select Medicines</Text>
                <Checkbox
                  value={form.paracetamol}
                  colorScheme="red"
                  onChange={handleChange}
                  name="paracetamol"
                >
                  Paracetamol
                </Checkbox>
                <Checkbox
                  value={form.dolo}
                  colorScheme="green"
                  onChange={handleChange}
                  name="dolo"
                >
                  Dolo
                </Checkbox>
                <Checkbox
                  value={form.crocien}
                  colorScheme="blue"
                  onChange={handleChange}
                  name="crocien"
                >
                  Crocien
                </Checkbox>
                <Checkbox
                  value={form.decold_total}
                  colorScheme="teal"
                  onChange={handleChange}
                  name="decold_total"
                >
                  Decold-Total
                </Checkbox>
                <Checkbox
                  value={form.zandu_balm}
                  colorScheme="yellow"
                  onChange={handleChange}
                  name="zandu_balm"
                >
                  Zandu Balm
                </Checkbox>
              </SimpleGrid>
            </form>
          </Box>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              SUBMIT
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <SimpleGrid
        width={"80%"}
        margin={"30px auto"}
        columns={{
          base: 1,
          md: 2,
          lg: 4,
        }}
        gap={"10px"}
      >
        {mainData.length &&
          mainData
            .filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })

            .map((item) => {
              return <SInglePatients item={item} key={item.id} />;
            })}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
