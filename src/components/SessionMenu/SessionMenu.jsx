import { FaUserAlt } from 'react-icons/fa'
import { NavigationButton } from '../_theme/Buttons'
import styles from './sessionMenu.module.css'

import useLanguage from '../../hooks/useLanguage'
import useToggle from '../../hooks/useToggle'
import useSession from '../../hooks/useSession'

import { BsGear } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

import { MenuToggle, ItemToggle } from '../_theme/Menus'

import { colors } from '../../config/theme'

export default function SessionMenu () {
  const { dictionaryWord } = useLanguage()
  const { isToggle, handleToggle } = useToggle()
  const { logout } = useSession()
  const handleUser = () => window.alert('Cosme fulanito todavía no se puede configurar')

  return (
    <div className={styles.container}>
      <div className={styles.selectbox} onClick={() => handleToggle(2)}>
        <NavigationButton width='50px'>
          <FaUserAlt/>
        </NavigationButton>
      </div>
      { isToggle(2) &&
        <MenuToggle>
          <ItemToggle onClick={() => handleUser} align = 'right'>
            <h5>{dictionaryWord('session.options')}</h5>
          </ItemToggle>
          <ItemToggle onClick={() => logout} align = 'right'>
            <h5>{dictionaryWord('session.close')}</h5>
          </ItemToggle>
        </MenuToggle>
      }
    </div>
  )
}
