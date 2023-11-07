import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import section6Img1 from '../Assets/section6Img1.png';
import section6Img2 from '../Assets/section6Img2.png';
import section6Img3 from '../Assets/section6Img3.png';

const Section6 = () => {
    return (
        <section>
            <Flex bg={'#0d1117'} p={'20px'} gap={'20px'}>
                <Box w={'50%'} borderRadius={'10px'} m={'0 auto'} bg={'#161b22'} border={'1px solid #282e37'} minH={'60vh'}>
                    <Box w={'80%'} pt={'40px'} ml={'60px'} mb={'100px'}>
                        <Text fontWeight={'500'} color={'gray.500'} fontSize={'23px'}><span style={{ color: 'white' }}>GitHub Actions</span> automates your build, test, and deployment workflow with simple and secure CI/CD.</Text>
                        <Flex alignItems={'center'} gap={'10px'} mt={'30px'}>
                            <Heading fontSize={'22px'} color={'white'}>Discover GitHub Actions</Heading>
                            <AiOutlineRight style={{ color: 'white', marginTop: '8px', fontWeight: 'bold' }} />
                        </Flex>
                    </Box>
                    <Image w={'90%'} src={section6Img1} />
                </Box>
                <Box w={'50%'} borderRadius={'10px'} m={'0 auto'} bg={'#161b22'} border={'1px solid #282e37'} minH={'60vh'}>
                    <Box w={'38%'} pt={'40px'} ml={'60px'} mb={'100px'}>
                        <Text fontWeight={'500'} color={'gray.500'} fontSize={'23px'}><span style={{ color: 'white' }}>GitHub Mobile</span> fits your projects in your pocket, so you never miss a beat while on the go.</Text>
                        <Flex alignItems={'center'} gap={'10px'} mt={'30px'}>
                            <Heading fontSize={'22px'} color={'white'}>Get GitHub Mobile </Heading>
                            <AiOutlineRight style={{ color: 'white', marginTop: '8px', fontWeight: 'bold' }} />
                        </Flex>
                    </Box>
                    <Image w={'90%'} src={section6Img2} />
                </Box>
            </Flex>
            <Box bg={'#0d1117'} p={'30px 20px'}>
                <Image borderRadius={'15px'} w={'100%'} src={section6Img3} />
                <Text mt={'30px'} fontSize={'14px'} w={'70%'} color={'gray.500'}>1 The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester Consulting, 2022. Results are for a composite organization based on interviewed customers.
                    <br/>
                    2 GitHub, Octoverse 2022 The state of open source software.</Text>
            </Box>
        </section>
    )
}

export default Section6;