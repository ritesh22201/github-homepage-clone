import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';

const Section5 = () => {
    return (
        <section className='section5'>
            <Box w={'96%'} borderRadius={'10px'} m={'0 auto'} bg={'#161b22'} border={'1px solid #282e37'} minH={'60vh'}>
                <Box w={'38%'} pt={'40px'} ml={'60px'} mb={'100px'}>
                    <Text fontWeight={'500'} color={'gray.500'} fontSize={'23px'}><span style={{ color: 'white' }}>GitHub Copilot</span> is your AI pair programmer that empowers you to complete tasks 55% faster by turning natural language prompts into coding suggestions.</Text>
                    <Flex alignItems={'center'} gap={'10px'} mt={'30px'}>
                        <Heading fontSize={'22px'} color={'white'}>Meet GitHub Copilot </Heading>
                        <AiOutlineRight style={{ color: 'white', marginTop: '8px', fontWeight: 'bold' }} />
                    </Flex>
                </Box>
            </Box>
        </section>
    )
}

export default Section5;