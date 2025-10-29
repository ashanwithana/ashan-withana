import {
  Flex,
  Link,
  Text,
  HStack,
  IconButton,
  Stack,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react'
import { VscArrowUp } from 'react-icons/vsc'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { usePostHog } from 'posthog-js/react'
import { config } from '@config/config'

const links: { name: string; href: string }[] = [
  { name: 'Email', href: config.email_link },
  { name: 'Github', href: config.github },
  { name: 'LinkedIn', href: config.linkedin },
]

export const Footer: React.FC = () => {
  const posthog = usePostHog()
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue('white', 'gray.900')
  const borderColor = useColorModeValue('black', 'gray.600')
  const textColor = useColorModeValue('black', 'white')

  return (
    <Flex
      as='footer'
      align={{ base: 'stretch', md: 'center' }}
      justify='space-between'
      direction={{ base: 'column', md: 'row' }}
      mt='4'
      pt='12'
      pb='24'
      px={{ base: '4', md: '8' }}
      bg={bg}
      color={textColor}
      borderColor={borderColor}
      borderTop='1px solid'
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '6', lg: '16' }}
        mb={{ base: '16', md: 0 }}
      >
        <Text casing='uppercase'>{config.copyright}</Text>
        <Text casing='uppercase'>Sri Lanka 🇱🇰</Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'flex-start', md: 'center' }}
        spacing='16'
      >
        <HStack
          w='full'
          spacing={{ base: '6', md: '8' }}
          justify={{ base: 'space-between', sm: 'flex-start' }}
        >
          {links.map(({ name, href }) => (
            <Link
              key={name}
              title={name}
              href={href}
              variant='contact'
              onClick={() =>
                posthog.capture('footer_link_clicked', { name, link: href })
              }
              isExternal
            >
              {name}
            </Link>
          ))}
        </HStack>
        <HStack spacing='4'>
          <IconButton
            aria-label={
              colorMode === 'light'
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
            icon={<Text>{colorMode === 'light' ? '🌙' : '☀️'}</Text>}
            variant='minimal'
            size='icon'
            onClick={() => {
              toggleColorMode()
              posthog.capture('color_mode_toggled', {
                mode: colorMode === 'light' ? 'dark' : 'light',
              })
            }}
          />
          <IconButton
            aria-label='Go to top'
            title='Go to top'
            icon={<Text>↑</Text>}
            variant='minimal'
            size='icon'
            onClick={() => window.scrollTo(0, 0)}
          />
        </HStack>
      </Stack>
    </Flex>
  )
}
