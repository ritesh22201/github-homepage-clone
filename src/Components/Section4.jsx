import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import section4Img1 from '../Assets/section4Img1.jpg';

const Section4 = () => {
    return (
        <section>
            <Box backgroundImage={`url(${section4Img1})`} backgroundSize={'cover'} minH={'90vh'}>
                <Box w={'38%'} pt={'40px'} ml={'160px'} mb={'100px'}>
                    <Text fontWeight={'500'} color={'gray.500'} fontSize={'25px'}><span style={{ color: 'white' }}>GitHub Codespaces</span> offers a complete dev environment in seconds, so you can code, build, test, and open pull requests from any repo anywhere.</Text>
                    <Flex alignItems={'center'} gap={'10px'} mt={'30px'}>
                        <Heading fontSize={'25px'} color={'white'}>Check out GitHub Codespaces</Heading>
                        <AiOutlineRight style={{ color: 'white', marginTop : '8px', fontWeight : 'bold' }} />
                    </Flex>
                </Box>
                <Box ml={'157px'} color={'white'} pb={'120px'} fontSize={'22px'} fontWeight={'500'}>
                    <Button borderRadius={'20px'} _hover={'none'} _active={'none'} border={'1px solid #7ee787'} variant={'outline'} color={'#7ee787'}>Did you know ?</Button>
                    <Heading mt={'10px'} fontSize={'60px'} fontWeight={'500'} color={'#7ee787'}>22% increase</Heading>
                    <Text mt={'10px'}>in developer productivity</Text>
                    <Text>after three years with GitHub</Text>
                </Box>
            </Box>
        </section>
    )
}

export default Section4;