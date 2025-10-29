import { useTranslation } from 'next-i18next'
import type { TFuncKey } from 'i18next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '@chakra-ui/react'

export interface NavItemProps {
  name: TFuncKey<'common'>
  href: string
  onClose: () => void
}

export const NavItem: React.FC<NavItemProps> = ({ name, href, onClose }) => {
  const { t } = useTranslation('common')
  const { pathname } = useRouter()
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Button
        as='a'
        aria-current={isActive ? 'page' : 'false'}
        variant='ghost'
        size='lg'
        fontWeight='medium'
        color={isActive ? 'black' : 'gray.700'}
        bg={isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent'}
        borderRadius='xl'
        px='6'
        py='3'
        w='full'
        justifyContent='flex-start'
        _hover={{
          bg: 'rgba(99, 102, 241, 0.15)',
          color: 'gray.900',
          transform: 'translateX(4px)'
        }}
        transition='all 0.2s ease-in-out'
        onClick={onClose}
      >
        {t(name)}
      </Button>
    </NextLink>
  )
}
