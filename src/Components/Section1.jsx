import React from 'react';
import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react';
import logo from '../Assets/github-logo.svg';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import section1Img1 from '../Assets/section1Img1.webp';
import {BsSearch} from 'react-icons/bs';
import section1Img2 from '../Assets/section1Img2.png';
import section1Img3 from '../Assets/sectionImg3.webp';

const Section1 = () => {
    return (
        <Flex position={'relative'} minH={'100vh'} justifyContent={'space-between'} backgroundImage={`url(${section1Img1})`} backgroundSize={'cover'}>
            <Flex gap={'10px'} h={'60px'} p={'15px'} alignItems={'center'}>
                <Image w={'32px'} src={logo} />
                <Button _active={'none'} _hover={'none'} color={'gray.200'} variant={'ghost'}>Product <AiOutlineDown /></Button>
                <Button _active={'none'} _hover={'none'} color={'gray.200'} variant={'ghost'}>Solutions <AiOutlineDown /></Button>
                <Button _active={'none'} _hover={'none'} color={'gray.200'} variant={'ghost'}>Open Source <AiOutlineDown /></Button>
                <Button _active={'none'} _hover={'none'} color={'gray.200'} variant={'ghost'}>Pricing</Button>
            </Flex>
            <Flex position={'relative'} w={'40%'} gap={'15px'} p={'12px'}>
                <Input _focusVisible={'none'} color={'gray.200'} border={'1px solid gray'} placeholder='Search or jump to...' pl={'40px'} bg={'#282f46'} _placeholder={{ color: '#c9cbd0' }} />
                <Box position={'absolute'} color={'gray.200'} left={'20px'} top={'24px'}>
                    <BsSearch />
                </Box>
                <Button _active={'none'} _hover={'none'} color={'gray.200'} variant={'ghost'}>Sign in</Button>
                <Button p={'10px 20px'} _active={'none'} _hover={'none'} color={'gray.200'} variant={'outline'}>Sign up</Button>
            </Flex>
            <Box position={'absolute'} right={'80px'} top={'120px'}>
                <Image w={'360px'} src={section1Img3} />
            </Box>
            <Flex alignItems={'center'} gap={'20px'} border={'1px solid gray'} p={'17px 30px'} borderRadius={'40px'} position={'absolute'} left={'120px'} bottom={'40px'}>
                <Image w={'45px'} src={section1Img2} />
                <Box>
                    <Heading color={'white'} fontSize={'18px'}>GitHub Universe: Dive in to AI, security, and DevEx</Heading>
                    <Text color='gray.500'>Get your tickets now to join us on Nov. 8-9.</Text>
                </Box>
                <AiOutlineRight style={{ color: 'white' }} />
            </Flex>
        </Flex>
    )
}

export default Section1;