const TabItem = props => {
  const {onChangeTab, eachTab, activeTabList} = props

  const {tabId, displayText} = eachTab

  const buttonStyle =
    activeTabList === tabId ? 'highlight-style' : 'normal-style'

  const onClickTab = () => {
    onChangeTab(tabId)
  }

  return (
    <li className="li-item">
      <button className={buttonStyle} onClick={onClickTab} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
