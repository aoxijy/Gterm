import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Modal, Tabs } from 'antd'
import Link from '../common/external-link'
import LogoElem from '../common/logo-elem'
import { auto } from 'manate/react'
import { packInfo } from '../../common/constants'
import './info.styl'

const e = window.translate

export default auto(function InfoModal (props) {
  const { infoModalTab } = props
  const { showInfoModal } = window.store

  function onCloseAbout () {
    window.store.showInfoModal = false
  }

  if (!showInfoModal) {
    return null
  }

  const { name, homepage } = packInfo

  const title = (
    <div className='ant-modal-confirm-title font16'>
      <InfoCircleOutlined className='font20 mg1r' /> {e('about')} {name}
    </div>
  )

  const attrs = {
    title,
    width: window.innerWidth - 100,
    maskClosable: true,
    okText: e('ok'),
    onCancel: onCloseAbout,
    footer: null,
    open: true,
    wrapClassName: 'info-modal'
  }

  const items = [
    {
      key: 'info',
      label: e('about'),
      children: (
        <>
          <LogoElem />
          <p className='mg1b'>
            <HomeOutlined /> <b>{e('homepage')} ➾</b>
            <Link to={homepage} className='mg1l'>
              {homepage}
            </Link>
          </p>
        </>
      )
    }
  ]

  return (
    <Modal {...attrs}>
      <div className='about-wrap'>
        <Tabs activeKey={infoModalTab} items={items} />
      </div>
    </Modal>
  )
})
