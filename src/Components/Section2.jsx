import { Box, Button, Divider, Flex, Heading, Image, Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import img1 from '../Assets/organizations/stripe.svg';
import img2 from '../Assets/organizations/pinterest.svg';
import img3 from '../Assets/organizations/kpmg.svg';
import img4 from '../Assets/organizations/mercedes.svg';
import img5 from '../Assets/organizations/p&g.svg';
import img6 from '../Assets/organizations/telus.svg';

const Section2 = () => {
    return (
        <Box bg={'#0c1015'} pb={'100px'}>
            <Box w={'81%'} m={'0 auto'}>
                <Heading color={'white'} fontSize={'80px'}>Let’s build from here</Heading>
                <Text m={'20px 0 50px 0'} fontSize={'33px'} color={'gray.500'}>The AI-powered developer platform to build, scale, and deliver secure software.</Text>
                <Flex gap={'15px'} pb={'130px'}>
                    <InputGroup w={'45%'}>
                        <Input background={'white'} p={'23px 15px'} placeholder='Email address' />
                        <InputRightAddon p={'23px 15px'} color={'white'} fontWeight={'bold'} bg={'#773fc7'} children='Sign up for GitHub' />
                    </InputGroup>
                    <Box w={'1px'} color={'gray.500'}>
                        <Divider orientation='vertical' />
                    </Box>
                    <Button _hover={'none'} p={'23px 15px'} _active={'none'} color={'white'} border={'1px solid #773fc7'} variant={'outline'} rightIcon={<AiOutlineRight style={{ color: 'white' }} />}>Start a free enterprise trial</Button>
                </Flex>
                <Text pb={'40px'} color={'gray.500'}>Trusted by the world’s leading organizations ↘︎</Text>
                <Flex className='organization' justifyContent={'space-between'}>
                    <Image src={img1} />
                    <Image src={img2} />
                    <Image src={img3} />
                    <Image src={img4} />
                    <Image src={img5} />
                    <Image src={img6} />
                </Flex>
                <Box w={'85%'} lineHeight={'52px'} pb={'20px'}>
                    <Text mb={'10px'} fontSize={'32px'} color={'white'}>Productivity</Text>
                    <Text color={'white'} fontSize={'50px'}><span style={{color : '#7ee787'}}>Accelerate high-quality software development.</span> Our AI-powered platform drives innovation with tools that boost developer velocity.</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Section2;