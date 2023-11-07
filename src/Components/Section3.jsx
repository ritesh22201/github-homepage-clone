import { CheckIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineLeft, AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import { LuRefreshCw } from 'react-icons/lu';
import { BiSolidLockAlt } from 'react-icons/bi';
import section3Img1 from '../Assets/section3Img1.jpg';

const Section3 = () => {
    return (
        <section className='section3'>
            <Box w={'96%'} m={'0 auto'}>
                <Flex border={'1px solid gray'} p={'20px'} borderRadius={'10px 10px 0 0'} gap={'20px'} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex gap={'10px'} color={'gray'} fontSize={'20px'} alignItems={'center'}>
                        <AiOutlineLeft />
                        <AiOutlineRight />
                    </Flex>
                    <InputGroup w={'40%'}>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray'
                            fontSize='1.2em'
                            children={<BiSolidLockAlt />}
                        />
                        <Input _focusVisible={'none'} _hover={'none'} border={'1px solid gray'} color={'gray.200'} readOnly value={'mona-github-github-g59jpq2w5w7.github.dev'} placeholder='Enter amount' />
                        <InputRightElement color={'gray'}>
                            <LuRefreshCw />
                        </InputRightElement>
                    </InputGroup>
                    <AiOutlinePlus style={{ color: 'gray', fontSize: '22px' }} />
                </Flex>
                <Flex border={'1px solid gray'} borderRadius={'0 0 10px 10px'} p={'20px'}>
                    <Box w={'50%'} m={'0 auto'}>
                        <Image src={section3Img1} />
                    </Box>
                </Flex>
            </Box>
        </section>
    )
}

export default Section3;