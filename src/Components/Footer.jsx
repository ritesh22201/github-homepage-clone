import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import {RiTwitterXFill} from 'react-icons/ri';
import {FaSquareFacebook, FaTiktok} from 'react-icons/fa6';
import {ImLinkedin} from 'react-icons/im';
import { BsGithub, BsTwitch, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <Box p={'20px 20px 0 20px'} minH={'70vh'} bg={'#191f27'}>
                <Flex className='footer' gap={'40px'}>
                    <Box w={'35%'}>
                        <Heading mb={'40px'} color={'white'} size={'lg'}>GitHub</Heading>
                        <Text color='white' fontWeight='500'>Subscribe to The GitHub Insider</Text>
                        <Text fontSize={'14px'} color='gray.500'>Discover tips, technical guides, and best practices in our monthly newsletter for developers.</Text>
                        <Button mt={'40px'} color={'white'} variant={'ghost'} _hover={{ border: '2px solid white' }}>Subscribe</Button>
                    </Box>
                    <Flex w={'65%'} justifyContent={'space-between'} fontSize={'14px'} color={'gray.500'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'17px'}>
                            <Text fontWeight={'500'}>Product</Text>
                            <Link>Features</Link>
                            <Link>Interprise</Link>
                            <Link>Copilot</Link>
                            <Link>Security</Link>
                            <Link>Pricing</Link>
                            <Link>Team</Link>
                            <Link>Resources</Link>
                            <Link>Roadmap</Link>
                            <Link>Compare GitHub</Link>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={'17px'}>
                            <Text fontWeight={'500'}>Platform</Text>
                            <Link>Developer API</Link>
                            <Link>Partners</Link>
                            <Link>Electron</Link>
                            <Link>GitHub Desktop</Link>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={'17px'}>
                            <Text fontWeight={'500'}>Support</Text>
                            <Link>Docs</Link>
                            <Link>Community Forum</Link>
                            <Link>Professional Services</Link>
                            <Link>Premium Support</Link>
                            <Link>Skills</Link>
                            <Link>Status</Link>
                            <Link>Contact GitHub</Link>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={'17px'}>
                            <Text fontWeight={'500'}>Company</Text>
                            <Link>About</Link>
                            <Link>Customer Stories</Link>
                            <Link>Blog</Link>
                            <Link>The ReadME Project</Link>
                            <Link>Careers</Link>
                            <Link>Press</Link>
                            <Link>Inclusion</Link>
                            <Link>Social Impact</Link>
                            <Link>Shop</Link>
                        </Box>
                    </Flex>
                </Flex>
                <Flex mt={'40px'} bg={'#131920'} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'} gap={'20px'} fontSize={'14px'} color={'gray.500'}>
                        <Text> © 2023 GitHub, Inc.</Text> 
                        <Text>Terms</Text>
                        <Text>Privacy (Updated 08/2022)</Text>
                        <Text>Sitemap</Text>
                        <Text>What is Git?</Text>
                    </Flex>
                    <Flex fontSize={'22px'} p={'30px 10px'} color={'gray.500'} alignItems={'center'} gap='20px'>
                        <RiTwitterXFill/>
                        <FaSquareFacebook/>
                        <ImLinkedin/>
                        <BsYoutube/>
                        <BsTwitch/>
                        <FaTiktok/>
                        <BsGithub/>
                    </Flex>
                </Flex>
            </Box>
        </footer>
    )
}

export default Footer;