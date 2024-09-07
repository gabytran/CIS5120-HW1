import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Box,
  Center,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  VStack,
  HStack,
  Button,
  Icon,
  createIcon
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon} from '@chakra-ui/icons';
import { FaCloudRain } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";

const WeatherApp = () => {
  return (
    <ChakraProvider>
      <Center height="110vh" width="100vw">
        <Box
          backgroundImage={"../images/rain.jpg"}
          borderRadius="35px"
          w="360px"
          py="35px"
          px="10px"
          h="735px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          color="white" // Set text color to white
        >
          {/* Top Section: Toggle and Search Bar */}
          <Flex justify="space-between" align="center" mb="10px">
            <HStack spacing="4px">
              <Button size="xs" bg="rgba(255, 255, 255, 0.7)" color="black">°F</Button>
              <Button size="xs" bg="rgba(255, 255, 255, 0.3)" color="black">°C</Button>
            </HStack>
            <InputGroup size="sm" w="200px">
              <Input
                placeholder="Search for a city or location"
                bg="rgba(255, 255, 255, 0.3)"
                border="none"
                borderRadius="100px"
                color="white"
                fontSize="0.7em"
                _placeholder={{ color: 'white' }}
              />
              <InputRightElement children={<SearchIcon color="white" />} />
            </InputGroup>
          </Flex>

          {/* Header */}
          <VStack spacing="4px" mb="0px" textAlign="center">
            <Text fontSize="1.2em">My Location</Text>
            <Icon as={FaCloudRain} boxSize={10} />
            <Text fontSize="0.9em" color="#84A4C6">Heavy Rain</Text>
          </VStack>

          {/* Actual and Feels Like */}
          <Flex justify="space-between" mb="0px">
            <Box
              borderRadius="10px"
              p="5px"
              textAlign="center"
              flex="1"
              mx="5px"
            >
              <Text>Actual</Text>
              <Text fontSize="2em">71°</Text>
              <Flex flex="3" align="center" mx="5px">
              <Text fontSize="0.9em">{64}°</Text>
                <Box
                  h="5px"
                  flex="1"
                  mx="5px"
                  borderRadius="5px"
                  bgGradient={`linear(to-r, #4ACC95, #FFED01)`}
                >
                </Box>
              <Text fontSize="0.9em">{74}°</Text>
              </Flex>
            </Box>
            
            <Box
              borderRadius="10px"
              p="5px"
              textAlign="center"
              flex="1"
              mx="5px"
            >
              <Text>Feels Like</Text>
              <Text fontSize="2em">69°</Text>
              <Flex flex="3" align="center" mx="5px">
              <Text fontSize="0.9em">{62}°</Text>
                <Box
                  h="5px"
                  flex="1"
                  mx="5px"
                  borderRadius="5px"
                  bgGradient={`linear(to-r, #4ACC95, #FFED01)`}
                >
                </Box>
              <Text fontSize="0.9em">{72}°</Text>
              </Flex>
            </Box>
          </Flex>

          {/* Rain Expected */}
          <Text fontSize="0.9em" color="#84A4C6" textAlign="center" mb="10px">
            Rain expected all day until 7pm
          </Text>

          {/* Hourly Forecast */}
          <Box bg="rgba(255, 255, 255, 0.3)" borderRadius="10px" px="10px" py="5px" mb="5px">
            <Flex justify="space-between">
              {[
                { time: 'Now', temp: 71, icon: FaCloudRain, percentage: 70 },
                { time: '2pm', temp: 70, icon: FaCloudRain, percentage: 80 },
                { time: '3pm', temp: 70, icon: FaCloudRain, percentage: 90 },
                { time: '4pm', temp: 70, icon: FaCloudRain, percentage: 90 },
                { time: '5pm', temp: 69, icon: FaCloudRain, percentage: 85 },
                { time: '6pm', temp: 69, icon: FaCloudRain, percentage: 85 },
                { time: '7pm', temp: 68, icon: FaCloud, percentage: 0 }
              ].map((forecast, index) => (
                <VStack key={index} spacing="3px" textAlign="center">
                  <Text fontSize="0.8em" fontWeight="bold">{forecast.time}</Text>
                  <Box position="relative">
              <Icon as={forecast.icon} boxSize={4} />
              {forecast.percentage > 0 && (
                <Text
                  position="absolute"
                  top="95%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="0.6em"
                  color="white"
                  fontWeight="bold"
                  borderRadius="50%"
                  p="2px 4px"
                >
                  {forecast.percentage}%
                </Text>
              )}
            </Box>
                  <Text fontSize="0.8em" fontWeight="bold">{forecast.temp}°</Text>
                </VStack>
              ))}
            </Flex>
          </Box>

          {/* Forecast Header */}
          <Text fontSize="0.9em" mb="5px" textAlign="left" pl="5px" >Forecast</Text>

          {/* 7-Day Forecast */}
          <Box bg="rgba(255, 255, 255, 0.3)" borderRadius="10px" px="15px" pb="3px" pt="10px" mb="5px">
            <VStack spacing="6px" mb="5px">
              {[
                { day: 'Today', low: 64, high: 74, icon: FaCloudRain, iColor: "#FFFFFF", iSize: 4, startGrad: '#4ACC95', endGrad: "#FFED01" },
                { day: 'Thurs', low: 62, high: 71, icon: FaCloudRain, iColor: "#FFFFFF", iSize: 4, startGrad: '#4ACC95', endGrad: "#FFED01" },
                { day: 'Fri', low: 56, high: 63, icon: FaCloud, iColor: "#FFFFFF", iSize: 3.5, startGrad: '#4AC0CC', endGrad: "#D4FF01" },
                { day: 'Sat', low: 63, high: 71, icon: FaCloudRain, iColor: "#FFFFFF", iSize: 4, startGrad: '#4ACC95', endGrad: "#FFED01" },
                { day: 'Sun', low: 61, high: 69, icon: FaCloud, iColor: "#FFFFFF", iSize: 3.5, startGrad: '#4ACCB1', endGrad: "#F2FF01" },
                { day: 'Mon', low: 68, high: 79, icon: IoIosSunny, iColor: "#FADE3F", iSize: 5, startGrad: '#87CC4A', endGrad: "#FFB001" }
              ].map((forecast, index) => (
                <Flex key={index} w="100%" align="center" justify="space-between">
                  <Text flex="0.75" fontSize="0.9em">{forecast.day}</Text>
                  <Icon color={forecast.iColor} as={forecast.icon} flex="1.5" boxSize={forecast.iSize} />
                  <Flex flex="3" align="center" mx="5px">
                    <Text fontSize="0.9em">{forecast.low}°</Text>
                    <Box
                      h="5px"
                      flex="1"
                      mx="5px"
                      borderRadius="5px"
                      bgGradient={`linear(to-r, ${forecast.startGrad}, ${forecast.endGrad})`}
                      width={`${(forecast.high - forecast.low) * 3}px`}
                    ></Box>
                    <Text fontSize="0.9em">{forecast.high}°</Text>
                  </Flex>
                </Flex>
              ))}
            </VStack>

            {/* Expand Section */}
            <Center>
              <Flex direction="column" alignItems="center" spacing="0px">
                <Text fontSize="0.7em" color="white" textAlign="center" mb="-3px">
                  Expand
                </Text>
                <ChevronDownIcon boxSize={3} />
              </Flex>
            </Center>
          </Box>

          {/* Bottom Information Section */}
          <HStack spacing="5px" justify="space-between">
            {[
              { label: 'UV', value: '1', desc: 'Low', fontSize: "2em" },
              {
                label: 'Sun',
                value: (
                  <>
                    <HStack>
                      <Icon color = "#FADE3F" as={FiSunrise} boxSize={3} name="sunrise" />
                      <Text fontSize="0.8em">6:31am</Text>
                    </HStack>
                    <HStack>
                      <Icon color = "#FADE3F" as={FiSunset} boxSize={3} name="sunset" />
                      <Text fontSize="0.8em">8:21pm</Text>
                    </HStack>
                  </>
                ),
                desc: '',
                fontSize: "1em"
              },
              { label: 'Wind', value: '5mph', desc: 'Small gusts', fontSize: "1.25em" },
              { label: 'Air', value: '23', desc: 'Good', fontSize: "2em"},
            ].map((info, index) => (
              <Box 
                textAlign="center"
              >
                <Text fontSize="0.9em" mb="3px">{info.label}</Text>

              
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                key={index}
                bg="rgba(255, 255, 255, 0.3)"
                borderRadius="10px"
                p="10px"
                textAlign="center"
                width="80px"
                height="75px"
              >
                
                <Text fontSize={info.fontSize}>{info.value}</Text>
                {info.desc && <Text fontSize="0.65em">{info.desc}</Text>}
                
              </Box>
              </Box>
            ))}
          </HStack>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default WeatherApp;







